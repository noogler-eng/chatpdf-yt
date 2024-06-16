// making an client side rendering
"use client";

import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

type Props = { children: React.ReactNode };

const queryClient = new QueryClient();

// 1. passing children as a prop
// 2. wrapping with QueryClientProvider
const Providers = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default Providers;
