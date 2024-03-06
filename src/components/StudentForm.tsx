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

const StudentForm = () => {
    return (
        <>
            <Heading as="h3" size="lg">
                Add Student
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
                        <FormControl id="firstName">
                            <FormLabel>First Name</FormLabel>
                            <Input
                                focusBorderColor="teal.400"
                                placeholder="Christoph"
                            />
                        </FormControl>
                        <FormControl id="familyName">
                            <FormLabel>Family Name</FormLabel>
                            <Input
                                focusBorderColor="teal.400"
                                placeholder="Winston"
                            />
                        </FormControl>
                    </Stack>
                    <Stack
                        spacing="6"
                        direction={{ base: "column", md: "row" }}
                    >
                        <FormControl id="dob">
                            <FormLabel>Date of birth</FormLabel>
                            <Input
                                focusBorderColor="teal.400"
                                placeholder="YYYY-MM-DD"
                            />
                        </FormControl>
                        <FormControl id="email">
                            <FormLabel>Email Address</FormLabel>
                            <Input
                                focusBorderColor="teal.400"
                                placeholder="abc@xyz.com"
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

export default StudentForm;
