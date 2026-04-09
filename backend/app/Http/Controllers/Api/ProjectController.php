<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProjectController extends Controller
{
    public function index()
    {
        return response()->json(
            Project::orderBy('sort_order')->latest()->get()
        );
    }

    public function show($id)
    {
        return response()->json(Project::findOrFail($id));
    }

    public function store(Request $request)
    {
        $request->validate([
            'title_fr' => 'required|string|max:255',
            'title_en' => 'required|string|max:255',
            'title_ar' => 'required|string|max:255',
            'description_fr' => 'nullable|string',
            'description_en' => 'nullable|string',
            'description_ar' => 'nullable|string',
            'category' => 'nullable|string|max:255',
            'image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
            'is_featured' => 'nullable|boolean',
            'sort_order' => 'nullable|integer',
        ]);

        $data = $request->except('image');

        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->store('projects', 'public');
        }

        $data['is_featured'] = $request->boolean('is_featured');
        $data['sort_order'] = $request->sort_order ?? 0;

        $project = Project::create($data);

        return response()->json([
            'message' => 'Projet ajouté avec succès',
            'project' => $project
        ], 201);
    }

    public function update(Request $request, $id)
    {
        $project = Project::findOrFail($id);

        $request->validate([
            'title_fr' => 'required|string|max:255',
            'title_en' => 'required|string|max:255',
            'title_ar' => 'required|string|max:255',
            'description_fr' => 'nullable|string',
            'description_en' => 'nullable|string',
            'description_ar' => 'nullable|string',
            'category' => 'nullable|string|max:255',
            'image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
            'is_featured' => 'nullable|boolean',
            'sort_order' => 'nullable|integer',
        ]);

        $data = $request->except('image');

        if ($request->hasFile('image')) {
            if ($project->image && Storage::disk('public')->exists($project->image)) {
                Storage::disk('public')->delete($project->image);
            }

            $data['image'] = $request->file('image')->store('projects', 'public');
        }

        $data['is_featured'] = $request->boolean('is_featured');
        $data['sort_order'] = $request->sort_order ?? 0;

        $project->update($data);

        return response()->json([
            'message' => 'Projet modifié avec succès',
            'project' => $project
        ]);
    }

    public function destroy($id)
    {
        $project = Project::findOrFail($id);

        if ($project->image && Storage::disk('public')->exists($project->image)) {
            Storage::disk('public')->delete($project->image);
        }

        $project->delete();

        return response()->json([
            'message' => 'Projet supprimé avec succès'
        ]);
    }
}