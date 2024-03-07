import {
    Box,
    Stack,
    FormControl,
    FormLabel,
    Input,
    Divider,
    Flex,
    Button,
    Heading,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { postCourse } from "../hooks/useCourses";

const CourseForm = () => {
    const ref = useRef<HTMLInputElement>(null);
    const [isEmpty, setIsEmpty] = useState(false);

    const handleSubmit = async (event:any) => {
        event.preventDefault();
        if (!ref.current?.value) {
            setIsEmpty(true); // Set isEmpty state to true if field is empty
            return;
        }
        try {
            setIsEmpty(false);
            let res = await postCourse({ courseName: ref?.current?.value });
            alert(res?.message);
            window.location.reload();
        } catch (error) {
            alert(`Error creating course: ${error}`);
        }
    };

    return (
        <>
            <Heading as="h3" size="lg">
                Add Course
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
                                {isEmpty && (
                                    <p style={{ color: "red" }}>
                                        Course Name cannot be empty
                                    </p>
                                )}
                                <Input
                                    ref={ref}
                                    placeholder="Biology 101"
                                    focusBorderColor="teal.400"
                                />
                            </FormControl>
                        </Stack>
                    </Stack>
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

export default CourseForm;
