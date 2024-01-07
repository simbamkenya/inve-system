import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";
import { useSelector, useDispatch } from "react-redux";
import { fetchUnits, deleteUnitById} from "../../store/features/UnitSlice";


function Index(props) {
  const dispatch = useDispatch();
  const units = useSelector((state) => state.units.data);
  console.log("units", units);

  useEffect(() => {
    dispatch(fetchUnits());
  }, [units]);

  return (
    <DashboardLayout>
      <div className="mx-4">
        <button class="rounded btn btn-primary mr-2">
          <Link to="/units/create">Add Unit</Link>
        </button>
        <button class="rounded btn btn-primary">Export</button>
      </div>
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div class="overflow-hidden mx-4 border-2">
            <table class="min-w-full text-left text-sm font-light">
              <thead class="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" class="px-6 py-4">
                    #ID
                  </th>
                  <th scope="col" class="px-6 py-4">
                    Name
                  </th>
                  <th scope="col" class="px-6 py-4">
                    Slug
                  </th>
                  <th scope="col" class="px-6 py-4">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {units &&
                  units.map((unit) => (
                    <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                      <td class="whitespace-nowrap px-6 py-4 font-medium">
                        {unit.id}
                      </td>
                      <td class="whitespace-nowrap px-6 py-4">{unit.name}</td>
                      <td class="whitespace-nowrap px-6 py-4">{unit.slug}</td>
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
                          onClick={() => dispatch(deleteUnitById(unit.id))}
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
    </DashboardLayout>
  );
}

export default Index;
