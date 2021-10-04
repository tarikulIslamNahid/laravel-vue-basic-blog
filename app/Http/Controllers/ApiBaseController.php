<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use MarcinOrlowski\ResponseBuilder\ResponseBuilder;
use Symfony\Component\HttpFoundation\Response;
use App\ApiCode;

class ApiBaseController extends Controller
{
    public function success($data, $message = "", $apiCode = 0, $locale = "en")
    {
        if (empty($data)) {
            $data = [];
        }
        if (empty($apiCode)) {
            $apiCode = 0;
        }
        if (empty($message)) {
            $message = '';
        }
        // return ResponseBuilder::success($data,$apiCode,null,200,null);
        return [
            'success' => true,
            'code' => $apiCode,
            'locale' => $locale,
            'message' => $message,
            'data' => $data
        ];
    }

    public function successMessage($message = "", $apiCode = 0)
    {
        return $this->success(null, $message, $apiCode);
    }

    public function failed($data, $message = "", $apiCode = 0)
    {
        if (empty($data)) {
            $data = [];
        }
        if (empty($apiCode)) {
            $apiCode = 0;
        }
        if (empty($message)) {
            $message = '';
        }

        return ResponseBuilder::asError($apiCode)
            ->withData($data)
            ->withMessage($message)
            ->withHttpCode(400)
            ->build();
    }

    public function failedMessage($message, $apiCode = 0)
    {
        return $this->failed(null, $message, $apiCode);
    }

    public function UnAuthorized()
    {
        return $this->UnAuthorizedMessage('Unauthorized');
    }

    public function UnAuthorizedMessage($message)
    {
        return ResponseBuilder::asError(Response::HTTP_UNAUTHORIZED)
            ->withHttpCode(Response::HTTP_UNAUTHORIZED)
            ->withMessage($message)
            ->build();
    }


    function convertValidatorErrorsToJson($errors)
    {
        $message = [];
        foreach ($errors->all() as $error) {
            $message[] = ['message' => $error];
        }

        return ['errors' => $message];
    }

    public function validationFailedResponse($errors)
    {
        $data = $this->convertValidatorErrorsToJson($errors);

        return $this->failed($data, $data['errors'][0]['message'], ApiCode::ERROR_FORM_VALIDATION_FAILED);
    }
}
