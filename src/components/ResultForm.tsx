import {
    Box,
    Stack,
    FormControl,
    FormLabel,
    Divider,
    Flex,
    Button,
    Heading,
    Select,
} from "@chakra-ui/react";

const ResultForm = () => {
    return (
        <>
            <Heading as="h3" size="lg">
                Add Result
            </Heading>
            <Divider paddingBottom={4} />

            <Box >
                <Stack
                    spacing="5"
                    px={{ base: "4", md: "6" }}
                    py={{ base: "5", md: "6" }}
                >
                    <Stack
                        spacing="6"
                        direction={{ base: "column", md: "row" }}
                    >
                        <FormControl id="CourseName">
                            <FormLabel>Course Name</FormLabel>
                            <Select placeholder="Select Course">
                                {courses.map((course) => (
                                    <option
                                        value={course.courseId}
                                        key={course.courseId}
                                    >
                                        {course.courseName}
                                    </option>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl id="StudentName">
                            <FormLabel>Student Name</FormLabel>
                            <Select placeholder="Select Student">
                                {students.map((student) => (
                                    <option
                                        value={student.studentId}
                                        key={student.studentId}
                                    >
                                        {student.studentFullName}
                                    </option>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl id="score">
                            <FormLabel>Score</FormLabel>
                            <Select placeholder="Select Score">
                                {scores.map((score) => (
                                    <option value={score} key={score}>
                                        {score}
                                    </option>
                                ))}
                            </Select>
                        </FormControl>
                    </Stack>
                </Stack>
                <Divider />
                <Flex
                    direction="row-reverse"
                    py="4"
                    px={{ base: "4", md: "6" }}
                >
                    <Button colorScheme="blue" variant="outline" type="submit">
                        Submit
                    </Button>
                </Flex>
            </Box>
        </>
    );
};

var scores = ["A", "B", "C", "D", "E", "F"];

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

export default ResultForm;
