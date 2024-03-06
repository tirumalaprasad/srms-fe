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

const StudentTable = (props: TableProps) => (
    <>
        <Heading as="h3" size="lg">
            Students
        </Heading>
        <Divider paddingBottom={4} />
        <Table {...props}>
            <Thead>
                <Tr>
                    <Th>First Name & Family name</Th>
                    <Th>Date of Birth</Th>
                    <Th>Email</Th>
                    <Th>Delete</Th>
                </Tr>
            </Thead>
            <Tbody>
                {students.map((student) => (
                    <Tr key={student.studentId}>
                        <Td>
                            <Text color="fg.muted">
                                {student.studentFullName}
                            </Text>
                        </Td>
                        <Td>
                            <Text color="fg.muted">{student.studentDoB}</Text>
                        </Td>
                        <Td>
                            <Text color="fg.muted">{student.studentEmail}</Text>
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

var students = [
    {
        studentId: 1,
        studentFullName: "Rhea McLaughlin",
        studentDoB: "2013-01-01",
        studentEmail: "Landen99@g.com",
    },
    {
        studentId: 3,
        studentFullName: "T P",
        studentDoB: "2000-01-01",
        studentEmail: "T22@g.com",
    },
];

export default StudentTable;
