import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/react";

import CourseTable from "./CourseTable";
import CourseForm from "./CourseForm";

import ResultForm from "./ResultForm";
import ResultTable from "./ResultTable";

import StudentTable from "./StudentTable";
import StudentForm from "./StudentForm";

import { Route, Routes } from "react-router-dom";

const Home = () => {
    return (
        <>
            <Heading as="h3" size="lg">
                Student Result Management System
            </Heading>
            <Divider paddingBottom={4} />
            <Text fontSize="l">Select an option from the sidebar</Text>
        </>
    );
};

const Main = () => {
    return (
        <Flex h="full" maxW="container.sm">
            <Box flex="1">
                <Routes>
                    <Route path="/" Component={Home} />

                    <Route path="/list-student" Component={StudentTable} />
                    <Route path="/add-student" Component={StudentForm} />

                    <Route path="/list-result" Component={ResultTable} />
                    <Route path="/add-result" Component={ResultForm} />

                    <Route path="/list-course" Component={CourseTable} />
                    <Route path="/add-course" Component={CourseForm} />
                </Routes>
            </Box>
        </Flex>
    );
};

export default Main;
