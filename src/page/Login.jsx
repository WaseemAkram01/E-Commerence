import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const defaultValue = {
        name: "",
        email: ""
    };
    
    const validationSchema = yup.object().shape({
        name: yup.string().required("Please Enter your Name"),
        email: yup.string().required("Please Enter your Email").email("Enter valid EMAIL format")
    });
    
    const handlesubmit = (values) => {
        console.log("values", values);
        navigate("/Card");
    };

    const handleSignup = () => {
        navigate("/signup");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Welcome to Shopify Store
                </h1>
                <h2 className="text-2xl font-semibold text-center text-gray-600 mb-8">Login</h2>
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

                        <div className="flex flex-col items-center space-y-4">
                            <button
                                type="submit"
                                className="w-full py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition duration-200"
                            >
                                Login
                            </button>
                            <button
                                type="button"
                                onClick={handleSignup}
                                className="w-full py-2 text-blue-500 bg-white border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white font-semibold transition duration-200"
                            >
                                Signup
                            </button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}

export default Login;
