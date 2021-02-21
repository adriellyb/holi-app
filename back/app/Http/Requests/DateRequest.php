<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use App\Date;

class DateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        if($this->isMethod('POST')) {
            return [
                'day' => 'required|string',
                'month' => 'required|string',
                'year' => 'required|string',
                'country' => 'required|string'
            ];
        }

        
        if($this->isMethod('PUT')) {
            return [];
        }
    }

    public function messages()
    {
        return [
            'day.required' => 'O dia não pode ser nulo',
            'day.string' => 'O dia não pde estar neste formato',
            'month.required' => 'O mês não pde ser nula',
            'month.string' => 'O mês não pode estar neste formato',
            'year.required' => 'O ano não pode ser nulo',
            'year.string' => 'O ano não pode estar neste formato',
            'country.required' => 'O país não pode ser nulo',
            'country.string' => 'O país não pode estar neste formato'
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json($validator->errors(),422));
    }
}
