import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"header" "main"`,
        md: `"nav main" "nav main"`,
        lg: `"nav main main" "nav main main"`,
      }}
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
        >
          <p>Demo</p>
        </GridItem>
      </Show>

      <Show above="md">
        <Flex direction="column" flex="1" position="fixed" >
          <GridItem area="nav" paddingX={5} paddingTop={5}>
            <NavBar />
          </GridItem>
        </Flex>
      </Show>

      <GridItem area="main">
        <Box paddingLeft={2} marginBottom={3} marginTop={3}>
          <p>Demo</p>
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
