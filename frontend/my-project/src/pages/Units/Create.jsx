import React from "react";

function Create(props) {
  return (
    <form className="bg-red-100 p-4">
      <div className="md:flex mb-6 px-3">
        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block text-sm mb-1" for="name">
            Name
          </label>
          <input class="form-input" placeholder="name" id="name" />
        </div>
        <div className="md:w-1/2 px-3">
          <label class="block text-sm mb-1" for="slug">
            slug
          </label>
          <input class="form-input" placeholder="slug" id="slug" />
        </div>
      </div>

      <div className="md:flex mb-6 px-3">
        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block text-sm mb-1" for="short_code">
            Short Code
          </label>

          <input class="form-input" placeholder="short code" id="short_code" />
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
  );
}

export default Create;
