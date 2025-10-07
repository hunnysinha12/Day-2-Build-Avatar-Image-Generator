import React from "react";
import "remixicon/fonts/remixicon.css";
import "animate.css";
const App = () => {
  return (
    <div className="animate__animated animate__fadeIn min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center text-white">
      <div className="animate__animated animate__bounceIn w-full max-w-md backdrop-blur-xl rounded-2xl shadow-xl p-10 flex flex-col gap-4 justify-center items-center">
        <img
          src="https://imgs.search.brave.com/iGzjXxbobgarhPGAnTrZitwP4h8KzZD3FjlidJGNYes/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTIvQXZh/dGFyLVByb2ZpbGUt/UE5HLVBpYy5wbmc"
          alt=""
          className="w-32 h-32 rounded-full border-4 border-slate-700 shadow-lg object-cover"
        />
        <div className="avg text-center justify-center items-center flex flex-col gap-4">
          <h1 className="text-3xl font-medium">Avatar Generator </h1>
          <p className="text-slate-300 font-bold tracking-wide">
            Generate unlimited avatars for your website
          </p>
        </div>
        <select className="bg-slate-900/60 w-full p-3 rounded-xl ">
          <option value="male">Male</option>
        </select>
        <div className="bg-slate-900/60 w-full p-3 rounded-xl ">
          https://imageurl.com
        </div>
        <input />
        <div className="flex w-full gap-4">
          <button className="bg-gradient-to-r from-rose-500 to-orange-600 flex-1 font-medium rounded-lg px-2 py-4 hover:scale-[105%] transition-transform">
            <i className="ri-arrow-right-up-line mr-1"></i>Change
          </button>{" "}
          <button className="bg-gradient-to-r from-green-500 to-cyan-600 flex-1 font-medium rounded-lg px-2 py-4 hover:scale-[105%] transition-transform">
            <i className="ri-download-line mr-1"></i>Download
          </button>{" "}
          <button className="bg-gradient-to-r from-orange-500 to-amber-600 flex-1 font-medium rounded-lg px-2 py-4 hover:scale-[105%] transition-transform">
            <i className="ri-file-copy-line mr-1"></i>Copy
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
