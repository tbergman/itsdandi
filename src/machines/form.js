import { createMachine,assign } from "xstate";

export const FooterForm__machine = createMachine({
    id:"footerForm",
    context:{
        firstName:{
            value:'',
            error:null
        },
        lastName:{
            value:'',
            error:null
        },
        email:{
            value:'',
            error:null
        },
        phone:{
            value:'',
            error:null
        },
        company:{
            value:'',
            error:null
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
        editFirstName:assign({
            firstName:(c,e)=>({
                ...c.firstName,
                value:e.value
            })
        }),
        editLastName:assign({
            lastName:(c,e)=>({
                ...c.lastName,
                value:e.value
            })
        }),
        editEmail:assign({
            email:(c,e)=>({
                ...c.email,
                value:e.value
            })
        }),
        editPhone:assign({
            phone:(c,e)=>({
                ...c.phone,
                value:e.value
            })
        }),
        editCompany:assign({
            company:(c,e)=>({
                ...c.company,
                value:e.value
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
                ...c.employees,
                value:e.value
            })
        })
    }
})