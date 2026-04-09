<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Project;

class PublicProjectController extends Controller
{
    public function index()
    {
        return response()->json(
            Project::orderBy('sort_order')->latest()->get()
        );
    }

    public function show($id)
    {
        $project = Project::findOrFail($id);
        return response()->json($project);
    }
}