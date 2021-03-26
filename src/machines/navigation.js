import { createMachine } from "xstate";

export const NavItem__machine = createMachine(
  {
    id: "navItem",
    initial: "hidden",
    states: {
      hidden: {
        on: {
          SHOW: {
            actions: "show",
            target: "visible",
          },
        },
      },
      visible: {
        on: {
          HIDE: {
            actions: "hide",
            target: "hidden",
          },
        },
      },
    },
  },
  {
    actions: {
      show: (_, e) => {
        const { gsap, ref } = e.payload;

        gsap.to(ref.current, {
          autoAlpha: 1,
          duration: 0.25,
        });
      },
      hide: (_, e) => {
        const { gsap, ref } = e.payload;

        gsap.to(ref.current, {
          autoAlpha: 0,
          duration: 0.25,
        });
      },
    },
  }
);

export const NavigationStyle__machine = createMachine({
  id: "NavigationStyle__machine",
  context: {},
  initial: "idle",
  states: {
    idle: {},
    default: {},
    violet: {},
    gray: {},
  },
});
