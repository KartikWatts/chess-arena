<div class="flex flex-col items-center justify-center gap-2 md:gap-4 m-10">
    <h1 class="text-3xl md:text-5xl"><span class="font-bold">Chezzle:</span> A Chess Puzzle Platform</h1>
    <div id="board" class="board"></div>
    <div class="app-main-content">
        <div
            class="bg-slate-900 p-4 md:p-10 rounded-xl md:rounded-3xl text-xl md:text-4xl hover:bg-slate-800 hover:scale-110 motion-safe:animate-pulse solve-now-btn">
            <a href="{{ route('test') }}">
                Solve Now
            </a>
        </div>
        <div class="bg-slate-900 py-3 px-5 mt-5 rounded-md beta-release-caution">
            The app is in beta mode, as it may still contain undiscovered bugs and unexpected behavior. I appreciate
            providing feedback on any issues encountered, so we can improve the app before its official release.
            Contributions are dearly welcomed. Made with ❤️ <a href="https://github.com/KartikWatts/chezzle"
                target="_blank">https://github.com/KartikWatts/chezzle</a>
            <br> Note: For now in Mobile browser, moves can only be played by dragging the piece.
        </div>
    </div>
</div>
@vite(['resources/js/chessboard-1.0.0.min.js', 'resources/js/chess.ts', 'resources/js/app.js'])
