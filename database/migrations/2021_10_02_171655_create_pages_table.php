<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pages', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('title')->unique();
            $table->string('slug')->unique();
            $table->text('meta_desc')->nullable();
            $table->string('meta_title')->nullable();
            $table->string('meta_Keywords')->nullable();
            $table->string('location')->comment("menu, footer");
            $table->integer('visibility')->default(1); // 1=> visible , 0=>hide
            $table->integer('show_ttle')->default(1); // 1=> show , 0=>hide
            $table->integer('show_breadcrumb')->default(1); // 1=> show , 0=>hide
            $table->integer('show_right_sidebar')->default(1); // 1=> show , 0=>hide
            $table->longText('content');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pages');
    }
}
