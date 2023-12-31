import React from "react";

function Welcome(props) {
  return (
    <section class="grid grid-cols-1 gap-0 bg-blue-100 bg-opacity-25 md:grid-cols-2">
      <div class="flex flex-col items-start justify-center px-4 py-24 lg:px-20">
        <span class="mb-3 text-white bg-blue-900 badge">Pre Beta</span>
        <h1 class="mb-6 text-4xl font-bold leading-tight text-blue-900 md:text-4xl lg:text-5xl">
          Inventory Management System.
        </h1>
        <form class="w-full mb-6">
          <label class="sr-only">Your Email</label>
          <div class="block lg:hidden">
            <input
              class="text-blue-900 form-input form-input-lg"
              type="email"
              placeholder="Enter your email..."
              required="true"
            />
            <button
              class="w-full mt-2 text-white bg-blue-900 hover:bg-blue-800 btn btn-lg"
              type="submit"
            >
              Get Started
            </button>
          </div>
          <div class="hidden w-full form-append lg:flex">
            <input
              class="text-blue-900 form-input form-input-lg"
              type="email"
              placeholder="Enter your email..."
              required="true"
            />
            <button
              class="text-white bg-blue-900 hover:bg-blue-800 btn btn-lg"
              type="submit"
            >
              Get Started
            </button>
          </div>
        </form>
        <p class="pr-0 mb-4 text-sm text-blue-800 tracking-relaxed lg:pr-16">
          Get the #1 Business Messenger and start delivering personalized
          experiences at every stage of the customer journey.
        </p>
      </div>
      <div>
        <img
          src="https://plus.unsplash.com/premium_photo-1661962292772-b386d72bf8a8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="3 women looking at a laptop"
          class="object-cover w-full h-64 bg-gray-100 md:h-full"
          loading="lazy"
        />
      </div>
    </section>
  );
}

export default Welcome;
