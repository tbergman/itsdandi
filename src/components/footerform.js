/** @jsx jsx */
import { useMachine } from "@xstate/react";
import { jsx, Styled, Input, Select, Button } from "theme-ui";
import { FooterForm__machine } from "../machines/form";

const FooterForm = () => {
  const [state,send] = useMachine(FooterForm__machine)

  const  {
    firstName,
    lastName,
    email,
    phone,
    company,
    website,
    employees
  } = state.context;

  console.log(employees.value)


  return (
    <div className="Form">
      <Input id="namefield" placeholder="First Name *" value={firstName.value} onChange={(e)=>send({type:'EDIT_FIRSTNAME',value:e.target.value})} />
      <Input placeholder="Last Name *" value={lastName.value}
      onChange={(e)=>send({type:"EDIT_LASTNAME",value:e.target.value})}
      />
      <Input placeholder="Email *" value={email.value}
        onChange={(e)=>send({type:"EDIT_EMAIL",value:e.target.value})}
      />
      <Input placeholder="Phone Number" value={phone.value}
        onChange={(e)=>send({type:'EDIT_PHONE',value:e.target.value})}
      />
      <Input placeholder="Company Name" value={company.value}
        onChange={e=>send({type:"EDIT_COMPANY",value:e.target.value})}
      />
      <Input placeholder="Website URL" value={website.value}
        onChange={e=>send({type:'EDIT_WEBSITE',value:e.target.value})}
      />
      <div className="Form__dropdownWrapper">
      <svg 
         className="Form__dropdownWrapper-arrow" 
              width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.49216 9.48828L0.00370867 0.48828L12.9806 0.488281L6.49216 9.48828Z" fill="#C4C4C4"/>
        </svg>

        <select value={employees.value} 
        onChange={e=>send({type:"EDIT_EMPLOYEES",value:e.target.value})}
        className="Form__dropdownWrapper-dropdown"
          sx={{

            color:employees.value !== '' ? 'white !important' : 'rgba(242, 242, 242, 0.24) !important'
          }}
        >





        <option value="">How many employees work there?</option>
            <option value="0-249">0 to 249 people</option>
            <option value="250-499">250 to 499 people</option>
            <option value="500-999">500 to 999 people</option>
            <option value="1000-2499">1,000 to 2,499 people</option>
            <option value="2500-4999">2,500 to 4,999 people</option>
            <option value="5000-9999">5,000 to 9,999 people</option>
            <option value="10000-24999"
              >10,000 to 24,999 people</option
            >
            <option value="25000-49999"
              >25,000 to 49,999 people</option
            >
            <option value="50000+">50,000+ people</option>
          

        </select>
      </div>

      <div className="Form__button">
        <Button variant="primary">Send request</Button>
      </div>
    </div>
  );
};

export default FooterForm;
