<?php

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
        Schema::create('general_settings[type,_value]]', function (Blueprint $table) {
            $table->id();
            $table->longText('type')->nullable();
            $table->longText('value')->nullable();
            $table->string('site_logo')->nullable();
            $table->string('mobile_logo')->nullable();
            $table->string('favicon_path')->nullable();
            $table->string('facebook_app_id')->nullable();
            $table->string('facebook_app_secret')->nullable();
            $table->string('google_client_id')->nullable()->comment("500");
            $table->string('google_client_secret')->nullable()->comment("500");
            $table->text('google_analytics')->nullable();
            $table->string('mail_library')->nullable();
            $table->string('mail_protocol')->nullable();
            $table->string('mail_host')->nullable();
            $table->string('mail_port')->nullable();
            $table->string('mail_username')->nullable();
            $table->string('mail_password')->nullable();
            $table->string('mail_title')->nullable();
            $table->tinyInteger('send_email_contact_messages')->nullable()->comment("default(0)");
            $table->string('mail_options_account')->nullable();
            $table->integer('registration_system')->comment("default(1) 1=> active 0=> deactive");
            $table->tinyInteger('comment_system')->comment("default(1) 1=> active 0=> deactive");
            $table->tinyInteger('comment_approval_system')->comment("default(1) 1=> active 0=> deactive");
            $table->tinyInteger('approve_posts_before_publishing')->comment("default(1) 1=> active 0=> deactive");
            $table->string('maintenance_mode_title')->comment("500 default(Coming Soon!)");
            $table->string('maintenance_mode_description')->nullable()->comment("5000");
            $table->tinyInteger('maintenance_mode_status')->comment("default(0) 1=> active 0=> deactive");
            $table->longText('custom_css_codes')->nullable();
            $table->longText('custom_javascript_codes')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('general_settings[type,_value]]');
    }
}
