import { createMachine,assign } from "xstate";
import * as EmailValidator from 'email-validator';

const errorMessages = {
    isEmpty:'Please complete this required field',
    isNotEmail:'Email must be formatted correctly'
}

const checkValidation = (context) => {
    const _ = Object.keys(c).map(key=>{
        if (key!=='allValidated') {
            return context[key].error
        }
    })

    return _
}

export const FooterForm__machine = createMachine({
    id:"footerForm",
    context:{
        allValidated:false,
        firstName:{
            value:'',
            error:null,
            
        },
        lastName:{
            value:'',
            error:null,
           
        },
        email:{
            value:'',
            error:null,
       
        },
        phone:{
            value:'',
            error:null,
         
        },
        company:{
            value:'',
            error:null,
   
        },
        website:{
            value:'',
            error:null
        },
        employees:{
            value:'',
            error:null
        }
    },
    initial:'editing',
    states:{
        editing:{
            on:{
                EDIT_FIRSTNAME:{
                    actions:'editFirstName',
                },
                EDIT_LASTNAME:{
                    actions:'editLastName',
                },
                EDIT_EMAIL:{
                    actions:'editEmail'
                },
                EDIT_PHONE:{
                    actions:'editPhone'
                },
                EDIT_COMPANY:{
                    actions:'editCompany'
                },
                EDIT_WEBSITE:{
                    actions:'editWebsite'
                },
                EDIT_EMPLOYEES:{
                    actions:'editEmployees'
                },
                SUBMIT:'submitting'
            }
        },
        submitting:{},
        success:{
            type:'final'
        },
        failure:{}
    }
},{
    actions:{
        editFirstName: assign((c,e)=>{


            return {
                firstName:{
                    value:e.value,
                    error:e.value==='' ? errorMessages.isEmpty : false
                },
            }

        }),
        editLastName:assign({
            lastName:(c,e)=>({
                
                value:e.value,
                error:e.value==='' ? errorMessages.isEmpty : false
            })
        }),
        editEmail:assign({
            email:(c,e)=>({
       
                value:e.value,
                error:!EmailValidator.validate(e.value) ? errorMessages.isNotEmail : false
            })
        }),
        editPhone:assign({
            phone:(c,e)=>({
                value:e.value,
                error:e.value === '' ? errorMessages.isEmpty : false
            })
        }),
        editCompany:assign({
            company:(c,e)=>({
                value:e.value,
                error:e.value === '' ? errorMessages.isEmpty : false
            })
        }),
        editWebsite:assign({
            website:(c,e)=>({
                ...c.website,
                value:e.value
            })
        }),
        editEmployees:assign({
            employees:(c,e)=>({
                value:e.value,
                error:e.value==='' ? errorMessages.isEmpty : false
            })
        })
    }
})