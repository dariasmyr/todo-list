import {create} from "zustand";

type State = {
    isClicked: boolean;
    toggle: () => void;
};

export const useStore = create<State>((set) => ({
    isClicked: false,
    toggle: () => set((state) => ({ isClicked: !state.isClicked })),
}));
