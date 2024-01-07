import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  fetchProducts,
  deleteProductById,
} from "../../store/features/productSlice";

function Index(props) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);
  console.log("products", products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [products]);

  return (
    <DashboardLayout>
      <div className="flex flex-col">
        <div className="mx-4">
          <button className="rounded btn btn-primary mr-2">
            <Link to="/products/create">Add Product</Link>
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
                  {products &&
                    products.map((product) => (
                      <tr
                        key={product.id}
                        class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                      >
                        <td class="whitespace-nowrap px-6 py-4 font-medium">
                          {product.id}
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                          {product.name}
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                          {product.category.name}
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                          {product.buying_price}
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                          {product.selling_price}
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                          {product.quantity}
                        </td>
                        <td>
                          <button
                            type="button"
                            class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                          >
                            Edit
                          </button>
                          <button
                            class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => dispatch(deleteProductById(product.id))}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>

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
