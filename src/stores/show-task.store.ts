import {create} from "zustand";
import {Task} from "../components/task/task.component";

type Store = {
    tasks: Task[];
    addTask: (task: Task) => void;
    removeAllTasks: () => void;
};

export const useStore = create<Store>((set) => ({
    tasks: [],
    addTask: (task: Task) =>
        set((state) => ({ tasks: [...state.tasks, task] })),
    removeAllTasks: () => set({tasks: []}),
}));
