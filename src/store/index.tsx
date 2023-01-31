import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { create } from "zustand";

type toDoItem = { id: string; item: string };
interface AppState {
  inputText: string;
  inputTextChange: (newText: string) => void;
  toDoList: toDoItem[] | [];
  addItem: (input: string) => void;
  remoeItem: (input: string) => void;
}

const useAppState = create<AppState>((set) => {
  return {
    inputText: "",
    inputTextChange: (newText) => set({ inputText: newText }),
    toDoList: [],
    addItem: (input) => {
      if (!input) return;

      set((state) => ({
        toDoList: [...state.toDoList, { id: uuidv4(), item: input }],
        inputText: "",
      }));
    },

    remoeItem: (input) =>
      set((state) => ({
        toDoList: state.toDoList.filter((item) => item.id != input),
      })),
  };
});

export default useAppState;
