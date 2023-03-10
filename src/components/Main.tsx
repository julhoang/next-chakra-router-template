import React, { useState } from "react";
import { VStack, Button, Heading } from "@chakra-ui/react";

export default function Main({ tab }: { tab: string }) {
  return (
    <VStack
      w="100%"
      h="100vh"
      p={4}
    >
      <Heading size="md">{tab.toUpperCase()}</Heading>
    </VStack>
  );
}
