interface ContactEmailTemplateProps {
    name: string;
    email: string;
    message?: string;
}

export default function ContactEmailTemplate({ name, email, message }: ContactEmailTemplateProps) {
    return (
        <div>
            You have a new contact from portfolio website
            <table cellPadding={2} cellSpacing={2}>
                <tr>
                    <th>Name</th>
                    <td>{name}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>{email}</td>
                </tr>
                <tr>
                    <th>Message</th>
                    <td>{message}</td>
                </tr>
                <tr>
                    <th>Time</th>
                    <td>{new Date().toString()}</td>
                </tr>
            </table>
        </div>
    );
}
