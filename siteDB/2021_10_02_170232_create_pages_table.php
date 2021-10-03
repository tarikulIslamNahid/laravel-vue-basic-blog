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
            $table->id();
            $table->string('title')->unique()->comment("unique");
            $table->string('slug')->unique()->comment("unique");
            $table->text('meta_desc')->nullable();
            $table->string('meta_title')->nullable();
            $table->string('meta_ Keywords')->nullable();
            $table->string('location')->comment("menu, footer");
            $table->integer('visibility')->comment("default(1) 1=> visible , 0=>hide");
            $table->integer('show_ttle')->comment("default(1) 1=> show , 0=>hide");
            $table->integer('show_ breadcrumb')->comment("default(1) 1=> show , 0=>hide");
            $table->integer('show_right_sidebar')->comment("default(1) 1=> show , 0=>hide");
            $table->longText('content');
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
