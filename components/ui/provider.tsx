"use client";

import { ChakraProvider, defaultSystem, ClientOnly, Skeleton } from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ClientOnly fallback={<Skeleton boxSize="8" />}>
        <ColorModeProvider {...props} />
      </ClientOnly>
    </ChakraProvider>
  );
}
