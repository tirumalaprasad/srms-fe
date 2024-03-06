import {
    Divider,
    HStack,
    Heading,
    IconButton,
    Table,
    TableProps,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react";
import { FiTrash2 } from "react-icons/fi";

const CourseTable = (props: TableProps) => (
    <>
        <Heading as="h3" size="lg">
            Courses
        </Heading>
        <Divider paddingBottom={4} />
        <Table {...props}>
            <Thead>
                <Tr>
                    <Th>Course name</Th>
                    <Th>Delete</Th>
                </Tr>
            </Thead>
            <Tbody>
                {courses.map((course) => (
                    <Tr key={course.courseId}>
                        <Td>
                            <Text color="fg.muted">{course.courseName}</Text>
                        </Td>
                        <Td>
                            <HStack spacing="1">
                                <IconButton
                                    icon={<FiTrash2 />}
                                    variant="tertiary"
                                    aria-label="Delete member"
                                />
                            </HStack>
                        </Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    </>
);

var courses = [
    {
        courseId: 1,
        courseName: "A green door 101",
    },
    {
        courseId: 2,
        courseName: "A green door 102",
    },
    {
        courseId: 3,
        courseName: "A green door 103",
    },
];

export default CourseTable;
