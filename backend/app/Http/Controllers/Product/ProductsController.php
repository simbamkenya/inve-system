<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\Product\UpdateProductRequest;
use Picqer\Barcode\BarcodeGeneratorHTML;

class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        // $products = Product::all();
        $products = Product::select('id', 'name')
            ->limit(1)
            ->get();

        return response()->json([
            'status' => 'success',
            'products' => $products
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductRequest $request)
    {
        //
        $request->validated();
        $product = Product::create($request->all());

        if ($request->hasFile('product_image')) {
            $file = $request->file('product_image');
            $fileName = hexdec(uniqid()) . '.' . $file->getClientOriginalExtension();

            //save on storage
            $file->storeAs('products/', $fileName, 'public');

            //save on db
            $product->update([
                'product_image' => $fileName
            ]);
        }

        return response()->json([
            'message' => 'product was created successfully',
            'status' => 'success',
            'product' => $product
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        // Generate a barcode
        $generator = new BarcodeGeneratorHTML();

        $barcode = $generator->getBarcode($product->code, $generator::TYPE_CODE_128);

        return response()->json(['status' => 'success', 'product' => $product, 'barcode' => $barcode,], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
        //
        $request->validated();
        $product->update($request->except('product_image'));

        if($request->hasFile('product_image')){
            //delete old image
            if($product->product_image){
                unlink(public_path('products/') . $product->product_image);
            }

            //prepare new image
            $file = $request->file('product_image');
            $fileName = hexdec(uniqid()).'.'.$file->getClientOriginalExtension();

            //save storage
            $file->storeAs('products/', $fileName, 'public');

            //save in db
            $product->update([
                'product_image' => $fileName
            ]);
        }

        return response()->json([
            'status' => 'success',
            'message' => 'product was updated successfully',
            'product' => $product
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
        if($product->product_image){
            unlink(public_path('storage/products') . $product->product_image);
        }
        
        $product->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'product deleted successfully!'
        ]);
    }
}
