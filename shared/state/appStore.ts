import { create } from "zustand";

export type AppType =
  | "about"
  | "skills"
  | "projects"
  | "experience"
  | "contact";

type Position = {
  x: number;
  y: number;
};

type Size = {
  width: number;
  height: number;
};

type AppInstance = {
  id: string;
  type: AppType;

  position: Position;
  size: Size;

  restorePosition?: Position;
  restoreSize?: Size;

  isOpened: boolean;
  isActive: boolean;
  isMaximized: boolean;
  isMinimized: boolean;

  zIndex: number;
};

type AppStore = {
  apps: AppInstance[];

  openApp: (type: AppType) => void;
  closeApp: (id: string) => void;

  setActive: (id: string) => void;
  deactivateAll: () => void;

  setPosition: (id: string, position: Position) => void;
  setSize: (id: string, size: Size) => void;

  toggleMaximize: (id: string) => void;

  minimizeApp: (id: string) => void;
  restoreApp: (id: string) => void;
};

export const useAppStore = create<AppStore>((set) => ({
  apps: [],

  /* ===================== OPEN ===================== */
  openApp: (type) =>
    set((state) => {
      const maxZ = Math.max(0, ...state.apps.map(a => a.zIndex));

      return {
        apps: [
          ...state.apps.map(a => ({ ...a, isActive: false })),
          {
            id: crypto.randomUUID(),
            type,
            position: { x: 0, y: 0 },
            size: {
              width: window.innerWidth,
              height: window.innerHeight,
            },
            isOpened: true,
            isActive: true,
            isMaximized: false,
            isMinimized: false,
            zIndex: maxZ + 1,
          },
        ],
      };
    }),

  /* ===================== CLOSE ===================== */
  closeApp: (id) =>
    set((state) => ({
      apps: state.apps.map(a =>
        a.id === id
          ? {
              ...a,
              isOpened: false,
              isActive: false,
              isMinimized: false,
              isMaximized: false,
            }
          : a
      ),
    })),

  /* ===================== FOCUS ===================== */
  setActive: (id) =>
    set((state) => {
      const maxZ = Math.max(0, ...state.apps.map(a => a.zIndex));

      return {
        apps: state.apps.map(a =>
          a.id === id && a.isOpened && !a.isMinimized
            ? { ...a, isActive: true, zIndex: maxZ + 1 }
            : { ...a, isActive: false }
        ),
      };
    }),

  deactivateAll: () =>
    set((state) => ({
      apps: state.apps.map(a => ({ ...a, isActive: false })),
    })),

  /* ===================== MOVE / RESIZE ===================== */
  setPosition: (id, position) =>
    set((state) => ({
      apps: state.apps.map(a =>
        a.id === id && !a.isMaximized
          ? { ...a, position }
          : a
      ),
    })),

  setSize: (id, size) =>
    set((state) => ({
      apps: state.apps.map(a =>
        a.id === id && !a.isMaximized
          ? { ...a, size }
          : a
      ),
    })),

  /* ===================== MAXIMIZE ===================== */
  toggleMaximize: (id) =>
    set((state) => ({
      apps: state.apps.map(a => {
        if (a.id !== id) return a;

        if (!a.isMaximized) {
          return {
            ...a,
            restorePosition: a.position,
            restoreSize: a.size,
            position: { x: 0, y: 0 },
            size: {
              width: window.innerWidth,
              height: window.innerHeight,
            },
            isMaximized: true,
            isMinimized: false,
          };
        }

        return {
          ...a,
          position: a.restorePosition ?? a.position,
          size: a.restoreSize ?? a.size,
          isMaximized: false,
        };
      }),
    })),

  /* ===================== MINIMIZE ===================== */
  minimizeApp: (id) =>
    set((state) => ({
      apps: state.apps.map(a =>
        a.id === id
          ? { ...a, isMinimized: true, isActive: false }
          : a
      ),
    })),

  restoreApp: (id) =>
    set((state) => {
      const maxZ = Math.max(0, ...state.apps.map(a => a.zIndex));

      return {
        apps: state.apps.map(a =>
          a.id === id
            ? {
                ...a,
                isMinimized: false,
                isOpened: true,
                isActive: true,
                zIndex: maxZ + 1,
              }
            : { ...a, isActive: false }
        ),
      };
    }),
}));
