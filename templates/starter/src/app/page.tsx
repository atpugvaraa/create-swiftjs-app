"use client";

import { useState } from "react";
import { Button, Text, VStack } from "@/swiftui";

export default function ContentView() {
    const [count, setCount] = useState(0);

  function click() {
    setCount(count + 1)
  }
  return (
    <VStack spacing={10} className={"pt-110"}>
      <Text font={"largeTitle"} content={"Welcome to swift.js"} />
        <Text font={"title"} content={`You have clicked ${count} times`} />
      <Button title="Click me" action={click} />
    </VStack>
  );
}
