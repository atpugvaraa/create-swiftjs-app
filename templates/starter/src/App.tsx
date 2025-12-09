import React from 'react';
import { createRoot } from 'react-dom/client';
import { VStack, Text } from './SwiftUIRuntime.tsx';

export const Hello = () => {
  return (
    <VStack>
      <Text>
        {"Welcome to SwiftReact"}
      </Text>
    </VStack>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<Hello />);
