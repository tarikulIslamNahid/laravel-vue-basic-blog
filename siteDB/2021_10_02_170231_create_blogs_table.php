<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBlogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('blogs', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            $table->integer('category_id');
            $table->integer('subcategory_id');
            $table->integer('featured')->comment("default(0); // 1= yes & 0= no");
            $table->string('title');
            $table->string('slug');
            $table->string('photo');
            $table->string('tags');
            $table->longText('disc');
            $table->string('added_by');
            $table->string('approved')->comment("default(0) 0 => unapproved 1 => approved By Admin");
            $table->integer('status')->comment("default(1); // 1= active & 2= deactive");
            $table->string('meta_title')->nullable();
            $table->string('meta_desc')->nullable();
            $table->string('meta_img')->nullable();
            $table->string('meta_keyword')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('blogs');
    }
}
