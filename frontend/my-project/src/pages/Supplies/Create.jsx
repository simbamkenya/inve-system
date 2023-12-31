import React from "react";
import { Link } from "react-router-dom";

function Create(props) {
  return (
    <form>
      <div className="p-4 bg-red-100">
        <div className="md:flex mb-6 px-3">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block text-sm mb-1" for="name">
              Name
            </label>
            <input class="form-input" placeholder="Fullname" id="name" />
          </div>
          <div className="md:w-1/2 px-3">
            <label class="block text-sm mb-1" for="phone">
              Phone
            </label>
            <input class="form-input" placeholder="phone number" id="phone" />
          </div>
        </div>

        <div className="md:flex mb-6 px-3">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block text-sm mb-1" for="email">
              Email
            </label>

            <input class="form-input" placeholder="email" id="email" />
          </div>
          <div className="md:w-1/2 px-3">
            <label class="block text-sm mb-1" for="address">
              Address
            </label>
            <input class="form-input" placeholder="address" id="address" />
          </div>
        </div>

        <div className="md:flex mb-6 px-3">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block text-sm mb-1" for="type">
              Type
            </label>
            <select class="form-select" id="type">
              <option>Wholeseller</option>
              <option>Retailer</option>
            </select>
          </div>
          <div className="md:w-1/2 px-3">
            <label class="block text-sm mb-1" for="photo">
              Profile Photo
            </label>
            <input class="form-input" type="file" id="photo" />
          </div>
        </div>
        <div className="px-6">
         <button type="submit" class="btn btn-primary">Save</button> 
        </div>
        
      </div>
    </form>
  );
}

export default Create;
