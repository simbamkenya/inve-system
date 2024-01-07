import React from "react";
import { Formik } from "formik";
import DashboardLayout from "../../layouts/DashboardLayout";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/features/productSlice";

function Create(props) {
  const dispatch = useDispatch();

  const handleProductSubmission = (values, { setSubmitting }) => {
    dispatch(addProduct(values));
  };
  return (
    <DashboardLayout>
      <div className="p-4 bg-white rounded shadow-sm">
        <div className="md:flex px-3">
          <div className="form-icon md:w-1/4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input class="form-input" placeholder="Search for posts..." />
          </div>
        </div>

        <Formik
          initialValues={{
            name: "",
            unit: "",
            quantity: "",
            quantity_alert: "",
            tax: "",
            category: "",
            buying_price: "",
            selling_price: "",
            note: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.name = "Required!";
            }
            return errors;
          }}
          onSubmit={handleProductSubmission}
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

              <div className="md:flex mb-6">
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                  <label class="block text-sm mb-1" for="quantity_alert">
                    Quantity Alert
                  </label>
                  <input
                    class="form-input"
                    placeholder="Quantity Alert"
                    id="quantity_alert"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.quantity_alert}
                  />
                </div>
                <div className="md:w-1/2 px-3">
                  <label class="block text-sm mb-1" for="unit">
                    Unit
                  </label>
                  <select
                    class="form-select"
                    id="unit"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.unit}
                  >
                    <option>Books</option>
                    <option>Electronics</option>
                  </select>
                </div>
              </div>

              <div className="md:flex mb-6">
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                  <label class="block text-sm mb-1" for="buying_price">
                    Buying Price
                  </label>
                  <input
                    class="form-input"
                    placeholder="Buying Price"
                    id="buying_price"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.buying_price}
                  />
                </div>
                <div className="md:w-1/2 px-3">
                  <label class="block text-sm mb-1" for="selling_price">
                    Selling Price
                  </label>
                  <input
                    class="form-input"
                    placeholder="Selling Price"
                    id="selling_price"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.selling_price}
                  />
                </div>
              </div>

              <div className="md:flex mb-6">
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                  <label class="block text-sm mb-1" for="tax">
                    Tax
                  </label>
                  <input
                    class="form-input"
                    placeholder="Tax"
                    id="tax"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.tax}
                  />
                </div>
                <div className="md:w-1/2 px-3">
                  <label class="block text-sm mb-1" for="category">
                    Category
                  </label>
                  <select
                    class="form-select"
                    id="category"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.category}
                  >
                    <option>Books</option>
                    <option>Electronics</option>
                  </select>
                </div>
              </div>

              <div className="mb-6 px-3">
                <label class="block text-sm mb-1" for="note">
                  Notes
                </label>
                <textarea
                  class="form-input"
                  id="note"
                  placeholder="Write notes"
                  rows="3"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.note}
                ></textarea>
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
