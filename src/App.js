import "./App.css";
import Box from "./Box";

function App() {
  return (
    <div className="App">
        <div style={{backgroundImage:"url('https://c4.wallpaperflare.com/wallpaper/990/446/537/hot-girl-windows-backgrounds-wallpaper-preview.jpg')"}}className=" w-screen h-screen border-black border-[10px] p-3 m-5">
          <nav className="h-fit w-fit bg-black text-white p-2 rounded-md mb-2">
              Home
              </nav>
        <div className="grid place-content-center p-10">
          <Box text={"Western wear"} />
          <Box text={"Ethenic wear"} />
          <Box text={"Beauty"} />
          </div>
      </div>
    </div>
  );
}
export default App;


