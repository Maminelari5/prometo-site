<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ProjectController;
use App\Http\Controllers\Api\PublicProjectController;
use App\Http\Controllers\Api\ContactController;
use Illuminate\Support\Facades\Artisan;
use App\Models\User;
use App\Models\Project;
use Illuminate\Support\Facades\Hash;

Route::get('/storage-link', function () {
    Artisan::call('storage:link');
    return 'storage linked';
});

Route::post('/login', [AuthController::class, 'login']);

Route::get('/projects', [PublicProjectController::class, 'index']);
Route::get('/projects/{id}', [PublicProjectController::class, 'show']);
Route::post('/contact', [ContactController::class, 'send']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', [AuthController::class, 'user']);

    Route::get('/admin/projects', [ProjectController::class, 'index']);
    Route::get('/admin/projects/{id}', [ProjectController::class, 'show']);
    Route::post('/admin/projects', [ProjectController::class, 'store']);
    Route::post('/admin/projects/{id}', [ProjectController::class, 'update']);
    Route::delete('/admin/projects/{id}', [ProjectController::class, 'destroy']);
});