import { create } from "zustand";

export type WindowType =
  | "about"
  | "skills"
  | "projects"
  | "experience"
  | "contact";

type WindowInstance = {
  id: string;
  type: WindowType;
};

type WindowStore = {
  windows: WindowInstance[];
  openWindow: (type: WindowType) => void;
  closeWindow: (id: string) => void;
};

export const useWindowStore = create<WindowStore>((set) => ({
  windows: [],
  openWindow: (type) =>
    set((state) => ({
      windows: [
        ...state.windows,
        { id: crypto.randomUUID(), type },
      ],
    })),
  closeWindow: (id) =>
    set((state) => ({
      windows: state.windows.filter((w) => w.id !== id),
    })),
}));
