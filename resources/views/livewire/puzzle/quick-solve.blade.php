<div class="flex flex-col items-center justify-center gap-2 md:gap-4 m-10">
    {{ $puzzle }}
    {{ $puzzle->FEN }}
    <input name="puzzleFEN" id="puzzleFEN" value="{{ $puzzle->FEN }}" hidden />
    <h1 class="text-xl md:text-3xl"><span class="font-bold">Solve Puzzle</h1>
    <div id="board" class="board"></div>
</div>
