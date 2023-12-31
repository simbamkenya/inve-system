import React, { useState } from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";
function Index(props) {

  return (

    <div class="flex flex-col">
      <div className="p-2 bg-red-100">
      <button class="rounded-none btn btn-primary mr-2"><Link to="/products/create">Add</Link></button>
      <button class="rounded-none btn btn-primary">Export</button>
      </div>
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div class="overflow-hidden mx-4 border-2">
            <table class="min-w-full text-left text-sm font-light">
              <thead class="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" class="px-6 py-4">
                    #
                  </th>
                  <th scope="col" class="px-6 py-4">
                    Name
                  </th>
                  <th scope="col" class="px-6 py-4">
                    Cateogory
                  </th>
                  <th scope="col" class="px-6 py-4">
                    Buying Price
                  </th>
                  <th scope="col" class="px-6 py-4">
                    Selling Price
                  </th>
                  <th scope="col" class="px-6 py-4">
                    Quantity
                  </th>
                  <th scope="col" class="px-6 py-4">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                  <td class="whitespace-nowrap px-6 py-4">Mark</td>
                  <td class="whitespace-nowrap px-6 py-4">Otto</td>
                  <td class="whitespace-nowrap px-6 py-4">450</td>
                  <td class="whitespace-nowrap px-6 py-4">500</td>
                  <td class="whitespace-nowrap px-6 py-4">50</td>
                  <td>
                    <button
                      type="button"
                      class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
                <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
                  <td class="whitespace-nowrap px-6 py-4">Jacob</td>
                  <td class="whitespace-nowrap px-6 py-4">Thornton</td>
                  <td class="whitespace-nowrap px-6 py-4">450</td>
                  <td class="whitespace-nowrap px-6 py-4">500</td>
                  <td class="whitespace-nowrap px-6 py-4">50</td>
                  <td>
                    <button
                      type="button"
                      class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
                <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td class="whitespace-nowrap px-6 py-4 font-medium">3</td>
                  <td class="whitespace-nowrap px-6 py-4">Larry</td>
                  <td class="whitespace-nowrap px-6 py-4">Wild</td>
                  <td class="whitespace-nowrap px-6 py-4">450</td>
                  <td class="whitespace-nowrap px-6 py-4">500</td>
                  <td class="whitespace-nowrap px-6 py-4">50</td>
                  <td>
                    <button
                      type="button"
                      class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    // <div class="shadow-md rounded-md overflow-hidden mx-4 md:mx-10">
    //   <table class="w-full table-fixed">
    //     <thead>
    //       <tr class="bg-gray-100">
    //         <th class="w-1/4 py-3 px-4 text-left text-gray-600 font-bold uppercase">
    //           Name
    //         </th>
    //         <th class="w-1/4 py-3 px-4 text-left text-gray-600 font-bold uppercase">
    //           Category
    //         </th>
    //         <th class="w-1/4 py-3 px-4 text-left text-gray-600 font-bold uppercase">
    //           Quantity
    //         </th>
    //         <th class="w-1/4 py-3 px-4 text-left text-gray-600 font-bold uppercase">
    //           Action
    //         </th>
    //       </tr>
    //     </thead>
    //     <tbody class="bg-white">
    //       <tr>
    //         <td class="py-4 px-6 border-b border-gray-200">John Doe</td>
    //         <td class="py-4 px-6 border-b border-gray-200 truncate">
    //           johndoe@gmail.com
    //         </td>
    //         <td class="py-4 px-6 border-b border-gray-200">555-555-5555</td>
    //         <td class="py-4 px-6 border-b border-gray-200">
    //           <button
    //             type="button"
    //             class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
    //           >
    //             Edit
    //           </button>
    //           <button
    //             type="button"
    //             class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
    //           >
    //             Delete
    //           </button>
    //         </td>
    //       </tr>
    //     </tbody>
    //   </table>
    // </div>
  );
}

export default Index;
