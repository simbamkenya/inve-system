import React from "react";

function Create(props) {
  return (
    <div className="p-4 bg-red-100">
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
    </div>
  );
}

export default Create;
