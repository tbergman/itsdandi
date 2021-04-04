import { createMachine } from "xstate";

export const MainLogo__machine = createMachine(
  {
    id: "MainLogo",
    initial: "hidden",
    context: {},
    states: {
      hidden: {
        on: {
          SET_LARGE: {
            actions: "switchLarge",
            target: "large",
          },
          SET_SMALL: {
            actions: "switch",
            target: "small",
          },
        },
      },
      large: {
        on: {
          SCROLL_TRIGGERED: {
            actions: "animateDown",
            target: "small",
          },

          MAKE_STATIC: {
            actions: "switch",
            target: "small",
          },
        },
      },
      small: {
        type: "final",
      },
    },
  },
  {
    actions: {
      animateDown: (_, e) => {
        const { gsap, ref, scaleTo } = e.payload;
        const letters = ref.current.querySelectorAll(".mainLogo__letter");
        console.log("animate down!");
        // scale down logo
        gsap.to(ref.current, {
          scale: scaleTo,
          ease: "power2.out",
          duration: 0.5,
        });

        // fade out letters
        gsap.to(letters, {
          opacity: 0,
          duration: 0.2,
        });
      },
      switch: (_, e) => {
        const { gsap, ref, scaleTo } = e.payload;
        const letters = ref.current.querySelectorAll(".mainLogo__letter");

        gsap.to(ref.current, {
          scale: scaleTo,
          opacity: 1,
          duration: 0,
        });

        gsap.to(letters, {
          opacity: 0,
          duration: 0,
        });
      },
      switchLarge: (_, e) => {
        const { gsap, ref } = e.payload;

        gsap.to(ref.current, {
          scale: 1,
          opacity: 1,
          duration: 0.1,
        });
      },
    },
  }
);
