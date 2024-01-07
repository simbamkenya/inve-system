import React from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";

function Index(props) {
  return (
    <DashboardLayout>
      <div className="flex flex-col">
        <div className="mx-4">
          <button className="rounded btn btn-primary mr-2">
            <Link to="/purchases/create">Add Purchase</Link>
          </button>
          <button className="rounded btn btn-primary">Export</button>
        </div>
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden mx-4 border-2">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      #ID
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Name
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Category
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
                    <td class="whitespace-nowrap px-6 py-4 font-medium">oo</td>
                    <td class="whitespace-nowrap px-6 py-4">uu</td>
                    <td class="whitespace-nowrap px-6 py-4">uu</td>
                    <td class="whitespace-nowrap px-6 py-4">uu</td>
                    <td class="whitespace-nowrap px-6 py-4">uu</td>
                    <td class="whitespace-nowrap px-6 py-4">uu</td>
                    <td>
                      <button
                        type="button"
                        class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                      >
                        Edit
                      </button>
                      <button
                        class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                        onClick={() => "d"}
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
    </DashboardLayout>
  );
}

export default Index;
