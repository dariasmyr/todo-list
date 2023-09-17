import {create} from "zustand";


type ICountState = {
    count: number;
    setCount: (newCount: number) => void;
}

export const useCountStore = create<ICountState>(
    (set) => ({
        count: 1,
        setCount: (newCount: number) => set({
            count: newCount
        }),
    })
);
