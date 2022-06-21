import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Layout = ({ children }) => {
  return (
    <Container maxW='90vw' paddingY="10">
      <Flex w='100%' justify="space-between" alignItems="center">
        <Heading as="h2">Guestbook</Heading>
        <ConnectButton />
      </Flex>
      <Box my={9}>{children}</Box>
    </Container>
  );
};

export default Layout;
