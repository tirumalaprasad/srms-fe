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
import { useState } from "react";
import { createStudent } from "../hooks/useStudents";

const StudentForm = () => {
    const [isEmpty, setIsEmpty] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        familyName: "",
        dob: "",
        email: "",
    });

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        if (
            !formData.firstName ||
            !formData.familyName ||
            !formData.dob ||
            !formData.email
        ) {
            setIsEmpty(true); // Set isEmpty state to true if any field is empty
            return;
        }
        try {
            setIsEmpty(false);
            let res = await createStudent(formData);
            alert(res?.message);
            window.location.reload();
        } catch (error) {
            alert(`Error creating course: ${error}`);
        }
    };

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        fieldName: string
    ) => {
        setFormData({
            ...formData,
            [fieldName]: event.target.value,
        });
    };

    return (
        <>
            <Heading as="h3" size="lg">
                Add Student
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
                            <FormControl id="firstName">
                                <FormLabel>First Name</FormLabel>
                                <Input
                                    focusBorderColor="teal.400"
                                    placeholder="Christoph"
                                    value={formData.firstName}
                                    onChange={(e) =>
                                        handleChange(e, "firstName")
                                    }
                                />
                            </FormControl>
                            <FormControl id="familyName">
                                <FormLabel>Family Name</FormLabel>
                                <Input
                                    focusBorderColor="teal.400"
                                    placeholder="Winston"
                                    value={formData.familyName}
                                    onChange={(e) =>
                                        handleChange(e, "familyName")
                                    }
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
                                    value={formData.dob}
                                    onChange={(e) => handleChange(e, "dob")}
                                />
                            </FormControl>
                            <FormControl id="email">
                                <FormLabel>Email Address</FormLabel>
                                <Input
                                    focusBorderColor="teal.400"
                                    placeholder="abc@xyz.com"
                                    value={formData.email}
                                    onChange={(e) => handleChange(e, "email")}
                                />
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

export default StudentForm;
