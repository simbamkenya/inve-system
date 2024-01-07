import React from "react";
import { Formik } from "formik";
import DashboardLayout from "../../layouts/DashboardLayout";
import { useDispatch } from "react-redux";
import { addCustomer } from "../../store/features/customerSlice";


function Create(props) {
  const dispatch = useDispatch();

  const handleCustomerSubmission = (values, { setSubmitting }) => {
    dispatch(addCustomer(values));
  };

  return (
    <DashboardLayout>
      <div className="p-4  bg-white rounded shadow-sm">
        <Formik
          initialValues={{
            name: "",
            email: "",
            address: "",
            photo: "",
            phone: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.name = "Required!";
            }
            return errors;
          }}
          onSubmit={handleCustomerSubmission}
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
              {console.log(values)}
              <div className="md:flex mb-6">
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
              </div>

              <div className="md:flex mb-6">
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
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

              <div className="md:flex mb-6">
                <div className="px-3">
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
              <div className="px-3">
                <button type="submit" class="btn btn-primary">
                  Save
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </DashboardLayout>
  );
}

export default Create;
