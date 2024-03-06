import {
    Table,
    TableProps,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    Heading,
    Divider,
} from "@chakra-ui/react";

const ResultTable = (props: TableProps) => (
    <>
        <Heading as="h3" size="lg">
            Results
        </Heading>
        <Divider paddingBottom={4} />
        <Table {...props}>
            <Thead>
                <Tr>
                    <Th>Course</Th>
                    <Th>Student</Th>
                    <Th>Score</Th>
                </Tr>
            </Thead>
            <Tbody>
                {results.map((result) => (
                    <Tr key={result.resultId}>
                        <Td>
                            <Text color="fg.muted">{result.courseName}</Text>
                        </Td>
                        <Td>
                            <Text color="fg.muted">
                                {result.studentFullName}
                            </Text>
                        </Td>
                        <Td>
                            <Text color="fg.muted">{result.score}</Text>
                        </Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    </>
);

var results = [
    {
        resultId: 1,
        courseId: 1,
        courseName: "A green door 101",
        studentId: 1,
        studentFullName: "Rhea McLaughlin",
        score: "B",
    },
    {
        resultId: 3,
        courseId: 1,
        courseName: "A green door 101",
        studentId: 3,
        studentFullName: "T P",
        score: "B",
    },
    {
        resultId: 4,
        courseId: 2,
        courseName: "A green door 102",
        studentId: 3,
        studentFullName: "T P",
        score: "B",
    },
    {
        resultId: 5,
        courseId: 3,
        courseName: "A green door 103",
        studentId: 3,
        studentFullName: "T P",
        score: "B",
    },
    {
        resultId: 6,
        courseId: 3,
        courseName: "A green door 103",
        studentId: 1,
        studentFullName: "Rhea McLaughlin",
        score: "B",
    },
    {
        resultId: 7,
        courseId: 2,
        courseName: "A green door 102",
        studentId: 1,
        studentFullName: "Rhea McLaughlin",
        score: "B",
    },
];

export default ResultTable;
