import { createMachine, assign } from "xstate";
import { pricingCalulation } from "../helpers/utils";

export const infoBoxMachine = createMachine({
  id: "infoBoxMachine",
  initial: "closed",
  states: {
    opened: {
      on: {
        CLOSE: {
          target: "closed",
        },
      },
    },
    closed: {
      on: {
        OPEN: {
          target: "opened",
        },
      },
    },
  },
});

export const Calculator__machine = createMachine(
  {
    id: "Calculator",
    context: {
      employees: 1000,
      price: 10000,
    },
    initial: "idle",
    states: {
      idle: {
        on: {
          UPDATE: "updating",
        },
      },
      updating: {
        entry: "updatePricing",
        always: "idle",
      },
    },
  },
  {
    actions: {
      updatePricing: assign((c, e) => {
        const { event } = e.payload;

        const blueLeft = "rgba(51, 90, 255, 1)";
        const blueRight = "rgba(51, 90, 255, 0.2)";

        const thumbLocation = `${(event.target.valueAsNumber / 10000) * 100}%`;

        // event.target.style.background = gradient;
        event.target.style.background = `linear-gradient(to right, ${blueLeft} 0%, ${blueLeft} ${thumbLocation},${blueRight} ${thumbLocation}, ${blueRight} 100% )`;

        return {
          employees: event.target.valueAsNumber,
          price: pricingCalulation(event.target.valueAsNumber),
        };
      }),
    },
  }
);
