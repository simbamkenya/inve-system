<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreSupplierRequest as RequestsStoreSupplierRequest;
use Illuminate\Http\Request;
use App\Models\Supplier;
use App\Http\Requests\Supplier\StoreSupplierRequest;
use App\Http\Requests\Supplier\UpdateSupplierRequest;


class SuppliersController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $suppliers = Supplier::all();

        return response()->json([
            'status' => 'success',
            'suppliers' => $suppliers
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(RequestsStoreSupplierRequest $request)
    {
        //
        $request->validated();

        $supplier = Supplier::create($request->all());

        if ($request->hasFile('photo')) {
            $file = $request->file('photo');
            $filename = hexdec(uniqid() . '.' . $file->getClientOriginalExtension());

            $file->storeAs('suppliers/', $filename, 'public');

            $supplier->update([
                'photo' => $filename
            ]);
        }

        return response()->json([
            'message' => 'supplier created successfully',
            'status' => 'success',
            'supplier' => $supplier
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(Supplier $supplier)
    {
        //
        $supplier->loadMissing('purchases')->get();

        return response()->json([
            'status' => 'success',
            'supplier' => $supplier
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSupplierRequest $request, Supplier $supplier)
    {
        //
        $supplier->update($request->except('photo'));

        if ($request->hasFile('photo')) {
            //delete the old photo
            if ($supplier->photo) {
                unlink(public_path('storage/suppliers/') . $supplier->photo);
            }

            //handle the new photo 
            $file = $request->file('photo');
            $fileName = hexdec(uniqid()) . '.' . $file->getClientOriginalExtension();

            //save in storage
            $file->storeAs('suppliers/', $fileName, 'public');

            //save in db
            $supplier->update([
                'photo' => $fileName
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Supplier $supplier)
    {
        //delete photo
        if ($supplier->photo) {
          unlink(public_path('storage/suppliers/') . $supplier->photo);
        }

        $supplier->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Supplier deleted successfully !'
        ], 200);
    }
}
