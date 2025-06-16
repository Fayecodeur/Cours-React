import Counter from "./components/Counter/Counter.jsx";
import Fruity from "./components/Fruity/Fruity.jsx";

function App() {
  return (
    <div className="min-h-screen bg-slate-700 px-4">
      <div className="mx-auto max-w-3xl pt-10 pb-20">
        {/* 1 Counter App */}
        {/* <Counter /> */}

        {/* Fruity App */}
        <Fruity />
      </div>
    </div>
  );
}

export default App;
