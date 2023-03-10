import { Center, HStack } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import Header from "@/components/Head";

export default function MyPageTab() {
  return (
    <>
      <Header title="My App | Tab 2" />

      <HStack
        w="100%"
        h="100vh"
      >
        <Navbar tab="Tab 2" />
        <Center>
          <Main tab="Tab 2"></Main>
        </Center>
      </HStack>
    </>
  );
}
