import axios from 'axios'
import {  Formik, Form, Field, ErrorMessage } from 'formik'
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import * as yup from "yup"

function OpenAccs() {
  const navigate = useNavigate();
    return (
    <div>
    <h3>Register User</h3>
    <Formik
        initialValues={{
            FirstName: "",
            LastName: "",
            Age: "",
            ContactNumber: "",
            Email: "",
            PanNumber: "",
            AadharNumber: "",
            City: "",
            State: "",
        }}

        validationSchema= {yup.object({
            FirstName: yup.string().required("First Name Required").min(6).max(20),
        LastName: yup.string().required("Last Name is Required").min(4).max(20),
        Age: yup.number().required("Age is required").min(18).max(100),
        ContactNumber: yup
            .string()
            .required("Contact Number is required")
            .matches(/\+91\d{10}/, "Invalid Mobile")
            .length(13),
        Email: yup.string().required("Email is required"),
        PanNumber: yup.string().required("Pan Number is required"),
        AadharNumber: yup.string().required("Aadhar Number is required"),
        City: yup.string().required("City is required"),
        State: yup.string().required("State is required"),
        })}

        onSubmit={(values) => {
            axios({
                method: "post",
                url: "http://127.0.0.1:5100/registercustomer",
                data: values
            })
            alert("Registered Successfully..");
            navigate("/UserLogin");
        }}


        
      >
        <Form>
        <dl className="container-fluid justify-content-center align-content-center text-center">
              <h3>Open New Account</h3>
              <dt><Field type="text" name="FirstName" placeholder="Enter First Name" ></Field> <br /><span className="text-danger"><ErrorMessage name="FirstName" /></span></dt>
              <dt><Field type="text" name="LastName" placeholder="Enter Las tName" ></Field> <br /><span className="text-danger"><ErrorMessage name="LastName" /></span></dt>
              <dt><Field type="text" name="Age" placeholder="Enter Age" ></Field> <br /><span className="text-danger"><ErrorMessage name="Age" /></span></dt>
              <dt><Field type="text" name="ContactNumber" placeholder="Enter Contact Number" ></Field> <br /><span className="text-danger"><ErrorMessage name="ContactNumber" /></span></dt>
              <dt><Field type="email" name="Email" placeholder="Enter Email" ></Field> <br /><span className="text-danger"><ErrorMessage name="Email" /></span></dt>
              <dt><Field type="text" name="PanNumber" placeholder="Enter PAN Number" ></Field> <br /><span className="text-danger"><ErrorMessage name="PanNumber" /></span></dt>
              <dt><Field type="text" name="AadharNumber" placeholder="Enter Aadhar Number" ></Field> <br /><span className="text-danger"><ErrorMessage name="AadharNumber" /></span></dt>
              <dt><Field type="text" name="City" placeholder="Enter City" ></Field> <br /><span className="text-danger"><ErrorMessage name="City" /></span></dt>
              <dt><Field type="text" name="State" placeholder="Enter State" ></Field> <br /><span className="text-danger"><ErrorMessage name="State" /></span></dt>
              <button >Submit</button>
            </dl>
        </Form>
      </Formik>
    </div>
  )
}

export default OpenAccs