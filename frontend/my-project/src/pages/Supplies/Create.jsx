import React from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import DashboardLayout from "../../layouts/DashboardLayout";

function Create(props) {
  return (
    <DashboardLayout>
      <Formik
        initialValues={{
          name: "",
          email: "",
          address: "",
          type: "",
          phone: "",
          photo: "",
          account_holder: "",
          account_number: "",
          bank_name: "",
        }}
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
          <form onSubmit={handleSubmit}>
            <div className="p-4 bg-white rounded shadow-sm">
              <div className="md:flex mb-6 px-3">
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                  <label class="block text-sm mb-1" for="name">
                    Name
                  </label>
                  <input
                    class="form-input"
                    placeholder="Fullname"
                    id="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                </div>
                <div className="md:w-1/2 px-3">
                  <label class="block text-sm mb-1" for="phone">
                    Phone
                  </label>
                  <input
                    class="form-input"
                    placeholder="phone number"
                    id="phone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                  />
                </div>
              </div>

              <div className="md:flex mb-6 px-3">
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                  <label class="block text-sm mb-1" for="email">
                    Email
                  </label>

                  <input
                    class="form-input"
                    placeholder="email"
                    id="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                </div>
                <div className="md:w-1/2 px-3">
                  <label class="block text-sm mb-1" for="address">
                    Address
                  </label>
                  <input
                    class="form-input"
                    placeholder="address"
                    id="address"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.address}
                  />
                </div>
              </div>

              <div className="md:flex mb-6 px-3">
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                  <label class="block text-sm mb-1" for="type">
                    Type
                  </label>
                  <select
                    class="form-select"
                    id="type"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.type}
                  >
                    <option>Wholeseller</option>
                    <option>Retailer</option>
                  </select>
                </div>
                <div className="md:w-1/2 px-3">
                  <label class="block text-sm mb-1" for="photo">
                    Profile Photo
                  </label>
                  <input
                    class="form-input"
                    type="file"
                    id="photo"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.photo}
                  />
                </div>
              </div>

              <div className="md:flex mb-6 px-3">
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                  <label class="block text-sm mb-1" for="account_holder">
                    Account Holder
                  </label>

                  <input
                    class="form-input"
                    placeholder="account_holder"
                    id="account_holder"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.account_holder}
                  />
                </div>
                <div className="md:w-1/2 px-3">
                  <label class="block text-sm mb-1" for="account_number">
                    Account Number
                  </label>
                  <input
                    class="form-input"
                    placeholder="Account Number"
                    id="account_number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.account_number}
                  />
                </div>
              </div>

              <div className="md:flex mb-6 px-3">
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                  <label class="block text-sm mb-1" for="bank_name">
                    Bank Name
                  </label>

                  <input
                    class="form-input"
                    placeholder="bank_name"
                    id="bank_name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.bank_name}
                  />
                </div>
                <div className="md:w-1/2 px-3">
                  {/* <label class="block text-sm mb-1" for="address">
                    Address
                  </label>
                  <input
                    class="form-input"
                    placeholder="address"
                    id="address"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.address}
                  /> */}
                </div>
              </div>

              <div className="px-6">
                <button type="submit" class="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </DashboardLayout>
  );
}

export default Create;
