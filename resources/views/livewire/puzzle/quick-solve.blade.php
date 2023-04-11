<div class="flex flex-col items-center justify-center gap-2 md:gap-4 mt-8 mx-4">
    <script>
        console.log({!! json_encode($puzzle) !!})
    </script>
    <input name="puzzleFEN" id="puzzleFEN" value="{{ $puzzle->FEN }}" hidden />
    <input name="puzzleMoves" id="puzzleMoves" value="{{ $puzzle->Moves }}" hidden />
    <h1 class="text-xl md:text-3xl"><span class="font-bold">Solve Puzzle</span> <span id="moveColor"></span> </h1>
    <div id="board" class="board disable-actions">
    </div>
    @include('common.confetti')
    <div class="bg-slate-900 rounded-lg px-5 py-2">
        <label>PGN:</label>
        <span id="pgn"></span>
        <br />
        <label>Status:</label>
        <span id="status"></span>

    </div>
</div>
@vite(['resources/js/chessboard-1.0.0.min.js', 'resources/js/chess.ts', 'resources/js/quick-solve.js'])
