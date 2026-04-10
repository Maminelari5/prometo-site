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

Route::get('/seed-admin', function () {
    User::updateOrCreate(
        ['email' => 'admin@prometo.com'],
        [
            'name' => 'Admin PROMETO',
            'password' => Hash::make('admin123456'),
        ]
    );

    return 'admin seeded';
});
Route::get('/seed-projects', function () {
    Project::create([
        'title_fr' => 'Pergola bioclimatique',
        'title_en' => 'Bioclimatic Pergola',
        'title_ar' => 'برغولا بيوكليماتيكية',
        'description_fr' => 'Une solution élégante et moderne qui régule naturellement la lumière et la ventilation grâce à ses lames orientables.',
        'description_en' => 'An elegant and modern solution that naturally regulates light and ventilation through adjustable louvers.',
        'description_ar' => 'حل أنيق وعصري ينظم الضوء والتهوية بشكل طبيعي بفضل الشرائح القابلة للتعديل.',
        'category' => 'Pergola',
        'image' => null,
        'is_featured' => true,
        'sort_order' => 1,
    ]);

    Project::create([
        'title_fr' => 'Toiture aluminium rétractable',
        'title_en' => 'Retractable Aluminium Roof',
        'title_ar' => 'سقف ألمنيوم قابل للفتح والإغلاق',
        'description_fr' => 'Une solution innovante qui permet d’ouvrir ou de fermer votre toiture selon vos besoins.',
        'description_en' => 'An innovative solution that allows you to open or close your roof according to your needs.',
        'description_ar' => 'حل مبتكر يتيح فتح أو إغلاق السقف حسب الحاجة.',
        'category' => 'Toitures en aluminium',
        'image' => null,
        'is_featured' => false,
        'sort_order' => 2,
    ]);

    Project::create([
        'title_fr' => 'Garde-corps en verre pour escalier',
        'title_en' => 'Glass Stair Railing',
        'title_ar' => 'درابزين زجاجي للسلالم',
        'description_fr' => 'Une solution élégante et sécurisée qui apporte une touche moderne à votre escalier.',
        'description_en' => 'An elegant and secure solution that adds a modern touch to your staircase.',
        'description_ar' => 'حل أنيق وآمن يضيف لمسة عصرية للسلالم.',
        'category' => 'Garde-corps en verre',
        'image' => null,
        'is_featured' => false,
        'sort_order' => 3,
    ]);

    return 'projects seeded';
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