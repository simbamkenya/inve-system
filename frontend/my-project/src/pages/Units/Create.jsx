import React from "react";
import { Formik } from "formik";
import DashboardLayout from "../../layouts/DashboardLayout";

function Create(props) {
  return (
    <DashboardLayout>
      <Formik
        initialValues={{
          name: "",
          short_code: "",
          slug: ""
        }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
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
          <form className="p-4 bg-white rounded shadow-sm" onSubmit={handleSubmit}>
            <div className="md:flex mb-6 px-3">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block text-sm mb-1" for="name">
                  Name
                </label>
                <input class="form-input" placeholder="name" id="name" 
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                />
              </div>
              <div className="md:w-1/2 px-3">
                <label class="block text-sm mb-1" for="slug">
                  slug
                </label>
                <input class="form-input" placeholder="slug" id="slug"onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.slug} />
              </div>
            </div>

            <div className="md:flex mb-6 px-3">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block text-sm mb-1" for="short_code">
                  Short Code
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
              {/* <div className="md:w-1/2 px-3">
          <label class="block text-sm mb-1" for="address">
            Address
          </label>
          <input class="form-input" placeholder="address" id="address" />
        </div> */}
            </div>
            <div className="px-6">
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
