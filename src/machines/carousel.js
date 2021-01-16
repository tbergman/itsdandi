import { createMachine, assign } from "xstate";

export const CarouselItemMachine = createMachine(
  {
    id: "carousel",
    initial: "inactive",
    context: {
      timer: 1,
    },
    states: {
      inactive: {
        on: {
          ACTIVATE: {
            target: "active",
            actions: "open",
          },
        },
      },
      active: {
        on: {
          DISABLE: {
            target: "inactive",
            actions: "close",
          },
          PAUSE: "paused",
        },
      },
      paused: {
        on: {
          ACTIVATE: "active",
        },
      },
    },
  },
  {
    actions: {
      open: (ctx, event) => {
        const { animationControls } = event.payload;

        // run open animation
        animationControls.start({
          opacity: [0, 0, 1],
          maxHeight: [0, 1000, 1000],
          transition: {
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.25, 1],
            delay: 0.8,
          },
        });
      },
      close: (ctx, event) => {
        const { animationControls } = event.payload;

        // run close animation
        animationControls.start({
          opacity: [1, 0, 0],
          maxHeight: [1000, 1000, 0],
          transition: {
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5],
          },
        });
      },
    },
  }
);
