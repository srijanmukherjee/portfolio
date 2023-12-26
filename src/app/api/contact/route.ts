import ContactEmailTemplate from "@/components/contact-email-template";
import { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const MESSAGE_CHAR_LIMIT = 512;

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const captchaToken = body["h-captcha-response"] || body["g-recaptcha-response"];

        if (!captchaToken || typeof captchaToken !== "string") {
            return Response.json(
                {
                    error: "Invalid captcha token",
                },
                {
                    status: 400,
                },
            );
        }

        if (!body.name || typeof body.name !== "string") {
            return Response.json(
                {
                    error: "Name is missing",
                },
                { status: 400 },
            );
        }

        if (body.name.length === 0) {
            return Response.json(
                {
                    error: "Name is empty",
                },
                {
                    status: 400,
                },
            );
        }

        if (!body.email || typeof body.email !== "string") {
            return Response.json(
                {
                    error: "Email is missing",
                },
                { status: 400 },
            );
        }

        if (!validateEmail(body.email)) {
            return Response.json(
                {
                    error: "Invalid email",
                },
                { status: 400 },
            );
        }

        if (body.message && typeof body.message !== "string") {
            return Response.json(
                {
                    error: "Expected message to be a string",
                },
                {
                    status: 400,
                },
            );
        }

        if (body.message && String(body.message).length > MESSAGE_CHAR_LIMIT) {
            return Response.json(
                {
                    error: `Message is too long (max ${MESSAGE_CHAR_LIMIT} characters allowed).`,
                },
                {
                    status: 400,
                },
            );
        }

        // validate captcha token
        const validationData = new FormData();
        validationData.set("response", captchaToken);
        validationData.set("secret", process.env.HCAPTCHA_SECRET!);

        const valid = await fetch("https://api.hcaptcha.com/siteverify", {
            method: "POST",
            body: validationData,
        })
            .then((res) => res.json())
            .then((res) => !!res.success)
            .catch(() => false);

        if (!valid) {
            return Response.json(
                {
                    error: "Invalid captcha token",
                },
                {
                    status: 400,
                },
            );
        }

        const { name, email, message } = body;

        const { error } = await resend.emails.send({
            from: process.env.SENDER!,
            to: [process.env.NOTIFICATION_RECEIVER!],
            reply_to: email,
            subject: "New contact from portfolio",
            react: ContactEmailTemplate({ name, email, message }),
        });

        if (error) {
            return Response.json(
                {
                    error: "Internal error: failed to send message",
                },
                { status: 403 },
            );
        }

        return Response.json({
            message: "Message sent",
        });
    } catch (error) {
        return Response.json(
            {
                error: "Invalid request",
            },
            { status: 500 },
        );
    }
}

const validateEmail = (email: string) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        );
};
