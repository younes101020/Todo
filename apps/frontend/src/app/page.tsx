import { Todos } from "@/features/todos/components";
import { Sidebar } from "@/features/projects/components";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { useGetTodos } from "@/features/todos/api";

export default async function Home() {
  const QueryClient = await useGetTodos();

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <HydrationBoundary state={dehydrate(QueryClient)}>
        <Sidebar />
        <Todos />
      </HydrationBoundary>
    </div>
  );
}
