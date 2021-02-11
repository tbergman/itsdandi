/** @jsx jsx */
import { useMachine } from "@xstate/react";
import { jsx, Styled, Input, Select, Button } from "theme-ui";
import { FooterForm__machine } from "../machines/form";
import InputWrapper from './inputwrapper';

const FooterForm = () => {
  const [state,send] = useMachine(FooterForm__machine)

  const  {
    firstName,
    lastName,
    email,
    phone,
    company,
    website,
    employees,
    allValidated
  } = state.context;


  return (
    <div className="Form">
      <InputWrapper scrollTo={true} field={firstName} send={send} sendType={'EDIT_FIRSTNAME'} placeholder="First Name*"  />
      <InputWrapper field={lastName} send={send} sendType={'EDIT_LASTNAME'} placeholder="Last Name*"/>
      <InputWrapper field={email} send={send} sendType={'EDIT_EMAIL'} placeholder="Email"  />
      <InputWrapper field={phone} send={send} sendType={'EDIT_PHONE'} placeholder="Phone" />
      <InputWrapper field={company} send={send} sendType={'EDIT_COMPANY'} placeholder="Company" />
      <InputWrapper field={website} send={send} sendType={'EDIT_WEBSITE'} placeholder="Website" />
    
      <div
         sx={{
          border: employees.error ? '1px solid #FF5C17' : 'none',
        }}
      className="Form__dropdownWrapper">
      <svg 
         className="Form__dropdownWrapper-arrow" 
              width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.49216 9.48828L0.00370867 0.48828L12.9806 0.488281L6.49216 9.48828Z" fill="#C4C4C4"/>
        </svg>

        <select value={employees.value} 
        onChange={e=>send({type:"EDIT_EMPLOYEES",value:e.target.value})}
        className="Form__dropdownWrapper-dropdown"
          sx={{
            color:employees.value !== '' ? 'white !important' : 'rgba(242, 242, 242, 0.24) !important',
         
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
          {employees.error && (
            <div className="Form__dropdownWrapper-error">
              <Styled.p>{employees.error}</Styled.p>
            </div>
          )}
      </div>

      <div className="Form__button">
        <Button
        onClick={()=>send({
          type:'SUBMIT'
        })}
          sx={{
            bg:allValidated ? '#FFD93B !important' : null,
            color:allValidated ? "#1A1A1D !important" : null,
            fontFamily:'medium',
            '&:hover':{
              bg:allValidated ? '#FF9133 !important' : null
            }
          }}
        variant="primary">Send request</Button>
      </div>
    </div>
  );
};

export default FooterForm;
