import { Box, Stack, Text, Divider } from "@chakra-ui/react";
import { NavButton } from "./NavButton";
import {
    FiHome,
    FiUserPlus,
    FiUsers,
    FiBook,
    FiBookOpen,
    FiAward,
    FiBarChart,
} from "react-icons/fi";

const NavBar = () => {
    return (
        <Box
            w="full"
            h="full"
            bg={"#f9f9fb"}
            paddingX={5}
            paddingTop={5}
            boxShadow="xl"
        >
            <Stack justify="space-between" spacing="1" width="full">
                <Stack spacing="3" shouldWrapChildren>
                    <Stack spacing="1">
                        <NavButton label="Home" icon={FiHome} navLink="/"/>
                    </Stack>
                    <Divider borderWidth={0.5} borderColor={"black"} />
                    <Stack justify="space-between" width="full">
                        <Stack spacing="5" shouldWrapChildren>
                            <Stack>
                                <Text
                                    textStyle="sm"
                                    color="fg.subtle"
                                    fontWeight="medium"
                                >
                                    Students
                                </Text>
                                <Stack spacing="1">
                                    <NavButton
                                        label="Add New Student"
                                        icon={FiUserPlus}
                                        navLink="/add-student"
                                    />
                                    <NavButton
                                        label="Students List"
                                        icon={FiUsers}
                                        navLink="/list-student"
                                    />
                                </Stack>
                            </Stack>
                            <Stack>
                                <Text
                                    textStyle="sm"
                                    color="fg.subtle"
                                    fontWeight="medium"
                                >
                                    Courses
                                </Text>
                                <Stack spacing="1">
                                    <NavButton
                                        label="Add New Courses"
                                        icon={FiBook}
                                        navLink="/add-course"
                                    />
                                    <NavButton
                                        label="Courses List"
                                        icon={FiBookOpen}
                                        navLink="/list-course"
                                    />
                                </Stack>
                            </Stack>
                            <Stack>
                                <Text
                                    textStyle="sm"
                                    color="fg.subtle"
                                    fontWeight="medium"
                                >
                                    Results
                                </Text>
                                <Stack spacing="1">
                                    <NavButton
                                        label="Add New Results"
                                        icon={FiAward}
                                        navLink="/add-result"
                                    />
                                    <NavButton
                                        label="Results List"
                                        icon={FiBarChart}
                                        navLink="/list-result"
                                    />
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    );
};

export default NavBar;
