import { createMachine } from "xstate";

export const slideUp__machine = createMachine(
  {
    id: "slideUp",
    context: {},
    initial: "idle",
    states: {
      idle: {
        on: {
          SLIDE_UP: {
            actions: "slideUp",
          },
        },
      },
    },
  },
  {
    actions: {
      slideUp: (c, e) => {
        const { gsap, ref } = e.payload;

        gsap.fromTo(
          ref.current.querySelectorAll(".slideUp"),
          {
            opacity: 0,
            y: 10,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power1.out",
            scrollTrigger: {
              trigger: ref.current,
            },
            stagger: 0.1,
          }
        );
      },
    },
  }
);
