import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type {} from "@redux-devtools/extension";

interface BearState {
  projectId: number;
  updateSelectedProject: (projectId: number) => void;
}

const useTodoStore = create<BearState>()(
  devtools(
    persist(
      (set) => ({
        projectId: 52,
        updateSelectedProject: (projectId) => set({ projectId })
      }),
      {
        name: "projectId-storage"
      }
    )
  )
);

export { useTodoStore };
