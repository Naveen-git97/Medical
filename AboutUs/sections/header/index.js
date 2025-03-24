import { Button, FormContainer, FormItem, Input } from "components/ui";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useAuth from "utils/hooks/useAuth";
import useTimeOutMessage from "utils/hooks/useTimeOutMessage";
import { setRegisterationData } from "views/auth/SignUp/store";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .matches(
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      "Please enter valid email"
    )
    .required("Please enter your email"),
});

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isEmailExists } = useAuth();
  const [message, setMessage] = useTimeOutMessage();

  const handleSubmit = async (value) => {
    const bodyData = { email: value.email };
    try {
      const response = await isEmailExists(bodyData);

      if (response?.data?.data === true) {
        //need to check with client
         setMessage('Email is already registered')
        // navigate("/sign-in");
        return;
      }
      dispatch(
        setRegisterationData({
          personalInfo: {
            email: value.email,
            firstName: "",
            middleName: "",
            lastName: "",
            dob: "",
            last4SSN: "",
            phoneNumber: "",
            password: "",
            confirmPassword: "",
            acceptTerms: false,
          },
        })
      );
      navigate("/sign-up");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-[#0E131B] relative overflow-hidden">
      <div
        className="container mx-auto px-5 flex items-center gap-5 justify-center"
        style={{ height: "calc(100vh - 100px)" }}
      >
        <div className="w-full flex justify-start relative z-50">
          <div className="w-[620px]">
            <h1 className="text-6xl font-semibold leading-[84px] pb-4">
              Say goodbye to complicated and long processes
            </h1>
            <p className="text-2xl font-normal w-[500px] pb-8">
              A user-friendly and simplified approach of providing access to
              information for a stress free process.
            </p>
            <div></div>
            <div className="bg-[#5F5D5D2B] p-5 rounded-2xl flex gap-4 justify-between">
              <div className="w-full">
                <Formik
                  enableReinitialize
                  initialValues={{ email: "" }}
                  validationSchema={validationSchema}
                  onSubmit={(values) => {
                    handleSubmit(values);
                  }}
                >
                  {({ values, errors, touched }) => {
                    return (
                      <Form>
                        <FormContainer>
                          <div className="flex gap-5">
                            <div className="w-[60%]">
                              <p className="text-base font-semibold ">
                                Register using email address
                              </p>
                              <FormItem
                                className="mb-0"
                                invalid={errors.email && touched.email}
                                errorMessage={errors.email}
                              >
                                <div className="">
                                  <Field
                                    placeholder="example@gmail.com"
                                    type="text"
                                    name="email"
                                    autoComplete="off"
                                    component={Input}
                                    className="outline-none border-none p-0 text-2xl focus:ring-0 	"
                                  />
                                </div>
                                {message && (
                                  <p className="text-red-500">{message}</p>
                                )}
                              </FormItem>
                            </div>

                            <div className="w-[40%]">
                              <Button
                                variant="solid"
                                color="red-600"
                                className="w-full h-full"
                              >
                                Sign Up
                              </Button>
                            </div>
                          </div>
                        </FormContainer>
                      </Form>
                    );
                  }}
                </Formik>
              </div>
              <button
                className="hidden bg-[#D70015] rounded-lg px-16 py-5 text-xl font-semibold text-white"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
            {/* <div className="pt-6 flex gap-4">
              <div className="flex gap-2">
                <img
                  src="img/landing-page/check_icon.png"
                  className="w-5 h-5"
                />
                <p>Free Register</p>
              </div>
              <div className="flex gap-2">
                <img
                  src="img/landing-page/check_icon.png"
                  className="w-5 h-5"
                />
                <p>Great Service</p>
              </div>
            </div> */}
          </div>
        </div>
        {/* right panel */}

        {/* gradiants */}
        <img
          src="img/landing-page/gradient-circ1.png"
          className="absolute -right-44 xl:right w-1/2 xl:w-auto top-32 xl:-top-24 rotate-180"
        />
        <img
          src="img/landing-page/gradient-circ2.png"
          className="absolute top-36 translate-x-60"
        />
        <img
          src="img/landing-page/gradient-circ3.png"
          className="absolute -bottom-60 right-0"
        />
        {/* main image */}
        <div className="flex justify-end absolute right-0 w-[40%] z-40">
          <img src="img/landing-page/header.png" />
          {/* header icons */}
          <img
            src="img/landing-page/header-icon1.png"
            className="absolute w-[10%] -left-16 -top-10 backdrop-blur-xl"
          />
          <img
            src="img/landing-page/header-icon2.png"
            className="absolute w-[25%] -top-16 -right-10 backdrop-blur-xl"
          />
          <img
            src="img/landing-page/header-icon3.png"
            className="absolute w-[20%] -bottom-6 -left-6 backdrop-blur-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
