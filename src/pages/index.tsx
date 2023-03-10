import { Inter } from "next/font/google";
import { Center, HStack } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import Header from "@/components/Head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header title="My App" />

      <HStack
        w="100%"
        h="100vh"
      >
        <Navbar tab={"Tab 1"} />
        <Center>
          <Main tab={"Tab 1"}></Main>
        </Center>
      </HStack>
    </>
  );
}
