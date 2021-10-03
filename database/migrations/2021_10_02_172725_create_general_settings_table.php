<?php

use App\general_settings;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGeneralSettingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('general_settings', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->longText('type')->nullable();
            $table->longText('value')->nullable();
            $table->timestamps();
        });

        $data =  array(
            [
                'type' => 'site_logo',
                'value' => '',
            ],
            [
                'type' => 'mobile_logo',
                'value' => '',
            ],
            [
                'type' => 'favicon_path',
                'value' => '',
            ],
            [
                'type' => 'facebook_app_id',
                'value' => '',
            ],
            [
                'type' => 'facebook_app_secret',
                'value' => '',
            ],
            [
                'type' => 'google_client_id',
                'value' => '',
            ],
            [
                'type' => 'google_client_secret',
                'value' => '',
            ],
            [
                'type' => 'google_analytics',
                'value' => '',
            ],
            [
                'type' => 'mail_library',
                'value' => '',
            ],
            [
                'type' => 'mail_protocol',
                'value' => '',
            ],
            [
                'type' => 'mail_host',
                'value' => '',
            ],
            [
                'type' => 'mail_port',
                'value' => '',
            ],
            [
                'type' => 'mail_username',
                'value' => '',
            ],
            [
                'type' => 'mail_password',
                'value' => '',
            ],
            [
                'type' => 'mail_title',
                'value' => '',
            ],
            [
                'type' => 'send_email_contact_messages',
                'value' => '0',
            ],
            [
                'type' => 'mail_options_account',
                'value' => '',
            ],
            [
                'type' => 'registration_system',
                'value' => '1',
            ],
            [
                'type' => 'comment_system',
                'value' => '1',
            ],
            [
                'type' => 'comment_approval_system',
                'value' => '1',
            ],
            [
                'type' => 'approve_posts_before_publishing',
                'value' => '1',
            ],
            [
                'type' => 'maintenance_mode_title',
                'value' => 'Coming Soon!',
            ],
            [
                'type' => 'maintenance_mode_description',
                'value' => '',
            ],
            [
                'type' => 'maintenance_mode_status',
                'value' => '0',
            ],
            [
                'type' => 'custom_css_codes',
                'value' => '',
            ],
            [
                'type' => 'custom_javascript_codes',
                'value' => '',
            ],

        );

        foreach ($data as $datum) {
            $general_settings = new general_settings();
            $general_settings->type = $datum['type'];
            $general_settings->value = $datum['value'];
            $general_settings->save();
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('general_settings');
    }
}
