import { Formik, yupToFormErrors } from "formik";
import React from "react";
import Input from "../../components/input/Input";
import JobSkill from "../../components/jobskill/JobSkill"
import {useFormik} from 'formik'
import * as yup from "yup";

const ContactDetails=()=>{
   
    const formik=useFormik({
        initialValues:{
            jobTitle:"",
            jobDesc:"",
        },
        validationSchema:yup.object().shape({
            jobTitle:yup
            .string()
            .required("job title are empty"),
            

            jobDesc:yup
            .string()
            .required("job description are empty")
        }),
        onSubmit:(values)=>{
            console.log(values)
        }
    })
   const onBlur=(name)=>{
          formik.setFieldTouched(name,true);
   }
   const onChangeHandler=(name,value)=>{
       formik.setFieldValue(name,value);
   }
    return(
        <div>
            <div className="header">
              <p>INPUT DESCRIPTION OF <span>CURRENT ROLE</span></p>
            </div>
            <div className="container">
                <div className="left-container">
                    <div className="left-up-container">
                        <Input  
                           name="jobTitle"
                           value={formik.values.name}
                           onChange={(event)=>onChangeHandler(event.target.name,event.target.value)}
                           onBlur={(event)=>onBlur(event.target.name)}
                           label="Job Title"
                           placeholder="enter your job title" 
                           errors={formik.errors.jobTitle}
                           
                           classes={{
                            inputComponentClass: "jobtitle-input",
                            labelClassName:"job-label",
                            inputIconContainer:"input-container",
                            inputClassName:"job-input",
                            inputerror:"input-errors",

                         }}
                          />

                        <Input  
                           name="jobDesc"
                           value={formik.values.name}
                           onChange={(event)=>onChangeHandler(event.target.name,event.target.value)}
                           onBlur={(event)=>onBlur(event.target.name)}
                           errors={formik.errors.jobDesc}
                           label="Job Description"
                           placeholder="enter about job description" 
                           
                           classes={{
                            inputComponentClass: "jobtitle-input",
                            labelClassName:"job-label",
                            inputIconContainer:"input-container",
                            inputClassName:"job-input"

                         }}
                          />

                    </div>
                    <div className="left-down-container">
                    <div className="header">
                        <p>INPUT DESCRIPTION OF <span>NEW ROLE OF FI</span></p>
                    </div>
                    <Input  
                           name="jobTitle"
                           value={formik.values.name}
                           onChange={(event)=>onChangeHandler(event.target.name,event.target.value)}
                           onBlur={(event)=>onBlur(event.target.name)}
                           label="Job Title"
                           placeholder="enter your job title" 
                           errors={formik.errors.jobTitle}
                           
                           classes={{
                            inputComponentClass: "jobtitle-input",
                            labelClassName:"job-label",
                            inputIconContainer:"input-container",
                            inputClassName:"job-input"

                         }}
                          />

                       <Input  
                           name="jobDesc"
                           value={formik.values.name}
                           onChange={(event)=>onChangeHandler(event.target.name,event.target.value)}
                           onBlur={(event)=>onBlur(event.target.name)}
                           errors={formik.errors.jobDesc}
                           label="Job Description"
                           placeholder="enter about job description" 
                           
                           classes={{
                            inputComponentClass: "jobtitle-input",
                            labelClassName:"job-label",
                            inputIconContainer:"input-container",
                            inputClassName:"job-input"

                         }}
                          />
                    </div>

                </div>

                <div className="right-container">
                    <div className="right-up-container">
                          <JobSkill/>
                    </div>
                    <div className="right-down-container">
                         <JobSkill/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ContactDetails;