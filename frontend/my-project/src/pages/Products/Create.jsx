import React from "react";

function Create(props) {
  return (
    <div className="bg-red-100 p-4">
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

      <div className="md:flex mb-6">
        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block text-sm mb-1" for="name">
            Name
          </label>
          <input class="form-input" placeholder="Praveen Juge" id="name" />
        </div>
        <div className="md:w-1/2 px-3">
          <label class="block text-sm mb-1" for="quantity">
            Quantity
          </label>
          <input class="form-input" placeholder="Praveen Juge" id="quantity" />
        </div>
      </div>

      <div className="md:flex mb-6">
        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block text-sm mb-1" for="quantity_alert">
            Quantity Alert
          </label>
          <input
            class="form-input"
            placeholder="Praveen Juge"
            id="quantity_alert"
          />
        </div>
        <div className="md:w-1/2 px-3">
          <label class="block text-sm mb-1" for="unit">
            Unit
          </label>
          <select class="form-select" id="unit">
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
            placeholder="Praveen Juge"
            id="buying_price"
          />
        </div>
        <div className="md:w-1/2 px-3">
          <label class="block text-sm mb-1" for="selling_price">
            Selling Price
          </label>
          <input
            class="form-input"
            placeholder="Praveen Juge"
            id="selling_price"
          />
        </div>
      </div>

      <div className="md:flex mb-6">
        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block text-sm mb-1" for="tax">
            Tax
          </label>
          <input class="form-input" placeholder="Praveen Juge" id="tax" />
        </div>
        <div className="md:w-1/2 px-3">
          <label class="block text-sm mb-1" for="category">
            Category
          </label>
          <select class="form-select" id="category">
            <option>Books</option>
            <option>Electronics</option>
          </select>
        </div>
      </div>

      <div className="mb-6 px-3">
        <label class="block text-sm mb-1" for="notes">
          Notes
        </label>
        <textarea
          class="form-input"
          id="notes"
          placeholder="Use this to write your next great novel"
          rows="3"
        ></textarea>
      </div>
      <div className="px-3">
        <button type="submit" class="btn btn-primary">
          Save
        </button>
      </div>
    </div>
  );
}

export default Create;
