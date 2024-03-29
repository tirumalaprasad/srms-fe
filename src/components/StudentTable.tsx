import {
    Divider,
    HStack,
    Heading,
    IconButton,
    Spinner,
    Table,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react";
import { FiTrash2 } from "react-icons/fi";
import { Student, getStudents, deleteStudent } from "../hooks/useStudents";

const StudentTable = () => {
    const { data, isLoading, error, refetch } = getStudents();

    if (error) return null;
    if (isLoading) return <Spinner />;

    const handleDeleteCourse = async (studentId: number) => {
        try {
            await deleteStudent({ studentId: studentId });
            refetch();
        } catch (error) {
            console.error("Error deleting student:", error);
        }
    };

    return (
        <>
            <Heading as="h3" size="lg">
                Students
            </Heading>
            <Divider paddingBottom={4} />
            <Table>
                <Thead>
                    <Tr>
                        <Th>First Name & Family name</Th>
                        <Th>Date of Birth</Th>
                        <Th>Email</Th>
                        <Th>Delete</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data?.map((student: Student) => (
                        <Tr key={student.studentId}>
                            <Td>
                                <Text color="fg.muted">
                                    {student.studentFullName}
                                </Text>
                            </Td>
                            <Td>
                                <Text color="fg.muted">
                                    {student.studentDoB}
                                </Text>
                            </Td>
                            <Td>
                                <Text color="fg.muted">
                                    {student.studentEmail}
                                </Text>
                            </Td>
                            <Td>
                                <HStack spacing="1">
                                    <IconButton
                                        icon={<FiTrash2 />}
                                        variant="tertiary"
                                        aria-label="Delete member"
                                        onClick={() =>
                                            handleDeleteCourse(
                                                student.studentId
                                            )
                                        }
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

export default StudentTable;
