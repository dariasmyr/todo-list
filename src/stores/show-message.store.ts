import create from 'zustand';


interface State {
    showMessage: boolean;
    toggleMessage: () => void;
}

export const useStore = create<State>(set => ({
    showMessage: false,

    toggleMessage: () => set(state => ({ showMessage: !state.showMessage })),
}));
