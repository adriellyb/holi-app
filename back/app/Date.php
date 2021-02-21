<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class Date extends Model
{
    public function createDate(Request $request) {

        $this->day = $request->day;
        $this->month = $request->month;
        $this->year = $request->year;
        $this->country = $request->country;
        $this->save();
    }

    public function updateDate(Request $request, $id) {

        if ($request->day) {
            $this->day = $request->day;
        }

        if ($request->month) {
            $this->month = $request->month;
        }

        if ($request->year) {
            $this->year = $request->year;
        }

        if ($request->country) {
            $this->country = $request->country;
        }
        $this->save();
    }

}
