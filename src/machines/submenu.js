import { Machine } from "xstate";

export const SubMenuDesktopMachine = Machine({
  id: "SubMenuDesktopMachine",
  initial: "opened",
  states: {
    opened: {
      on: {
        CLOSE: "closed",
        MOUSE_LEAVE: "closed",
      },
    },
    closed: {
      on: {
        OPEN: "opened",
        MOUSE_ENTER: "opened",
      },
    },
  },
});
