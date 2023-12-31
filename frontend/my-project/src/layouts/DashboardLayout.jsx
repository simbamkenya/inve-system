import React, { useState } from "react";
import { FaBoxOpen } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { BiPurchaseTag } from "react-icons/bi";
import { FaFileInvoice } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import Index from "../pages/Products/Index";
import { Link, Outlet } from "react-router-dom";

function DashboardLayout(props) {
  const [isSidebarOpen, setSidebaOpen] = useState(false);
  return (
    <section className="min-h-screen bg-gray-50">
      <nav
        className={
          "fixed top-0 left-0 z-20 h-full pb-10 overflow-x-hidden overflow-y-auto transition origin-left transform bg-gray-900 w-60 md:translate-x-0" +
          " -translate-x-full" +
          (isSidebarOpen ? " translate-x-full bg-red-400" : "")
        }
      >
        <a href="/" class="flex items-center px-4 py-5">
          <img
            src="https://placehold.co/400"
            alt="Kutty Logo"
            class="w-20 rounded-full"
          />
        </a>
        <nav
          class="text-sm font-medium text-gray-500"
          aria-label="Main Navigation"
        >
          <Link
            class="flex items-center px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200"
            to="/dashboard"
          >
            <svg
              class="shrink-0 w-5 h-5 mr-2 text-gray-400 transition group-hover:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span>Dashboard</span>
          </Link>
          <Link
            class="flex items-center px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200"
            to="/products"
          >
            <svg
              class="shrink-0 w-5 h-5 mr-2 text-gray-400 transition group-hover:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M5 3a1 1 0 000 2c5.523 0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z" />
              <path d="M4 9a1 1 0 011-1 7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5 1 1 0 01-1-1zM3 15a2 2 0 114 0 2 2 0 01-4 0z" />
            </svg>
            <span>Products</span>
          </Link>
          <Link
            class="flex items-center px-4 py-3 text-gray-200 transition bg-gray-800 cursor-pointer group hover:bg-gray-800 hover:text-gray-200"
            to="/orders"
          >
            <svg
              class="shrink-0 w-5 h-5 mr-2 text-gray-300 transition group-hover:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />{" "}
            </svg>
            <span>Orders</span>
          </Link>
          <Link
            class="flex items-center px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200"
            to="/customers"
          >
            <svg
              class="shrink-0 w-5 h-5 mr-2 text-gray-400 transition group-hover:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path
                fill-rule="evenodd"
                d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
            <span>Customers</span>
          </Link>
          <Link
            class="flex items-center px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200"
            to="/purchases"
          >
            <svg
              class="shrink-0 w-5 h-5 mr-2 text-gray-400 transition group-hover:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path
                fill-rule="evenodd"
                d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
            <span>Purchases</span>
          </Link>
          <Link
            class="flex items-center px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200"
            to="/suppliers"
          >
            <svg
              class="shrink-0 w-5 h-5 mr-2 text-gray-400 transition group-hover:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path
                fill-rule="evenodd"
                d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
            <span>Suppliers</span>
          </Link>
          <Link
            class="flex items-center px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200"
            to="/units"
          >
            <svg
              class="shrink-0 w-5 h-5 mr-2 text-gray-400 transition group-hover:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path
                fill-rule="evenodd"
                d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
            <span>Units</span>
          </Link>
          <div x-data="collapse()">
            <div
              class="flex items-center justify-between px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200"
              role="button"
              x-spread="trigger"
            >
              <div class="flex items-center">
                <svg
                  class="shrink-0 w-5 h-5 mr-2 text-gray-400 transition group-hover:text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>Integrations</span>
              </div>
              {/* rotating test :: */}
              <svg
                // class="{ 'rotate-90': open }"
                class="shrink-0 w-4 h-4 ml-2 transition transform"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                {" "}
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="mb-4" x-spread="collapse" x-cloak>
              <a
                class="flex items-center py-2 pl-12 pr-4 transition cursor-pointer hover:bg-gray-800 hover:text-gray-200"
                href="#"
              >
                Shopify
              </a>{" "}
              <a
                class="flex items-center py-2 pl-12 pr-4 transition cursor-pointer hover:bg-gray-800 hover:text-gray-200"
                href="#"
              >
                Slack
              </a>
              <a
                class="flex items-center py-2 pl-12 pr-4 transition cursor-pointer hover:bg-gray-800 hover:text-gray-200"
                href="#"
              >
                Zapier
              </a>{" "}
            </div>{" "}
          </div>{" "}
          <Link
            class="flex items-center px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200"
            to="/categories"
          >
            <svg
              class="shrink-0 w-5 h-5 mr-2 text-gray-400 transition group-hover:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                clip-rule="evenodd"
              />
              <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
            </svg>
            <span>Categories</span>
          </Link>
          <a
            class="flex items-center px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200"
            href="#"
          >
            <svg
              class="shrink-0 w-5 h-5 mr-2 text-gray-400 transition group-hover:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clip-rule="evenodd"
              />
            </svg>
            <span>Settings</span>
          </a>
        </nav>
      </nav>

      <div class="ml-0 transition md:ml-60">
        <header class="flex items-center justify-between w-full px-4 h-14">
          <button
            class="block btn btn-light-secondary md:hidden"
            onClick={() => setSidebaOpen(!isSidebarOpen)}
          >
            <span class="sr-only">Menu</span>
            <svg
              class="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              />{" "}
            </svg>
          </button>
          <div class="hidden -ml-3 form-icon md:block w-96">
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
            <input
              class="bg-transparent border-0 form-input"
              placeholder="Search for articles..."
            />
          </div>

          <div class="flex items-center">
            <a href="#" class="flex text-gray-500">
              <svg
                class="shrink-0 w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
            </a>
            <a href="#" class="ml-4 avatar avatar-sm">
              <img src="/placeholder.jpg" alt="Photo of Praveen Juge" />
            </a>
          </div>
        </header>

        <div class="p-4">
          {/* <!-- Add content here, remove div below --> */}
          <div class="-mt-2 border-2  rounded h-96">
            <div class="grid grid-cols-1 gap-4 px-4 mt-8 sm:grid-cols-4 sm:px-8">
              <div class="flex items-center bg-white border rounded-sm overflow-hidden shadow">
                <div class="p-4 bg-green-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-12 w-12 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    ></path>
                  </svg>
                </div>
                <div class="px-4 text-gray-700">
                  <h3 class="text-sm tracking-wider">Total Products</h3>
                  <p class="text-3xl">12,768</p>
                </div>
              </div>
              <div class="flex items-center bg-white border rounded-sm overflow-hidden shadow">
                <div class="p-4 bg-blue-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-12 w-12 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                    ></path>
                  </svg>
                </div>
                <div class="px-4 text-gray-700">
                  <h3 class="text-sm tracking-wider">Total Sales</h3>
                  <p class="text-3xl">39,265</p>
                </div>
              </div>
              <div class="flex items-center bg-white border rounded-sm overflow-hidden shadow">
                <div class="p-4 bg-indigo-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-12 w-12 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    ></path>
                  </svg>
                </div>
                <div class="px-4 text-gray-700">
                  <h3 class="text-sm tracking-wider">Total Comment</h3>
                  <p class="text-3xl">142,334</p>
                </div>
              </div>
              <div class="flex items-center bg-white border rounded-sm overflow-hidden shadow">
                <div class="p-4 bg-red-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-12 w-12 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                    ></path>
                  </svg>
                </div>
                <div class="px-4 text-gray-700">
                  <h3 class="text-sm tracking-wider">Server Load</h3>
                  <p class="text-3xl">34.12%</p>
                </div>
              </div>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
      {/* <!-- Sidebar Backdrop --> */}
      <div
        class={
          "fixed inset-0 z-10 w-screen h-screen bg-black bg-opacity-25 md:hidden "
        }
        //    x-show.transition="sideBar" x-cloak
        onClick={() => setSidebaOpen(false)}
      ></div>
    </section>
  );
}

export default DashboardLayout;
