import { Chessboard } from "react-chessboard";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className='flex flex-col items-center justify-center gap-2 md:gap-4 m-10'>
      <h1 className='text-3xl md:text-5xl'>
        <span className='font-bold'>Chess Arena:</span> A Chess Puzzle Platform
      </h1>
      <div className='board'>
        <Chessboard
          id='Configurable Board'
          onArrowsChange={function noRefCheck() {}}
          onDragOverSquare={function noRefCheck() {}}
          onMouseOutSquare={function noRefCheck() {}}
          onMouseOverSquare={function noRefCheck() {}}
          onPieceClick={function noRefCheck() {}}
          onPieceDragBegin={function noRefCheck() {}}
          onPieceDragEnd={function noRefCheck() {}}
          onPieceDrop={function noRefCheck() {}}
          onPromotionCheck={function noRefCheck() {}}
          onPromotionPieceSelect={function noRefCheck() {}}
          onSquareClick={function noRefCheck() {}}
          onSquareRightClick={function noRefCheck() {}}
        />
      </div>
      <div className='app-main-content'>
        <Link to='quick-solve'>
          <div className='bg-slate-900 p-4 md:p-10 rounded-xl md:rounded-3xl text-xl md:text-4xl hover:bg-slate-800 hover:scale-110 motion-safe:animate-pulse solve-now-btn cursor-pointer'>
            Quick Solve Now*
          </div>
        </Link>
        <div className='bg-slate-900 py-3 px-5 mt-5 rounded-md beta-release-caution'>
          <div className='font-bold'>
            *The app is undergoing migration; as previous hosting expired
          </div>
          The app is in beta mode, as it may still contain undiscovered bugs and
          unexpected behavior. I appreciate providing feedback on any issues
          encountered, so we can improve the app before its official release.
          Contributions are dearly welcomed. Developed with ❤️
          <a href='https://github.com/KartikWatts/chess-arena' target='_blank'>
            https://github.com/KartikWatts/chess-arena
          </a>
          <br /> Note: For now in Mobile browser, moves can only be played by
          dragging the piece.
        </div>
      </div>
    </div>
  );
}

export default App;
