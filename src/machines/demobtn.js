import { createMachine } from "xstate";

export const DemoBtn__machine = createMachine(
  {
    id: "DemoBtn",
    context: {},
    initial: "visible",
    states: {
      visible: {
        on: {
          HIDE: {
            actions: "hide",
            target: "hidden",
          },
        },
      },
      hidden: {
        on: {
          SHOW: {
            actions: "show",
            target: "visible",
          },
        },
      },
    },
  },
  {
    actions: {
      hide: (_, e) => {
        const { ref, gsap } = e.payload;

        gsap.to(ref.current, {
          autoAlpha: 0,
          duration: 0.5,
        });
      },
      show: (_, e) => {
        const { ref, gsap } = e.payload;

        gsap.to(ref.current, {
          autoAlpha: 1,
          duration: 0.5,
        });
      },
    },
  }
);
