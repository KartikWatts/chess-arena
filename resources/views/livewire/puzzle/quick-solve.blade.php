<div class="flex flex-col items-center justify-center gap-2 md:gap-4 my-10 mx-4">
    <input name="puzzleFEN" id="puzzleFEN" value="{{ $puzzle->FEN }}" hidden />
    <input name="puzzleMoves" id="puzzleMoves" value="{{ $puzzle->Moves }}" hidden />
    <h1 class="text-xl md:text-3xl"><span class="font-bold">Solve Puzzle</span> <span id="moveColor"></span> </h1>
    <div id="board" class="board">
    </div>
    <div class="bg-slate-900 rounded-lg px-5 py-2">
        <label>Status:</label>
        <div id="status"></div>
        <label>FEN:</label>
        <div id="fen"></div>
        <label>PGN:</label>
        <div id="pgn"></div>
    </div>
    {{ $puzzle }}
    {{ $puzzle->FEN }}
</div>
