import { create } from "zustand";

interface RegisterDialogState {
  isDialogOpen: boolean;
  openDialog: () => void;
  closeDialog: () => void;
}

export const useRegisterDialogStore = create<RegisterDialogState>((set) => ({
  isDialogOpen: false,
  openDialog: () => set({ isDialogOpen: true }),
  closeDialog: () => set({ isDialogOpen: false }),
}));
