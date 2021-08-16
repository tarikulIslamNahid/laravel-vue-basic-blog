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
            $table->Increments('id');
            $table->integer('user_type')->default(3);  // 1 -> super Admin , 2 -> staffs , 3 -> users
            $table->string('name');
            $table->string('username', 100)->unique();
            $table->string('email', 100)->unique();
            $table->string('email_verify')->default(0);
            $table->string('password');
            $table->string('phone', 20)->nullable()->unique();
            $table->string('address')->nullable();
            $table->string('city')->nullable();
            $table->string('country')->nullable();
            $table->string('zip')->nullable();
            $table->string('avatar')->nullable();
            $table->string('social')->nullable();
            $table->string('provider')->nullable();
            $table->string('provider_id')->nullable();
            $table->boolean('status')->default(1);
            $table->boolean('added_by')->default(0);
            $table->rememberToken();
            $table->timestamps();
        });


        \App\User::insert([
            'name' => 'Super Admin',
            'username' => 'admin',
            'user_type' => '1',
            'email' => 'admin@admin.com',
            'password' => bcrypt('123456'),
            'email_verify' => 1,
        ]);
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