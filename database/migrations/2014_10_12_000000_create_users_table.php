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
            $table->string('name', 225);
            $table->string('username', 225)->unique();
            $table->string('email', 100)->unique();
            $table->string('email_verify')->default(0);
            $table->string('token')->nullable();
            $table->string('password');
            $table->string('phone', 20)->nullable()->unique();
            $table->text('address')->nullable();
            $table->string('city', 255)->nullable();
            $table->string('country')->nullable();
            $table->string('zip')->nullable();
            $table->text('avatar')->nullable();
            $table->text('social')->nullable(); // all social link and title added by json formate
            $table->boolean('status')->default(1); // 1 => active , 0 => unactive
            $table->boolean('ban')->default(0); // 0 => unban, 1 => banned"
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
