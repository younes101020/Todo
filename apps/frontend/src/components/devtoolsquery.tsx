"use client";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const DevToolsQuery = () => {
  return <ReactQueryDevtools initialIsOpen={true} />;
};

export { DevToolsQuery };
