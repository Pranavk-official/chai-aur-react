import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  const colors = [
    {
      color: "black",
    },
    {
      color: "white",
    },
    {
      color: "red",
    },
    {
      color: "green",
    },
    {
      color: "orange",
    },
    {
      color: "purple",
    },
  ];
  return (
    <>
      <div className="w-screen h-screen " style={{ backgroundColor: color }}>
        <div className="text-center p-10 bg-slate-800">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Simple Background Changer
          </h1>

          <h3 className="pt-5 text-white capitalize">
            The color now is:{" "}
            <span
              className="bg-slate-400 px-2 py-1 rounded font-extrabold"
              style={{ color: color }}
            >
              {color}
            </span>
          </h3>
        </div>
        <div className="fixed flex flex-wrap justify-center bottom-16 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-slate-600 px-3 py-2 rounded-xl">
            {colors.map((colorName, index) => (
              <button
                key={`${colorName.color}-${index}`}
                onClick={() => setColor(colorName.color)}
                className="capitalize outline-none px-4 py-1 rounded-full text-white shadow-lg"
                style={{ backgroundColor: colorName.color }}
              >
                {colorName.color}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
