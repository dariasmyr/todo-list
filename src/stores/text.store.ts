import {create} from 'zustand';

type IStoreState = {
    text: string;
    setText: (newText: string) => void;
};

export const useTextStore = create<IStoreState>(
    (set) => ({
        text: 'Your name',
        setText: (newText: string) => set({
            text: newText
        }),
    })
);
