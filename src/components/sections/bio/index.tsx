import { Box, Timeline, Title, Text } from "@mantine/core";
import {
    IconTree,
    IconDeviceLaptop,
    IconBrandUpwork,
    IconSchool,
    IconBabyBottle,
    IconBriefcase,
} from "@tabler/icons-react";

export default function BioSection() {
    return (
        <Box>
            <Title order={2} mb="md" display="flex" style={{ alignItems: "center", gap: "10px" }}>
                <IconTree size={32} /> Bio
            </Title>

            <Timeline reverseActive active={4} bulletSize={32} lineWidth={2}>
                <Timeline.Item bullet={<IconBriefcase size={18} />} title="SDE intern">
                    <Text c="dimmed" size="sm">
                        Equal.in
                    </Text>
                    <Text size="xs" mt={4}>
                        July, 2024 - Present
                    </Text>
                </Timeline.Item>

                <Timeline.Item
                    bullet={<IconDeviceLaptop size={18} />}
                    title="Computer Science and Engineering Degree">
                    <Text c="dimmed" size="sm">
                        Kalinga Institute of Industrial Technology, Bhubaneshwar
                    </Text>
                    <Text size="xs" mt={4}>
                        2021 - Present
                    </Text>
                </Timeline.Item>

                <Timeline.Item bullet={<IconBrandUpwork size={18} />} title="Started freelancing">
                    <Text c="dimmed" size="sm">
                        Upwork (current), Fiverr, Truelancer
                    </Text>
                    <Text size="xs" mt={4}>
                        2021 - Present
                    </Text>
                </Timeline.Item>

                <Timeline.Item
                    title="Senior Secondary"
                    bullet={<IconSchool size={18} />}
                    lineVariant="dashed">
                    <Text c="dimmed" size="sm">
                        D.A.V. Public School, Asansol
                    </Text>
                    <Text size="xs" mt={4}>
                        2021
                    </Text>
                </Timeline.Item>

                <Timeline.Item title="Arrival on Earth" bullet={<IconBabyBottle size={18} />}>
                    <Text c="dimmed" size="sm"></Text>
                    <Text size="xs" mt={4}>
                        2004
                    </Text>
                </Timeline.Item>
            </Timeline>
        </Box>
    );
}
