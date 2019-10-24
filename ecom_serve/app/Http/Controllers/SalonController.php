<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Salon;
class SalonController extends Controller
{
    public function index()
    {

        //
        //if($clientes.usuario=="alum"){
        //}
        $salon = Salon::all(); 
        //foreach($clientes as $cliente){
        //    echo $cliente->nombre."</br>";        
        //}
        // return response()->json(['success' => true,
        //    'data' => $clientes,
        //    'message' => 'Operacion Correcta'], 200);
        return response()->json($salon);
    }
}
