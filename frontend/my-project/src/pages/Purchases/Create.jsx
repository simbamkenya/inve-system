import React from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { addPurchase } from "../../store/features/purchaseSlice";

function Create(props) {
  const dispatch = useDispatch();

  const handlePurchaseSubmission = (values, { setSubmitting }) => {
    dispatch(addPurchase(values));
  };

  return (
    <DashboardLayout>
      <div className="p-4 bg-white rounded shadow-sm">
        <Formik
          initialValues={{
            purchase_no: "",
            status: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.purchase_no) {
              errors.name = "Required!";
            }
            return errors;
          }}
          onSubmit={handlePurchaseSubmission}
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
                  <label class="block text-sm mb-1" for="purchase_no">
                    Purchase No
                  </label>
                  <input
                    class="form-input"
                    placeholder="Purchase No"
                    id="purchase_no"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.purchase_no}
                  />
                </div>
                <div className="md:w-1/2 px-3">
                  <label class="block text-sm mb-1" for="status">
                    Status
                  </label>
                  <select
                    class="form-select"
                    id="status"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.status}
                  >
                    <option>Books</option>
                    <option>Electronics</option>
                  </select>
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
