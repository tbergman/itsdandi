import { createMachine, assign } from "xstate";

export const SubMenuDesktopMachine = createMachine({
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

export const SubMenuMobile__Machine = createMachine(
  {
    id: "SubMenuMobile",
    initial: "idle",
    context: {
      showNext: true,
      showPrev: false,
      currentOffset: 0,
      snapGrid: null,
      enabled: true,
    },
    states: {
      idle: {
        on: {
          UPDATENAV: {
            actions: "updateNav",
          },
          DISABLE: {
            actions: "disable",
            target: "disabled",
          },
        },
      },
      disabled: {
        type: "final",
      },
    },
  },
  {
    actions: {
      updateNav: assign((c, e) => {
        const { snapTo, snapGrid } = e.payload;

        return {
          showNext: snapTo > snapGrid[snapGrid.length - 1],
          showPrev: snapTo < 0,
          currentOffset: e.payload.snapTo,
          snapGrid: e.payload.snapGrid,
        };
      }),
      disable: assign((c, e) => {
        return {
          showPrev: false,
          showNext: false,
        };
      }),
    },
  }
);
