import React from "react";
import { Link } from "react-router-dom";

function Create(props) {
  return (
    <form className="bg-red-100 p-4">
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

      <div className="px-3">
        <button type="submit" class="btn btn-primary">
          Save
        </button>
      </div>
    </form>
  );
}

export default Create;
