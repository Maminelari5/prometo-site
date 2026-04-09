<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = [
        'title_fr',
        'title_en',
        'title_ar',
        'description_fr',
        'description_en',
        'description_ar',
        'category',
        'image',
        'is_featured',
        'sort_order',
    ];
}