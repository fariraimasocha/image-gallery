import { create } from "zustand";
import { persist } from "zustand/middleware";

export const dummyStore = create(
  persist(
    (set, get) => ({
      dummyName: "",

      setummyName: (name) => {
        console.log("Setting URL in store:", name);
        set({ dummyName: url });
      },

      clearDummyName: () => {
        set({ dummyName: "" });
      },

      getpaymentLinkUrl: () => {
        const state = get();
        console.log("Getting dummyName from store:", state.dummyName);
        return state.dummyName;
      },
    }),
    {
      name: "dummy-store",
    }
  )
);
