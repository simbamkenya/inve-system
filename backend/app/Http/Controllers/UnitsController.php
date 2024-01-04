<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Unit;
use App\Http\Requests\StoreUnitRequest;
use App\Http\Requests\UpdateUnitRequest;

class UnitsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        // $units = Unit::all();

        $units = Unit::query()
            ->select(['id', 'name', 'slug', 'short_code'])
            ->get();

        return response()->json([
            'status' => 'success',
            'units' => $units
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUnitRequest $request)
    {
        //
        $request->validated();
        $unit = $request->all();

        Unit::create($unit);

        return response()->json([
            'message' => 'unit created successfully!',
            'status' => 'success',
            'unit' => $unit
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(Unit $unit)
    {
        //
        $unit->loadMissing('products')->get();

        return response()->json([
            'status' => 'success',
            'unit' => $unit
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUnitRequest $request, Unit $unit)
    {
        //
        $unit->update($request->all());

        return response()->json([
            'status' => 'success',
            'message' => 'unit was updated successfully',
            'unit' => $unit
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Unit $unit)
    {
        //
        $unit->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Unit deleted successfully!'
        ], 200);
    }
}
