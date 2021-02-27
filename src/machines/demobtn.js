import { createMachine } from "xstate";
import { scrollToBottom } from "../helpers/utils";

export const MobileDemoBtn__machine = createMachine(
  {
    id: "MobileDemoBtn",
    context: {},
    initial: "idle",
    states: {
      idle: {
        on: {
          HIDE: {
            actions: "hide",
            target: "hidden",
          },
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
          duration: 0.1,
        });
      },
      show: (_, e) => {
        const { ref, gsap } = e.payload;

        gsap.to(ref.current, {
          autoAlpha: 1,
          duration: 0.25,
        });
      },
    },
  }
);
