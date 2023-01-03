import create from "zustand";
import {Project} from "#/src/types";

type UseExperienceStoreState = {
  experienceList: Project[] | undefined;
  selectedId: string | undefined;
  setExperienceList: (data: Project[]) => void;
};

export const useExperienceStore = create<UseExperienceStoreState>(set => ({
  experienceList: undefined,
  selectedId: undefined,
  setExperienceList: data => set({experienceList: data}),
}));
