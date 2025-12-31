import { create } from "zustand";

export type WindowType =
  | "about"
  | "skills"
  | "projects"
  | "experience"
  | "contact"
  | "start";

type Position = { x: number; y: number };
type Size = { width: number; height: number };

type WindowInstance = {
  id: string;
  type: WindowType;

  position: Position;
  size: Size;

  restorePosition?: Position;
  restoreSize?: Size;

  isOpened: boolean;     // exists in system (dock)
  isActive: boolean;     // focused window
  isMinimized: boolean;  // not visible
  isMaximized: boolean;

  zIndex: number;
};

type WindowStore = {
  windows: WindowInstance[];

  openWindow: (type: WindowType) => void;
  closeWindow: (id: string) => void;

  setActive: (id: string) => void;
  deactivateAll: () => void;

  setPosition: (id: string, position: Position) => void;
  setSize: (id: string, size: Size) => void;

  toggleMaximize: (id: string) => void;
  minimizeWindow: (id: string) => void;
  restoreWindow: (id: string) => void;
};

export const useWindowStore = create<WindowStore>((set) => ({
  windows: [],

  /* ===================== OPEN / RESTORE ===================== */
  openWindow: (type) =>
    set((state) => {
      const maxZ = Math.max(0, ...state.windows.map(w => w.zIndex));

      const existing = state.windows.find(w => w.type === type);

      // 🔁 Restore or activate existing window
      if (existing) {
        return {
          windows: state.windows.map(w =>
            w.id === existing.id
              ? {
                  ...w,
                  isOpened: true,
                  isMinimized: false,
                  isActive: true,
                  zIndex: maxZ + 1,
                }
              : { ...w, isActive: false }
          ),
        };
      }

      // ➕ Create new window
      const newWindow: WindowInstance = {
        id: crypto.randomUUID(),
        type,
        position: { x: 120, y: 80 },
        size: { width: 520, height: 420 },
        isOpened: true,
        isActive: true,
        isMinimized: false,
        isMaximized: false,
        zIndex: maxZ + 1,
      };

      return {
        windows: [
          ...state.windows.map(w => ({ ...w, isActive: false })),
          newWindow,
        ],
      };
    }),

  /* ===================== CLOSE ===================== */
  closeWindow: (id) =>
    set((state) => ({
      windows: state.windows.filter(w => w.id !== id),
    })),

  /* ===================== FOCUS ===================== */
  setActive: (id) =>
    set((state) => {
      const maxZ = Math.max(0, ...state.windows.map(w => w.zIndex));

      return {
        windows: state.windows.map(w =>
          w.id === id && w.isOpened && !w.isMinimized
            ? { ...w, isActive: true, zIndex: maxZ + 1 }
            : { ...w, isActive: false }
        ),
      };
    }),

  deactivateAll: () =>
    set((state) => ({
      windows: state.windows.map(w => ({ ...w, isActive: false })),
    })),

  /* ===================== MOVE ===================== */
  setPosition: (id, position) =>
    set((state) => ({
      windows: state.windows.map(w =>
        w.id === id && !w.isMaximized ? { ...w, position } : w
      ),
    })),

  /* ===================== RESIZE ===================== */
  setSize: (id, size) =>
    set((state) => ({
      windows: state.windows.map(w =>
        w.id === id && !w.isMaximized ? { ...w, size } : w
      ),
    })),

  /* ===================== MAXIMIZE ===================== */
  toggleMaximize: (id) =>
    set((state) => {
      const screenWidth =
        typeof window !== "undefined" ? window.innerWidth : 1200;
      const screenHeight =
        typeof window !== "undefined" ? window.innerHeight - 72 : 800;

      return {
        windows: state.windows.map(w => {
          if (w.id !== id) return w;

          if (!w.isMaximized) {
            return {
              ...w,
              restorePosition: w.position,
              restoreSize: w.size,
              position: { x: 0, y: 0 },
              size: { width: screenWidth, height: screenHeight },
              isMaximized: true,
            };
          }

          return {
            ...w,
            position: w.restorePosition ?? w.position,
            size: w.restoreSize ?? w.size,
            isMaximized: false,
          };
        }),
      };
    }),

  /* ===================== MINIMIZE ===================== */
  minimizeWindow: (id) =>
    set((state) => ({
      windows: state.windows.map(w =>
        w.id === id
          ? { ...w, isMinimized: true, isActive: false }
          : w
      ),
    })),

  /* ===================== RESTORE ===================== */
  restoreWindow: (id) =>
    set((state) => {
      const maxZ = Math.max(0, ...state.windows.map(w => w.zIndex));

      return {
        windows: state.windows.map(w =>
          w.id === id
            ? {
                ...w,
                isMinimized: false,
                isOpened: true,
                isActive: true,
                zIndex: maxZ + 1,
              }
            : { ...w, isActive: false }
        ),
      };
    }),
}));
