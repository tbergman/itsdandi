import { createMachine, assign } from "xstate";

export const CarouselItemMachine = createMachine(
  {
    id: "CarouselItem",
    initial: "idle",

    states: {
      idle: {
        on: {
          TOGGLE: {
            target: "active",
            cond: "isActive",
          },
        },
      },
      inactive: {
        on: {
          TOGGLE: {
            target: "active",
            cond: "isActive",
          },
        },
      },
      active: {
        on: {
          TOGGLE: {
            target: "inactive",
            cond: "isNotActive",
          },
        },
      },
    },
  },
  {
    guards: {
      isActive: (_, event) => event.payload.current,
      isNotActive: (_, event) => !event.payload.current,
    },
  }
);
