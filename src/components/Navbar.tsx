import React from "react";
import { VStack, Button, Heading } from "@chakra-ui/react";
import { TabType } from "@/utils/types";
import { useRouter } from "next/router";

export default function Navbar({ tab }: { tab: TabType }) {
  const router = useRouter();

  return (
    <VStack
      minW="300px"
      p={4}
      spacing={4}
      bgColor="gray.200"
      h="100%"
    >
      <Heading size="md">MY ADMIN</Heading>
      <Button
        colorScheme="teal"
        variant={tab === "Tab 1" ? "solid" : "outline"}
        onClick={() => router.push("/")}
        w="90%"
        marginBottom="10"
      >
        Tab 1
      </Button>
      <Button
        colorScheme="teal"
        variant={tab === "Tab 2" ? "solid" : "outline"}
        onClick={() => router.push("/sampletab")}
        w="90%"
      >
        Tab 2
      </Button>
    </VStack>
  );
}
