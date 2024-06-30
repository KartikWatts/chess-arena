<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Puzzle extends Model
{
    use HasFactory;

    protected $table = 'puzzles';

    protected $fillable = [
        'PuzzleId',
        'FEN',
        'Moves',
        'Rating',
        'RatingDeviation',
        'Popularity',
        'NbPlays',
        'Themes',
        'GameUrl',
        'OpeningTags',
        'Column11'
    ];

    protected $casts = [
        'Rating' => 'integer',
        'RatingDeviation' => 'integer',
        'Popularity' => 'integer',
        'NbPlays' => 'integer'
    ];

}