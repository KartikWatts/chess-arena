<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PuzzleResource\Pages;
use App\Filament\Resources\PuzzleResource\RelationManagers;
use App\Models\Puzzle;
use Filament\Forms;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class PuzzleResource extends Resource
{
    protected static ?string $model = Puzzle::class;

    protected static ?string $navigationIcon = 'heroicon-o-collection';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('PuzzleId')
                    ->maxLength(50),
                Forms\Components\Textarea::make('FEN')
                    ->maxLength(65535),
                Forms\Components\Textarea::make('Moves')
                    ->maxLength(65535),
                Forms\Components\TextInput::make('Rating'),
                Forms\Components\TextInput::make('RatingDeviation'),
                Forms\Components\TextInput::make('Popularity'),
                Forms\Components\TextInput::make('NbPlays'),
                Forms\Components\TextInput::make('Themes')
                    ->maxLength(255),
                Forms\Components\TextInput::make('GameUrl')
                    ->maxLength(255),
                Forms\Components\TextInput::make('OpeningTags')
                    ->maxLength(255),
                Forms\Components\TextInput::make('Column11')
                    ->maxLength(50),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('PuzzleId'),
                Tables\Columns\TextColumn::make('FEN'),
                Tables\Columns\TextColumn::make('Moves'),
                Tables\Columns\TextColumn::make('Rating'),
                Tables\Columns\TextColumn::make('RatingDeviation'),
                Tables\Columns\TextColumn::make('Popularity'),
                Tables\Columns\TextColumn::make('NbPlays'),
                Tables\Columns\TextColumn::make('Themes'),
                Tables\Columns\TextColumn::make('GameUrl'),
                Tables\Columns\TextColumn::make('OpeningTags'),
                Tables\Columns\TextColumn::make('Column11'),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\DeleteBulkAction::make(),
            ]);
    }
    
    public static function getRelations(): array
    {
        return [
            //
        ];
    }
    
    public static function getPages(): array
    {
        return [
            'index' => Pages\ListPuzzles::route('/'),
            'create' => Pages\CreatePuzzle::route('/create'),
            'edit' => Pages\EditPuzzle::route('/{record}/edit'),
        ];
    }    
}
