<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products_carts', function (Blueprint $table) {
            $table->id();

            $table->string('email', 50);
            $table->unsignedBigInteger('product_id');
            $table->string('color', 200);
            $table->string('size', 200);
            $table->string('qty', 200);

            $table->foreigne('product_id')->references('id')->on('products')->restrictOnDelete()->cascadeOnUpdate();
            $table->foreigne('email')->references('email')->on('profiles')->restrictOnDelete()->cascadeOnUpdate();

            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent()->useCurrentOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products_carts');
    }
};
