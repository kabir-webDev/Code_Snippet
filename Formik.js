//Pro Way

import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useState } from "react";
import * as Yup from 'yup' //npm add yup

function FormikPracTwo() {
  const initialValues = {
    name: "",
    email: "",
    channel: "",
  };

  const onSubmit = (values) => {
    console.log("Form Data: ", values);
  };

  const validate = (values) => {
    let error = {};
    if (!values.name) {
      error.name = "Required!!";
    }
    if (!values.email) {
      error.email = "Required!!";
    }
    if (!values.channel) {
      error.channel = "Required!!";
    }
    return error;
  };
  
//   const validationSchema = Yup.object({
//   name: Yup.string().required('Required'),
//   email: Yup.string()
//     .email('Invalid email format')
//     .required('Required'),
//   channel: Yup.string().required('Required')
// })
  

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" />
        </div>
        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" />
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field type="text" id="channel" name="channel" />
          <ErrorMessage name="channel" />
          <button type="submit">Submit</button>
        </div>
      </Form>
    </Formik>
  );
}

export default FormikPracTwo;

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//Noob Way

import { useFormik } from "formik";
import React, { useState } from "react";

function FormikPracOne() {
  const [user, setUser] = useState([]);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      channel: "",
    },
    onSubmit: (values) => {
      setUser([...user, values]);
      console.log("Form Data: ", user);
    },
    validate: (values) => {
      let error = {};
      if (!values.name) {
        error.name = "Required!!";
      }
      if (!values.email) {
        error.email = "Required!!";
      }
      if (!values.channel) {
        error.channel = "Required!!";
      }
      return error;
    },
  });
  console.log("Form Values: ", formik.values);
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            name="channel"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.channel}
          />
          {formik.touched.channel && formik.errors.channel ? (
            <div className="error">{formik.errors.channel}</div>
          ) : null}
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default FormikPracOne;


