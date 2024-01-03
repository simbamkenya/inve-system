import React from "react";
import { Form, Link } from "react-router-dom";
import { Formik } from "formik";
import DashboardLayout from "../../layouts/DashboardLayout";

function Create(props) {
  return (
    <DashboardLayout>
      <Formik
        initialValues={{ name: "", short_code: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.name = "Required!";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {}}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form className="p-4" onSubmit={handleSubmit}>
            {console.log(values)}
            <div className="md:flex mb-6">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block text-sm mb-1" for="name">
                  Name
                </label>
                {/* {errors.name && touched.name && errors.name} */}
                <input
                  class="form-input"
                  placeholder="name"
                  id="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
              </div>

              <div className="md:w-1/2 px-3">
                <label class="block text-sm mb-1" for="short_code">
                  Short_code
                </label>
                <input
                  class="form-input"
                  placeholder="short code"
                  id="short_code"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.short_code}
                />
              </div>
            </div>

            <div className="px-3">
              <button type="submit" class="btn btn-primary">
                Save
              </button>
            </div>
          </form>
        )}
      </Formik>
    </DashboardLayout>
  );
}

export default Create;
