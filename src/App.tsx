import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import HamburgerMenu from "./components/HamburgerMenu";
import Main from "./components/Main";

function App() {
    return (
        <Grid
            templateAreas={{
                base: `"header" "main"`,
                md: `"nav main" "nav main"`,
                lg: `"nav main" "nav main"`,
            }}
            gridTemplateRows={"50px 1fr"}
            templateColumns={{
                base: `1fr`,
                md: `250px 1fr `,
                lg: `250px 1fr`,
            }}
        >
            <Show below="md">
                <GridItem
                    area="header"
                    position="sticky"
                    top="0"
                    boxShadow="md"
                    zIndex="sticky"
                    bg="gray.100"
                >
                    <HamburgerMenu />
                </GridItem>
            </Show>

            <Show above="md">
                <GridItem area="nav">
                    <NavBar />
                </GridItem>
            </Show>

            <GridItem area="main">
                <Box
                    height="100vh"
                    paddingLeft={5}
                    paddingRight={5}
                    marginTop={5}
                    marginBottom={5}
                >
                    <Main page="home" />
                </Box>
            </GridItem>
        </Grid>
    );
}

export default App;
