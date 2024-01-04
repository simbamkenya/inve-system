<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Exception;
use Illuminate\Http\Request;
use PhpOffice\PhpSpreadsheet\IOFactory;

class ProductExportController extends Controller
{
    //
    public function store(Request $request)
    {
        $request->validate([
            'file' => 'required|file|mimmes:xls,xlsx'
        ]);

        $file = $request->file('file');

        try {
            $spreadsheet = IOFactory::load($file->getRealPath());
            $sheet = $spreadsheet->getActiveSheet();
            $row_limit = $sheet->getHighestDataRow();
            $column_limit = $sheet->getHighestDataColumn();

            $row_range    = range(2, $row_limit);
           // $column_range = range('J', $column_limit);

            $startcount = 2;
            $data = array();

            foreach ($row_range as $row) {
                $data[] = [
                    'name'          => $sheet->getCell('A' . $row)->getValue(),
                    'category_id'   => $sheet->getCell('B' . $row)->getValue(),
                    'unit_id'       => $sheet->getCell('C' . $row)->getValue(),
                    'code'          => $sheet->getCell('D' . $row)->getValue(),
                    'quantity'      => $sheet->getCell('E' . $row)->getValue(),
                    'buying_price'  => $sheet->getCell('F' . $row)->getValue(),
                    'selling_price' => $sheet->getCell('G' . $row)->getValue(),
                    'product_image' => $sheet->getCell('H' . $row)->getValue(),
                ];
                $startcount++;

                Product::insert($data);
            };
        } catch (Exception $e) {
            return response()->json([
                'status' => 'failure',
                'error' => $e
            ], 500);
        }

        return response()->json([
            'message' => 'product imported',
            'status' => 'success'
        ], 200);
    }
}
