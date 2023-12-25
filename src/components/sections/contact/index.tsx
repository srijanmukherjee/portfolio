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
} from "@mantine/core";
import {
    IconAt,
    IconBrandGmail,
    IconBrandLinkedin,
    IconBrandTwitter,
    IconBrandWhatsapp,
    IconDeviceMobile,
    IconPhone,
    IconPhoneCall,
    IconRecordMail,
} from "@tabler/icons-react";
import classes from "./contact.module.css";

export default function ContactSection() {
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
                        <form>
                            <Stack>
                                <TextInput
                                    required
                                    label="Name"
                                    placeholder="How should I address you?"
                                />
                                <TextInput
                                    required
                                    label="Email"
                                    leftSectionPointerEvents="none"
                                    leftSection={<IconAt style={{ width: rem(16) }} />}
                                    placeholder="Your email address"
                                    type="email"
                                />
                                <Textarea label="Message" placeholder="Your message/query" />
                                <Button>Submit</Button>
                            </Stack>
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
                                                <Anchor
                                                    href="https://www.linkedin.com/in/srijanmukherjee/"
                                                    target="_blank">
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
                                                <Anchor
                                                    href="https://twitter.com/MuSrijan"
                                                    target="_blank">
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
