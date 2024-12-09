import React, { Fragment } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

function Signup() {
  const defaultValue = {
    name: "",
    email: "",
    password: "",
    gender: "",
    termsAndCond: false,
    TransportMode: ""
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required("Please Enter your Name"),
    email: yup.string().required("Please Enter your Email").email("Enter a valid email"),
    password: yup.string().required("Please Enter your Password"),
    gender: yup.string().required("Please select a gender"),
    termsAndCond: yup.boolean().oneOf([true], "Please accept terms and conditions"),
    TransportMode: yup.string().required("Please select a transport mode")
  });

  const handlesubmit = (values) => {
    console.log("values", values);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Form Validation with Formik and Yup
        </h1>
        <Formik
          initialValues={defaultValue}
          validationSchema={validationSchema}
          onSubmit={handlesubmit}
        >
          <Form className="space-y-6">
            
            <div>
              <Field
                type="text"
                name="name"
                placeholder="Enter your Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-red-500 text-sm mt-1">
                <ErrorMessage name="name" />
              </p>
            </div>

            
            <div>
              <Field
                type="text"
                name="email"
                placeholder="Enter your Email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-red-500 text-sm mt-1">
                <ErrorMessage name="email" />
              </p>
            </div>

            
            <div>
              <Field
                type="password"
                name="password"
                placeholder="Enter your Password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-red-500 text-sm mt-1">
                <ErrorMessage name="password" />
              </p>
            </div>

            
                        <div>
              <Field
                component="select"
                name="gender"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" disabled>
                  Please select your gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Field>
              <p className="text-red-500 text-sm mt-1">
                <ErrorMessage name="gender" />
              </p>
            </div>

            
            <div className="flex items-center">
              <Field
                type="checkbox"
                name="termsAndCond"
                className="mr-2 text-blue-500 focus:ring-2 focus:ring-blue-500"
              />
              <label className="text-gray-700">I accept the terms and conditions</label>
            </div>
            <p className="text-red-500 text-sm mt-1">
              <ErrorMessage name="termsAndCond" />
            </p>

            
            <div>
              <p className="text-gray-700">Select your transport mode:</p>
              <div className="flex items-center space-x-4 mt-2">
                <label className="flex items-center">
                  <Field
                    type="radio"
                    name="TransportMode"
                    value="Bike"
                    className="mr-2 text-blue-500 focus:ring-2 focus:ring-blue-500"
                  />
                  Bike
                </label>
                <label className="flex items-center">
                  <Field
                    type="radio"
                    name="TransportMode"
                    value="Car"
                    className="mr-2 text-blue-500 focus:ring-2 focus:ring-blue-500"
                  />
                  Car
                </label>
              </div>
              <p className="text-red-500 text-sm mt-1">
                <ErrorMessage name="TransportMode" />
              </p>
            </div>

            
                        <div>
              <button
                type="submit"
                className="w-full py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition duration-200"
              >
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Signup;
