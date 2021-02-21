<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use App\Http\Requests\DateRequest;
use App\Http\Resources\DateResource;
use App\Date;

class DateController extends Controller
{
    /** CREATE */
    public function create(DateRequest $request) {

        $date = new Date;
        $date->createDate($request);

        //$holi_api = $this->findHoliday($date);

        return response()->json(['date' => new DateResource($date)], 200);
      
    }

    /** INDEX */
    public function index(){
        $dates = Date::all();
        return response()->json(['date' => DateResource::collection(Date::all())],200);
    }

    /** SHOW */
    public function show($id) {
        $date = Date::find($id);

        if($date) {
            return response()->json(['date' => new DateResource($date)], 200);
        }
        else{
            return response()->json(['error' => 'Data não encontrada na base de dados.'], 404);
        }
        
    }

    /** UPDATE */
    public function update(DateRequest $request, $id){

        $date = Date::find($id);

        if($date){
            $date->updateDate($request, $id);
        }
        else{
            return response()->json(['error' => 'Data não existe na base de dados.', 404]);
        }
        
        return response()->json(['date' => new DateResource($date)],200);
    }

    /** DELETE */
    public function destroy($id){
        $date = Date::find($id);
        $date->delete();
        
        return response()->json(['A data foi deletada!'],200);
    }

    public function findHoliday($id) {

        $date = Date::find($id);

        $client = new Client([

            'base_uri' => env('API_BASE_URL'),
            'timeout' => 2.0,
        ]);
    
        $response = $client->request('GET', '/api/v2/holidays', [
            'query' => [
                'api_key' => env('API_KEY'),
                'country' => $date->country,
                'year' => $date->year,
                'month' => $date->month,
                'day' => $date->day
            ]
        ]);
    
        $array = json_decode($response->getBody()->getContents(), true);

        /*if ($array['response']['holidays'] != []) {
            $array = $array['response']['holidays'][0];
        }
        else {
            return response()->json(['message' => 'Não há feriados nesta data!'], 200);
        }

        return response()->json(['holiday' => [
            'name' => $array['name'],
            'description' => $array['description']
        ]], 200);*/

        return $array['response']['holidays'];
            
    }
}
