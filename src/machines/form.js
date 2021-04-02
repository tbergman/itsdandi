import { createMachine, assign } from "xstate";
import * as EmailValidator from "email-validator";

const errorMessages = {
  isEmpty: "Please complete this required field",
  isNotEmail: "Email must be formatted correctly",
};

const checkValidation = ({ context, current }) => {
  const toArray = Object.keys(context);

  const validations = toArray.slice(1, toArray.length).map((key) => {
    if (key === current.key) {
      return current.error;
    }
    return context[key].error;
  });

  return validations.every((value) => value === false);
};

export const FooterForm__machine = createMachine(
  {
    id: "footerForm",
    context: {
      allValidated: false,
      firstName: {
        value: "",
        error: null,
      },
      lastName: {
        value: "",
        error: null,
      },
      email: {
        value: "",
        error: null,
      },
      phone: {
        value: "",
        error: null,
      },
      company: {
        value: "",
        error: null,
      },
      website: {
        value: "",
        error: null,
      },
      employees: {
        value: "",
        error: null,
      },
    },
    initial: "editing",
    states: {
      editing: {
        on: {
          EDIT_FIRSTNAME: {
            actions: "editFirstName",
          },
          EDIT_LASTNAME: {
            actions: "editLastName",
          },
          EDIT_EMAIL: {
            actions: "editEmail",
          },
          EDIT_PHONE: {
            actions: "editPhone",
          },
          EDIT_COMPANY: {
            actions: "editCompany",
          },
          EDIT_WEBSITE: {
            actions: "editWebsite",
          },
          EDIT_EMPLOYEES: {
            actions: "editEmployees",
          },
          SUBMIT: { target: "submitting", cond: (c, e) => c.allValidated },
        },
      },
      submitting: {
        invoke: {
          id: "submitForm",
          src: (c, e) => {
            const init = {
              method: "POST",
              body: JSON.stringify({
                firstName: c.firstName.value,
                lastName: c.lastName.value,
              }),
            };
            return fetch(
              "https://us-central1-dandi-dev.cloudfunctions.net/contactPOST",
              init
            )
              .then((response) => response.json())
              .then((data) => console.log(data))
              .catch((err) => console.log(err));
          },
          onDone: {
            target: "success",
          },
          onError: {
            target: "failure",
          },
        },
      },
      success: {
        type: "final",
      },
      failure: {},
    },
  },
  {
    actions: {
      editFirstName: assign((c, e) => {
        const current = {
          key: "firstName",
          error: e.value === "" ? errorMessages.isEmpty : false,
        };

        return {
          firstName: {
            value: e.value,
            error: current.error,
          },
          allValidated: checkValidation({ context: c, current }),
        };
      }),
      editLastName: assign((c, e) => {
        const current = {
          key: "lastName",
          error: e.value === "" ? errorMessages.isEmpty : false,
        };

        return {
          lastName: {
            value: e.value,
            error: current.error,
          },
          allValidated: checkValidation({ context: c, current }),
        };
      }),

      editEmail: assign((c, e) => {
        const current = {
          key: "email",
          error: !EmailValidator.validate(e.value)
            ? errorMessages.isNotEmail
            : false,
        };

        return {
          email: {
            value: e.value,
            error: current.error,
          },
          allValidated: checkValidation({ context: c, current }),
        };
      }),

      editPhone: assign((c, e) => {
        const current = {
          key: "phone",
          error: e.value === "" ? errorMessages.isEmpty : false,
        };

        return {
          phone: {
            value: e.value,
            error: current.error,
          },
          allValidated: checkValidation({ context: c, current }),
        };
      }),

      editCompany: assign((c, e) => {
        const current = {
          key: "company",
          error: e.value === "" ? errorMessages.isEmpty : false,
        };

        return {
          company: {
            value: e.value,
            error: current.error,
          },
          allValidated: checkValidation({ context: c, current }),
        };
      }),
      editWebsite: assign((c, e) => {
        const current = {
          key: "website",
          error: e.value === "" ? errorMessages.isEmpty : false,
        };

        return {
          website: {
            value: e.value,
            error: current.error,
          },
          allValidated: checkValidation({ context: c, current }),
        };
      }),

      editEmployees: assign((c, e) => {
        const current = {
          key: "employees",
          error: e.value === "" ? errorMessages.isEmpty : false,
        };

        return {
          employees: {
            value: e.value,
            error: current.error,
          },
          allValidated: checkValidation({ context: c, current }),
        };
      }),
    },
  }
);
