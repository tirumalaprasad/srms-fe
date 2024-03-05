import { FiGrid, FiX } from "react-icons/fi";
import {
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    IconButton,
} from "@chakra-ui/react";

import { useState } from "react";
import NavBar from "./NavBar";

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <IconButton
                aria-label="Toggle Menu"
                icon={<FiGrid />}
                onClick={handleToggle}
                m={2}
            />
            <Drawer
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                placement="left"
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader
                        display="flex"
                        justifyContent="flex-end"
                        alignItems="center"
                        boxShadow="md"
                    >
                        <IconButton
                            aria-label="Close Menu"
                            icon={<FiX />}
                            onClick={() => setIsOpen(false)}
                        />
                    </DrawerHeader>
                    <DrawerBody>
                        <NavBar />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default HamburgerMenu;
