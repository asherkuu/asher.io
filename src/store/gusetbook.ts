import create from "zustand";

type UseLastIdStoreState = {
  lastId: number | null;
  setLastId: (lastId: number) => void;
};

export const useLastIdStore = create<UseLastIdStoreState>(set => ({
  lastId: null,
  setLastId: lastId => set({lastId}),
}));
