<div class="flex flex-col items-center justify-center gap-2 md:gap-4 m-10">
    <h1 class="text-3xl md:text-5xl"><span class="font-bold">Chezzle:</span> A Chess Puzzle Platform</h1>
    <div id="board" class="board"></div>
    <div
        class="bg-slate-900 p-4 md:p-10 rounded-xl md:rounded-3xl text-xl md:text-4xl hover:bg-slate-800 hover:scale-110 motion-safe:animate-pulse solve-now-btn">
        <a href="{{ route('test') }}">
            Solve Now
        </a>
    </div>
</div>
@vite(['resources/js/chessboard-1.0.0.min.js', 'resources/js/chess.ts', 'resources/js/app.js'])
