import { containerSize } from "@/config/theme";
import {
    Box,
    Container,
    Title,
    Text,
    Grid,
    Stack,
    TextInput,
    rem,
    Textarea,
    Button,
    Flex,
    Table,
    Anchor,
    Alert,
} from "@mantine/core";
import {
    IconAt,
    IconBrandGmail,
    IconBrandLinkedin,
    IconBrandTwitter,
    IconDeviceMobile,
    IconHeart,
    IconHeartBroken,
    IconPhone,
} from "@tabler/icons-react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import classes from "./contact.module.css";
import * as links from "@/data/links";
import { FormEvent, useRef, useState } from "react";

export default function ContactSection() {
    const captchaRef = useRef<HCaptcha>(null);
    const formRef = useRef<HTMLFormElement>(null);
    const [submitting, setSubmitting] = useState<boolean>(false);
    const [response, setResponse] = useState<{ error?: string; success?: string }>({});

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!captchaRef.current) {
            console.error("hCaptcha is not loaded");
            return;
        }

        if (!formRef.current) {
            console.error("form ref is not set");
            return;
        }

        setSubmitting(true);

        // verify captcha
        try {
            await captchaRef.current.execute({ async: true });
        } catch (error) {
            if (typeof error !== "string") {
                setResponse({
                    error: "Something went wrong",
                });
            } else if (error !== "challenge-closed") {
                setResponse({
                    error: "Captcha challenge failed",
                });
            }

            if (process.env.NODE_ENV === "development") console.error(error);
            setSubmitting(false);
            return;
        }

        // create json payload from the form values
        const data = new FormData(formRef.current);
        const payload: { [key: string]: any } = {};
        data.forEach((value, key) => (payload[key] = value));

        // send message
        await fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify(payload),
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.error) {
                    throw res.error;
                }

                if (!res.message) {
                    throw new Error("Received invalid response from server");
                }

                setResponse({
                    success: res.message,
                });

                formRef.current?.reset();
            })
            .catch((error) => {
                if (typeof error === "string") {
                    setResponse({
                        error,
                    });
                } else {
                    setResponse({
                        error: "Failed to send message",
                    });
                }

                if (process.env.NODE_ENV === "development") console.error(error);
            });

        captchaRef.current.resetCaptcha();
        setSubmitting(false);
    };

    return (
        <Box className={classes.mainContainer} id="contact">
            <Container size={containerSize}>
                <Title
                    order={2}
                    mb="xl"
                    display="flex"
                    style={{ alignItems: "center", gap: "10px" }}>
                    <IconPhone size={32} /> Contact{" "}
                    <Text span inherit c="blue">
                        Me
                    </Text>
                </Title>
                <Grid>
                    <Grid.Col span={{ md: 7 }}>
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <Stack>
                                {response.success && (
                                    <Alert
                                        title={response.success}
                                        icon={<IconHeart />}
                                        color="green"
                                        withCloseButton
                                        onClose={() =>
                                            setResponse((v) => ({ ...v, success: undefined }))
                                        }>
                                        I will get back to you soon.
                                    </Alert>
                                )}

                                {response.error && (
                                    <Alert
                                        title={response.error}
                                        icon={<IconHeartBroken />}
                                        color="red"
                                        withCloseButton
                                        onClose={() =>
                                            setResponse((v) => ({ ...v, error: undefined }))
                                        }
                                    />
                                )}

                                <TextInput
                                    required
                                    label="Name"
                                    name="name"
                                    placeholder="How should I address you?"
                                />
                                <TextInput
                                    required
                                    label="Email"
                                    name="email"
                                    leftSectionPointerEvents="none"
                                    leftSection={<IconAt style={{ width: rem(16) }} />}
                                    placeholder="Your email address"
                                    type="email"
                                />
                                <Textarea
                                    label="Message"
                                    name="message"
                                    placeholder="Your message/query"
                                />
                                <Button type="submit" loading={submitting}>
                                    Submit
                                </Button>
                            </Stack>
                            <HCaptcha
                                sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITEKEY}
                                ref={captchaRef}
                                size="invisible"
                                theme="dark"
                            />
                        </form>
                    </Grid.Col>
                    <Grid.Col span={{ md: 5 }}>
                        <Flex
                            h="100%"
                            gap="10px"
                            align={{ md: "center" }}
                            direction={{ md: "row", base: "column" }}>
                            <Box className={classes.divider}>
                                <Box>OR</Box>
                            </Box>
                            <Stack style={{ flex: 1 }}>
                                <Table verticalSpacing="sm" withRowBorders={false}>
                                    <Table.Tbody>
                                        <Table.Tr>
                                            <Table.Th
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "6px",
                                                    width: "120px",
                                                }}>
                                                <IconBrandGmail size={20} />
                                                Email
                                            </Table.Th>
                                            <Table.Td>
                                                <Anchor href="mailto:emailofsrijan@gmail.com">
                                                    emailofsrijan@gmail.com
                                                </Anchor>
                                            </Table.Td>
                                        </Table.Tr>
                                        <Table.Tr>
                                            <Table.Th
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "6px",
                                                }}>
                                                <IconBrandLinkedin size={20} />
                                                Linkedin
                                            </Table.Th>
                                            <Table.Td>
                                                <Anchor href={links.linkedin} target="_blank">
                                                    in/srijanmukherjee
                                                </Anchor>
                                            </Table.Td>
                                        </Table.Tr>
                                        <Table.Tr>
                                            <Table.Th
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "6px",
                                                }}>
                                                <IconDeviceMobile size={20} />
                                                Phone no.
                                            </Table.Th>
                                            <Table.Td>
                                                <Anchor href="tel:+919382729328">
                                                    +91 9382729328
                                                </Anchor>
                                            </Table.Td>
                                        </Table.Tr>
                                        <Table.Tr>
                                            <Table.Th
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "6px",
                                                }}>
                                                <IconBrandTwitter size={20} />
                                                Twitter
                                            </Table.Th>
                                            <Table.Td>
                                                <Anchor href={links.twitter} target="_blank">
                                                    @MuSrijan
                                                </Anchor>
                                            </Table.Td>
                                        </Table.Tr>
                                    </Table.Tbody>
                                </Table>
                            </Stack>
                        </Flex>
                    </Grid.Col>
                </Grid>
            </Container>
        </Box>
    );
}
