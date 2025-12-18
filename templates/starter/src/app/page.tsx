"use client";

import { Button, Text, VStack } from "@/swiftui";

export default function ContentView() {
  function click() {
    console.log("Clicked");
  }
  return (
    <VStack spacing={10} className={"pt-110"}>
      <Text font={"largeTitle"} content={"Title"} />
      <Button label="Click me" action={click} />
    </VStack>
  );
}
