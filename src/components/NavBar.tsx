import { Stack, Text } from "@chakra-ui/react";
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
        <Stack justify="space-between" spacing="1" width="full">
            <Stack spacing="8" shouldWrapChildren>
                <Stack spacing="1">
                    <NavButton label="Home" icon={FiHome} />
                </Stack>
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
                                />
                                <NavButton
                                    label="Students List"
                                    icon={FiUsers}
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
                                />
                                <NavButton
                                    label="Courses List"
                                    icon={FiBookOpen}
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
                                />
                                <NavButton
                                    label="Results List"
                                    icon={FiBarChart}
                                />
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default NavBar;
