import {
  Button,
  FormContainer,
  FormItem,
  Input,
  Notification,
  toast,
} from "components/ui";
import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { apiContactUs } from "services/contactUsService";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Please enter your name"),
  email: Yup.string()
    .matches(
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      "Please enter valid email"
    )
    .required("Please enter your email"),
  institution: Yup.string(),
  message: Yup.string().required("Please enter your message"),
});

export const ContactForm = () => {
  const [error, setError] = useState(false);
  const [data, setData] = useState({
    fullName: "",
    email: "",
    institution: "",
    message: "",
  });

  const onSubmit = async (values, setSubmitting, resetForm) => {
    try {
      setSubmitting(true);
      setError(false);
      const result = await apiContactUs(values);
      if (result.status === 200) {
        resetForm();
        toast.push(
          <Notification title={"Success"} type={"success"} closable>
            Form has been successfully submitted.
          </Notification>
        );
      }
      setSubmitting(false);
      setError(false);
    } catch (error) {
      if (error) {
        toast.push(
          <Notification title={"Error"} type={"danger"} closable>
            {error.message || "Something went wrong!"}
          </Notification>
        );
      }
      setSubmitting(false);
    }
  };


  return (
    <div className="w-1/2">
      <div>
        <Formik
          initialValues={data}
          validationSchema={validationSchema}
          enableReinitialize
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              // alert(JSON.stringify(values));
              onSubmit(values, setSubmitting, resetForm);
            }, 1000);
          }}
        >
          {({ values, touched, errors, isSubmitting, handleChange }) => {
            return (
              <Form>
                <FormContainer>
                  <div
                    className="px-[86px] pt-12 pb-16"
                    style={{
                      background: "rgba(95,93,93,0.17)",
                      backdropFilter: "blur(42.5px)",
                      borderRadius: "15px",
                    }}
                  >
                    <p className="text-3xl font-medium text-center text-white">
                      Get in touch
                    </p>

                    <div className="pt-5">
                      <FormItem
                        label="Name"
                        invalid={errors.fullName && touched.fullName}
                        errorMessage={errors.fullName}
                        labelClass="text-lg text-white"
                        asterisk
                      >
                        <input
                          type="text"
                          placeholder="Enter your name"
                          name="fullName"
                          onChange={handleChange}
                          value={values.fullName}
                          autoComplete="off"
                          className={`bg-white py-4 px-5 w-full rounded-[10px] focus:outline-none placeholder-[#161d28] text-black ${
                            errors.fullName && errors.touched
                              ? "ring ring-offset-0 ring-red-500"
                              : ""
                          }`}
                        />
                      </FormItem>
                    </div>
                    <div className="">
                      <FormItem
                        label="Email"
                        invalid={errors.email && touched.email}
                        errorMessage={errors.email}
                        labelClass="text-lg  text-white"
                        asterisk
                      >
                        <input
                          type="text"
                          placeholder="Enter your email"
                          name="email"
                          onChange={handleChange}
                          value={values.email}
                          autoComplete="off"
                          className={`bg-white py-4 px-5 w-full rounded-[10px] focus:outline-none  placeholder-[#161d28] text-black ${
                            errors.email && errors.touched
                              ? "ring ring-offset-0 ring-red-500"
                              : ""
                          }`}
                        />
                      </FormItem>
                    </div>
                    <div className="">
                      <FormItem
                        label="Company"
                        invalid={errors.institution && touched.institution}
                        errorMessage={errors.institution}
                        labelClass="text-lg  text-white"
                      >
                        <input
                          type="text"
                          placeholder="Enter the name of your Company"
                          name="institution"
                          onChange={handleChange}
                          value={values.institution}
                          autoComplete="off"
                          className={`bg-white py-4 px-5 w-full rounded-[10px] focus:outline-none  placeholder-[#161d28] text-black ${
                            errors.institution && errors.touched
                              ? "ring ring-offset-0 ring-red-500"
                              : ""
                          }`}
                        />
                      </FormItem>
                    </div>
                    <div>
                      <FormItem
                        label="Message"
                        invalid={errors.message && touched.message}
                        errorMessage={errors.message}
                        labelClass="text-lg  text-white"
                        asterisk
                      >
                        <textarea
                          rows={3}
                          placeholder="Enter your message"
                          name="message"
                          onChange={handleChange}
                          value={values.message}
                          className={`bg-white py-4 px-5 w-full rounded-[10px] focus:outline-none  placeholder-[#161d28] text-black ${
                            errors.message && errors.touched
                              ? "ring ring-offset-0 ring-red-500"
                              : ""
                          }`}
                        />
                      </FormItem>
                    </div>
                    {/* <button
                      type="submit"
                      
                      disabled={isSubmitting}
                      className="w-full bg-[#D70015] text-white py-4 rounded-[10px] mt-3"
                    >
                      {isSubmitting ? "Submiting..." : "Submit"}
                    </button> */}
                    <Button
                      type="submit"
                      variant="solid"
                      className="w-full !bg-[#D70015] text-white py-4 rounded-[10px] hover:bg-[#D70015] !active:bg-[#D70015]"
                      loading={isSubmitting}
                      disable={isSubmitting}
                    >
                      Submit
                    </Button>
                  </div>
                </FormContainer>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};
