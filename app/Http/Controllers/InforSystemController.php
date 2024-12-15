<?php

namespace App\Http\Controllers;

use App\Models\InforSystem;
use Illuminate\Http\Request;

class InforSystemController extends Controller
{
    public function getByHostName(Request $request, $hostname){
        $responseData = InforSystem::where('host', $hostname)->get();
        if($responseData->isEmpty()){
            return response()->json(['message' => 'Информация отсутсвует']);
        }
        return response()->json($responseData);
    }
}
