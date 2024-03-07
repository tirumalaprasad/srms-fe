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
    Spinner,
} from "@chakra-ui/react";
import { Result, getResults } from "../hooks/useResults";

const ResultTable = (props: TableProps) => {
    const { data, isLoading, error } = getResults();

    if (error) return null;
    if (isLoading) return <Spinner />;
    return (
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
                    {data?.map((result: Result) => (
                        <Tr key={result.resultId}>
                            <Td>
                                <Text color="fg.muted">
                                    {result.courseName}
                                </Text>
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
};

export default ResultTable;
