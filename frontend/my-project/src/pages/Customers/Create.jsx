import React from "react";
import { Formik } from "formik";
import DashboardLayout from "../../layouts/DashboardLayout";

function Create(props) {
  return (
    <DashboardLayout>
      <div className="p-4  bg-white rounded shadow-sm">
        <Formik>
           <form>
          <div className="md:flex mb-6">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block text-sm mb-1" for="name">
                Name
              </label>
              <input class="form-input" placeholder="Fullname" id="name" />
            </div>

            <div className="md:w-1/2 px-3">
              <label class="block text-sm mb-1" for="email">
                Email
              </label>
              <input class="form-input" placeholder="email" id="email" />
            </div>
          </div>

          <div className="md:flex mb-6">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block text-sm mb-1" for="address">
                Address
              </label>
              <input class="form-input" placeholder="address" id="address" />
            </div>
            <div className="md:w-1/2 px-3">
              <label class="block text-sm mb-1" for="quantity">
                Quantity
              </label>

              <input class="form-input" placeholder="quantity" id="quantity" />
            </div>
          </div>

          <div className="md:flex mb-6">
            <div className="px-3">
              <label class="block text-sm mb-1" for="photo">
                Profile Photo
              </label>
              <input class="form-input" type="file" id="photo" />
            </div>
          </div>
          <div className="px-3">
            <button type="submit" class="btn btn-primary">
              Save
            </button>
          </div>
        </form>
        </Formik>
       
      </div>
    </DashboardLayout>
  );
}

export default Create;
