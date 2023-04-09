<?php

namespace App\Filament\Resources\PuzzleResource\Pages;

use App\Filament\Resources\PuzzleResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\ListRecords;

class ListPuzzles extends ListRecords
{
    protected static string $resource = PuzzleResource::class;

    protected function getActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
