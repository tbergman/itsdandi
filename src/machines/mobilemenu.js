import { createMachine, assign } from "xstate";

export const MobileMenu__machine = createMachine(
  {
    id: "MobileMenu",
    initial: "idle",
    context: {
      values: {
        open: false,
      },
      product: {
        open: false,
      },
      community: {
        open: false,
      },
    },
    states: {
      idle: {
        on: {
          TOGGLE: {
            actions: "toggle",
          },
        },
      },
    },
  },
  {
    actions: {
      toggle: assign((c, e) => {
        return {
          [`${e.payload.target}`]: {
            open: !c[e.payload.target].open,
          },
        };
      }),
    },
  }
);

export const MenuState__machine = createMachine(
  {
    id: "MenuState",
    context: {},
    initial: "closed",
    states: {
      closed: {
        on: {
          CLOSE: {
            target: "closed",
          },
        },
      },
      opened: {
        on: {
          OPEN: {
            target: "opened",
          },
        },
      },
    },
  },
  {
    actions: {
      open: {},
      close: {},
    },
  }
);
