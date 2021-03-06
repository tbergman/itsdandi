import { createMachine, assign } from "xstate";

export const Partners__machine = createMachine(
  {
    id: "Partners",
    context: {
      elements: [],
      duration: 45,
    },
    initial: "idle",
    states: {
      idle: {
        on: {
          ADD_ELEMENT: {
            actions: "addElement",
          },
          SET_POSITIONS: {
            target: "positioning",
          },
          ANIMATE: {
            target: "animating",
          },
        },
      },
      positioning: {
        entry: ["setPositions", "setDuration"],
        always: "animating",
      },
      animating: {
        entry: "animateCarousel",
      },
    },
  },
  {
    actions: {
      addElement: assign((c, e) => {
        const { width, idx } = e.payload;
        let elements_ = [...c.elements];
        const padding = 16 * 2;
        elements_[idx] = width + padding;
        return {
          elements: elements_,
        };
      }),
      setPositions: (c, e) => {
        const { ref, gsap, targetClass } = e.payload;
        const { elements } = c;

        const elementsReversed = [...elements].reverse();
        const row = gsap.utils.toArray(ref.querySelectorAll(targetClass));

        let totalWidth = 0;

        row.reverse().map((val, key, arr) => {
          if (key === 0) {
            totalWidth = -(elementsReversed[key] + elements[0]);
          } else {
            totalWidth = totalWidth - elementsReversed[key];
          }
          gsap.set(val, {
            x: totalWidth,
          });
        });
      },
      setDuration: assign((_, e) => {
        return {
          duration: e.payload.duration,
        };
      }),
      animateCarousel: (c, e) => {
        const { ref, gsap, targetClass } = e.payload;
        const { elements, duration } = c;

        // const animateWidth = -elements.reduce((acc, a) => {
        //   return acc + a;
        // }, elements[elements.length - 1]);
        const animateWidth = ref.clientWidth;

        const targetElements = ref.querySelectorAll(targetClass);

        targetElements.forEach((e, i) => {
          const xPos = e.getBoundingClientRect().x;
          gsap.set(e, {
            x: xPos,
          });
        });

        targetElements.forEach((e, i) => {
          e.style.position = "absolute";
          e.style.left = 0;
        });

        ref.style.width = `${animateWidth}px`;

        gsap.to(targetElements, {
          duration: 15,
          ease: "none",
          x: `+= ${animateWidth}`,
          modifiers: {
            x: gsap.utils.unitize((x) => parseFloat(x) % animateWidth),
          },
          repeat: -1,
        });
      },
    },
  }
);

export const Partners__machine2 = createMachine(
  {
    id: "Partners",
    context: {
      elements: [],
      duration: 45,
    },
    initial: "idle",
    states: {
      idle: {
        on: {
          ADD_ELEMENT: {
            actions: "addElement",
          },
          SET_POSITIONS: {
            target: "positioning",
          },
        },
      },
      positioning: {
        entry: ["setPositions", "setDuration"],
        always: "animating",
      },
      animating: {
        entry: "animateCarousel",
      },
    },
  },
  {
    actions: {
      addElement: assign((c, e) => {
        const { width, idx } = e.payload;
        let elements_ = c.elements;
        const padding = 16 * 2;
        elements_[idx] = width + padding;
        return {
          elements: elements_,
        };
      }),
      setPositions: (c, e) => {
        const { ref, gsap, targetClass } = e.payload;
        const { elements } = c;

        const elementsReversed = [...elements].reverse();
        const row = gsap.utils.toArray(ref.querySelectorAll(targetClass));

        let totalWidth = 0;

        row.reverse().map((val, key, arr) => {
          if (key === 0) {
            totalWidth = -(elementsReversed[key] + elements[0]);
          } else {
            totalWidth = totalWidth - elementsReversed[key];
          }
          gsap.set(val, {
            x: totalWidth,
          });
        });
      },
      setDuration: assign((_, e) => {
        return {
          duration: e.payload.duration,
        };
      }),
      animateCarousel: (c, e) => {
        const { ref, gsap, targetClass } = e.payload;
        const { elements, duration } = c;
        const animateWidth = -elements.reduce((acc, a) => {
          return acc + a;
        }, 0);

        const targetElements = ref.querySelectorAll(targetClass);

        gsap.to(targetElements, {
          duration: duration,
          ease: "none",
          x: `+=${animateWidth}`,
          modifiers: {
            x: gsap.utils.unitize((x) => parseFloat(x) % animateWidth),
          },
          repeat: -1,
        });
      },
    },
  }
);
