import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { Projects } from "./projects";
import { useGetProjects } from "../api";

const Sidebar = async () => {
  const QueryClient = await useGetProjects();

  return (
    <aside className="overflow-auto w-2/12 bg-secondary text-secondary-foreground h-screen flex flex-col items-center p-6 fixed top-0 left-0 gap-2">
      <h1 className="text-2xl font-medium">Projet(s) 🧑‍💻</h1>
      <HydrationBoundary state={dehydrate(QueryClient)}>
        <Projects />
      </HydrationBoundary>
    </aside>
  );
};

export { Sidebar };
