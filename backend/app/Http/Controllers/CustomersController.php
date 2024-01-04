<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Customer;
use App\Http\Requests\StoreCustomerRequest;
use App\Http\Requests\Customer\UpdateCustomerRequest;

class CustomersController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $customers = Customer::all();

        return response()->json([
            'customers' => $customers,
            'status' => 'success',
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCustomerRequest $request)
    {
        //validation
        $request->validated();

        $customer = Customer::create($request->all());

        //storing image
        if ($request->hasFile('photo')) {
            $file = $request->file('photo');
            $filename = hexdec(uniqid()) . '.' . $file->getClientOriginalExtenstion();

            $file->storeAs('customers/', $filename, 'public');

            $customer->update([
                'photo' => $filename
            ]);
        }

        return response()->json([
            'message' => "customer was created successfully",
            'status' => "success"
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(Customer $customer)
    {
        //
        return response()->json([
            'customer' => $customer
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCustomerRequest $request, Customer $customer)
    {
        //
        $request->validate();

        $customer->update($request->except('photo'));

        if ($request->hasFile('photo')) {
            //deleting the old photo
            if ($customer->photo) {
                unlink(public_path('storage/customers/') . $customer->photo);
            }

            //prepare the new photo
            $file = $request->file('photo');
            $fileName = hexdec(uniqid()) . '.' . $file->getClientOriginalExtension();

            //save new photo to storage
            $file->storeAs('customers/', $fileName, 'public');

            //save new photo to db
            $customer->update([
                'photo' => $fileName
            ]);
        }

        return response()->json([
            'status' => "success",
            'message' => "customer was updated successfully",
            'customer' => $customer,
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Customer $customer)
    {
        //
        if ($customer->photo) {
            unlink(public_path('storage/customers/') . $customer->photo);
        }
        $customer->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Customer deleted successfully!'
        ]);
    }
}
