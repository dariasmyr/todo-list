import {create} from "zustand";
import {Task} from "../components/task/task.component.tsx";

type Store = {
    tasks: Task[];
    addTask: (task: Task) => void;
};

export const useStore = create<Store>((set) => ({
    tasks: [],
    addTask: (task: Task) =>
        set((state) => ({ tasks: [...state.tasks, task] })),
}));
