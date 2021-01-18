import { createMachine } from "xstate";

export const infoBoxMachine = createMachine({
  id: "infoBoxMachine",
  initial: "closed",
  states: {
    opened: {
      on: {
        CLOSE: {
          target: "closed",
        },
      },
    },
    closed: {
      on: {
        OPEN: {
          target: "opened",
        },
      },
    },
  },
});
