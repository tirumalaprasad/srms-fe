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
    Spinner,
} from "@chakra-ui/react";

import { Result, getEvalObjects, createResult } from "../hooks/useResults";
import { useState } from "react";

const scoresObj = ["A", "B", "C", "D", "E", "F"];
const ResultForm = () => {
    const [isEmpty, setIsEmpty] = useState(false);
    const [formData, setFormData] = useState({
        courseId: 0,
        studentId: 0,
        score: "",
    });

    const { data, isLoading, error } = getEvalObjects();

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        if (!formData.courseId || !formData.studentId || !formData.score) {
            setIsEmpty(true);
            return;
        }
        try {
            setIsEmpty(false);
            let res = await createResult(formData);
            alert(res?.message);
            setFormData({
                courseId: 0,
                studentId: 0,
                score: "",
            });
        } catch (error) {
            alert(`Error reporting result: ${error}`);
        }
    };

    const handleCourseChange = (event: any) => {
        setFormData({
            ...formData,
            courseId: parseInt(event.target.value),
        });
    };

    const handleStudentChange = (event: any) => {
        setFormData({
            ...formData,
            studentId: parseInt(event.target.value),
        });
    };

    const handleScoreChange = (event: any) => {
        setFormData({
            ...formData,
            score: event.target.value,
        });
    };

    if (error) return null;
    if (isLoading) return <Spinner />;

    return (
        <>
            <Heading as="h3" size="lg">
                Add Result
            </Heading>
            <Divider paddingBottom={4} />
            <form onSubmit={handleSubmit}>
                <Box>
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
                                <Select
                                    placeholder="Select Course"
                                    onChange={handleCourseChange}
                                    value={formData.courseId}
                                >
                                    {data?.courses.map((course: Result) => (
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
                                <Select
                                    placeholder="Select Student"
                                    onChange={handleStudentChange}
                                    value={formData.studentId}
                                >
                                    {data?.students.map((student: Result) => (
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
                                <Select
                                    placeholder="Select Score"
                                    onChange={handleScoreChange}
                                    value={formData.score}
                                >
                                    {scoresObj.map((score) => (
                                        <option value={score} key={score}>
                                            {score}
                                        </option>
                                    ))}
                                </Select>
                            </FormControl>
                        </Stack>
                    </Stack>
                    {isEmpty && (
                        <p style={{ color: "red" }}>
                            Input fields cannot be empty
                        </p>
                    )}
                    <Divider />
                    <Flex
                        direction="row-reverse"
                        py="4"
                        px={{ base: "4", md: "6" }}
                    >
                        <Button
                            colorScheme="blue"
                            variant="outline"
                            type="submit"
                        >
                            Submit
                        </Button>
                    </Flex>
                </Box>
            </form>
        </>
    );
};

export default ResultForm;
