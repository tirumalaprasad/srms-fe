import { As, Button, ButtonProps, HStack, Icon, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
interface NavButtonProps extends ButtonProps {
    icon: As;
    label: string;
    navLink: string
}

export const NavButton = (props: NavButtonProps) => {
    const { icon, label, navLink, ...buttonProps } = props;
    return (
        <Button
            variant="ghost"
            justifyContent="start"
            _hover={{
                bg: "#dddfe2",
                transform: "scale(0.98)",
                borderColor: "#bec3c9",
            }}
            {...buttonProps}
            as={Link}
            to={navLink}
        >
            <HStack spacing="3">
                <Icon as={icon} boxSize="6" color="fg.subtle" />
                <Text>{label}</Text>
            </HStack>
        </Button>
    );
};
