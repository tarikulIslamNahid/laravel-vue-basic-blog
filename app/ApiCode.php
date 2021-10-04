<?php

namespace App;

class ApiCode
{
    public const ERROR_USER_NOT_FOUND = 1401;
    public const ERROR_NOT_FOUND = 1404;
    public const ERROR_INVALID_ACTION = 1403;
    public const ERROR_ACCESS_DENIED = 1412;
    public const ERROR_REGISTRED = 1405;

    public const ERROR_EMAIL_PHONE_NO_IC_EXIST = 1001;
    public const ERROR_IC_PLATE_NO_MATCH = 1002;
    public const ERROR_GENERAL = 900;

    public const ERROR_APP_TOKEN_NOT_MATCH = 1801;

    public const ERROR_FORM_DATA_NOT_VALID = 1820;
    public const ERROR_FORM_VALIDATION_FAILED = 1821;
    public const ERROR_OTP_EXPIRED = 1822;
    public const ERROR_INVALID_OTP = 1823;

    public const ERROR_INVALID_CURRENT_PASSWORD = 1824;
    public const ERROR_TOO_MANY_BOOKING = 1825;
    public const ERROR_INVALID_BOOKING_DATE = 1826;
    public const ERROR_BOOKING_SLOT_FULL = 1827;
    public const ERROR_BOOKING_IESYNC_ERROR = 1828;

    public const SUCCESS_VALID_OTP = 2823;
    public const SUCCESS_RESET_PASSWORD = 2824;
    public const SUCCESS_CHANGED_PASSWORD = 2825;
    public const SUCCESS_ADD_BOOKING = 2825;
    public const SUCCESS_CANCEL_BOOKING = 2826;
}