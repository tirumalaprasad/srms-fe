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

const CourseForm = () => {
    return (
        <>
            <Heading as="h3" size="lg">
                Add Course
            </Heading>
            <Divider paddingBottom={4} />
            <Box as="form">
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
                            <Input
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
                    <Button colorScheme="blue" variant="outline" type="submit">
                        Submit
                    </Button>
                </Flex>
            </Box>
        </>
    );
};

export default CourseForm;
