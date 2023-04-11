<?php

namespace App\Http\Livewire\Puzzle;

use App\Models\Puzzle;
use Livewire\Component;

class QuickSolve extends Component
{
    public function getImageAttribute($value)
    {
        return asset(str_replace('puzzle/', '', $value));
    }
    public function render()
    {
        $randomId = rand(1, 25000);
        $puzzle = Puzzle::find($randomId);
        return view('livewire.puzzle.quick-solve')->with('puzzle', $puzzle);
    }
}