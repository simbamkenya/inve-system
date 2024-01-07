import React from "react";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addOrder } from "../../store/features/orderSlice";
import DashboardLayout from "../../layouts/DashboardLayout";

function Create(props) {
  const dispatch = useDispatch();

  const handleOrderSubmission = (values, { setSubmitting }) => {
    dispatch(addOrder(values));
  };

  return (
    <DashboardLayout>
      <Formik
        initialValues={{
          name: "",
          quantity: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.quantity) {
            errors.name = "Required!";
          }
          return errors;
        }}
        onSubmit={handleOrderSubmission}
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
          <form className="md:flex flex-col mb-6" onSubmit={handleSubmit}>
            {console.log(values)}
            <div className="md:flex mb-6">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block text-sm mb-1" for="name">
                  Name
                </label>
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
                <label class="block text-sm mb-1" for="quantity">
                  Quantity
                </label>
                <input
                  class="form-input"
                  placeholder="Praveen Juge"
                  id="quantity"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.quantity}
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
