import { useFormik, Formik, Form, Field, ErrorMessage } from 'formik'
import React from 'react'
import * as yup from 'yup'

function LoanCalculator() {

    return(

    <Formik 
        initialValues={{
            PrincipalAmount : "",
            InterestRate : "" ,
            Term : ""
        }}
        
        validationSchema={yup.object({
            PrincipalAmount : yup.number().required().min(1).max(100000000),
            InterestRate : yup.number().required().min(5).max(25),
            Term : yup.number().required().min(1).max(25)
        })}

        onSubmit={(values)=>{
            
                console.log(values.PrincipalAmount)
            
        }}
        >
        <Form>
            <dd><Field type="text" name="PrincipalAmount" placeholder="PrincipalAmount" ></Field></dd>
            <dd><ErrorMessage name='PrincipalAmount'></ErrorMessage></dd>
            <dd><Field type="text" name="InterestRate" placeholder="InterestRate" ></Field></dd>
            <dd><ErrorMessage name='InterestRate'></ErrorMessage></dd>
            <dd><Field type="text" name="Term" placeholder="Term" ></Field></dd>
            <dd><ErrorMessage name='Term'></ErrorMessage></dd>
            <Field type="text" name=""></Field>
        </Form>

</Formik>)}

export default LoanCalculator