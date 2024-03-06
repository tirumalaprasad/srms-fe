import { Box, Flex } from "@chakra-ui/react";

import CourseTable from "./CourseTable";
import CourseForm from "./CourseForm";

import ResultForm from "./ResultForm";
import ResultTable from "./ResultTable";

import StudentTable from "./StudentTable";
import StudentForm from "./StudentForm";

const Main = (prop:any) => {
    return (
        <Flex h="full" maxW="container.sm">
            <Box flex="1">
                <StudentForm />
            </Box>
        </Flex>
    );
};

export default Main;
