<?php

namespace App\Filament\Resources\PuzzleResource\Pages;

use App\Filament\Resources\PuzzleResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreatePuzzle extends CreateRecord
{
    protected static string $resource = PuzzleResource::class;

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }

}