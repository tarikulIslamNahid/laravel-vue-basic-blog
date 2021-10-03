<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->integer('user_type')->comment("default(3) // 1 -> super Admin , 2 -> staffs , 3 -> users");
            $table->string('name')->comment("225");
            $table->string('username')->comment("225 unique()");
            $table->string('email')->comment("unique");
            $table->integer('email_verify')->comment("default(0)");
            $table->string('token')->nullable();
            $table->string('password')->comment("225");
            $table->string('phone')->nullable()->comment("20, unique");
            $table->text('address')->nullable();
            $table->string('city')->nullable()->comment("225");
            $table->string('country')->nullable()->comment("225");
            $table->string('zip')->nullable()->comment("225");
            $table->text('avatar')->nullable();
            $table->text('social')->nullable();
            $table->boolean('status')->comment("default(1) // 1 => active , 0 => unactive");
            $table->boolean('ban')->comment("default(0) // 0 => unban, 1 => banned");
            $table->boolean('added_by')->comment("defult(0)");
            $table->string('remember_token')->nullable()->comment("191");
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
