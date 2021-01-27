import { createMachine, assign } from "xstate";
import {pricingCalulation} from '../helpers/utils';

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

export const Calculator__machine = createMachine({
  id:'Calculator',
  context:{
    employees:1000,
    price:10000
  },
  initial:'idle',
  states:{
    idle:{
      on:{
        UPDATE:'updating'
      }
    },
    updating:{
      entry:'updatePricing',
      always:'idle',
    },
  }
},{
  actions:{
    updatePricing: assign({
      employees: (c,e) => e.payload.event.target.valueAsNumber,
      price: (_,e) => pricingCalulation(e.payload.event.target.valueAsNumber)
    })
  }
})


