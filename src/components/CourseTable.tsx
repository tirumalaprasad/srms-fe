import {
    Divider,
    HStack,
    Heading,
    IconButton,
    Table,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    Spinner,
} from "@chakra-ui/react";
import { FiTrash2 } from "react-icons/fi";
import { Course, useCourses } from "../hooks/useCourses";

const CourseTable = () => {
    const { data, isLoading, error } = useCourses();

    if (error) return null;
    if (isLoading) return <Spinner />;

    return (
        <>
            <Heading as="h3" size="lg">
                Courses
            </Heading>
            <Divider paddingBottom={4} />
            <Table>
                <Thead>
                    <Tr>
                        <Th>Course name</Th>
                        <Th>Delete</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data?.map((course: Course) => (
                        <Tr key={course.courseId}>
                            <Td>
                                <Text color="fg.muted">
                                    {course.courseName}
                                </Text>
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
};

export default CourseTable;
