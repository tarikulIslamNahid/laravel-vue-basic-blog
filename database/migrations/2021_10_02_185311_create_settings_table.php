<?php

use App\settings;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSettingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('settings', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->longText('type')->nullable();
            $table->longText('value')->nullable();
            $table->timestamps();
        });



        $data =  array(
            [
                'type' => 'site_title',
                'value' => '',
            ],
            [
                'type' => 'site_description',
                'value' => '',
            ],
            [
                'type' => 'keywords',
                'value' => '',
            ],
            [
                'type' => 'facebook_url',
                'value' => '',
            ],
            [
                'type' => 'twitter_url',
                'value' => '',
            ],
            [
                'type' => 'instagram_url',
                'value' => '',
            ],
            [
                'type' => 'linkedin_url',
                'value' => '',
            ],
            [
                'type' => 'contact_text',
                'value' => '',
            ],
            [
                'type' => 'contact_address',
                'value' => '',
            ],
            [
                'type' => 'contact_email',
                'value' => '',
            ],
            [
                'type' => 'contact_phone',
                'value' => '',
            ],
            [
                'type' => 'copyright',
                'value' => '',
            ],

        );

        foreach ($data as $datum) {
            $settings = new settings();
            $settings->type = $datum['type'];
            $settings->value = $datum['value'];
            $settings->save();
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('settings');
    }
}
