import React, { useEffect, useState } from "react";
import "remixicon/fonts/remixicon.css";
import "animate.css";
import { toast, ToastContainer } from "react-toastify";
const App = () => {
  const data = [
    {
      lable: "Illustration",
      value: "illustration",
      url: "https://api.dicebear.com/7.x/avataaars/svg?seed=",
    },
    {
      lable: "Cartoon",
      value: "cartoon",
      url: "https://api.dicebear.com/7.x/adventurer/svg?seed=",
    },
    {
      lable: "Sketchy",
      value: "sketchy",
      url: "https://api.dicebear.com/7.x/croodles/svg?seed=",
    },
    {
      lable: "Robots",
      value: "robots",
      url: "https://api.dicebear.com/7.x/bottts/svg?seed=",
    },
    {
      lable: "Art",
      value: "art",
      url: "https://api.dicebear.com/7.x/pixel-art/svg?seed=",
    },
    {
      lable: "Male",
      value: "male",
      url: "https://randomuser.me/api/portraits/men",
    },
    {
      lable: "Female",
      value: "female",
      url: "https://randomuser.me/api/portraits/women",
    },
  ];

  const [src, setSrc] = useState(null);
  const [option, setOption] = useState("illustration");

  const onOptionChange = (e) => {
    const value = e.target.value;
    setOption(value);
  };
  const generateRandomNumber = () => {
    const r = Math.floor(Math.random() * 99) + 1;
    return r;
  };
  const generate = () => {
    const obj = data.find((item) => item.value === option);
    const url = obj.url;
    console.log(url);

    if (option === "male" || "female") {
      const imgaeUrl = `${url}/${generateRandomNumber()}.jpg`;
      setSrc(imgaeUrl);
    } else {
      const uniqueValue = Date.now();
      const imageUrl = `${url}${uniqueValue}`;
      setSrc(imageUrl);
    }
  };

  const download = (url) => {
    const a = document.createElement("a");
    a.href = url;
    a.download = `${Date.now()}.jpg`;
    a.click();
    a.remove();
  };

  const copyLink = (url) => {
    navigator.clipboard.writeText(url);
    toast.success("Image url copied!", { position: "top-center" });
  };

  useEffect(() => {
    generate();
  }, [option]);
  return (
    <div className="animate__animated animate__fadeIn min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center text-white">
      <div className="animate__animated animate__bounceIn w-full max-w-md backdrop-blur-xl rounded-2xl shadow-xl p-10 flex flex-col gap-4 justify-center items-center">
        <img
          src={src || "/avt.webp"}
          alt=""
          className="w-32 h-32 rounded-full border-4 border-slate-700 shadow-lg object-cover"
        />
        <div className="avg text-center justify-center items-center flex flex-col gap-4">
          <h1 className="text-3xl font-medium">Avatar Generator </h1>
          <p className="text-slate-300 font-bold tracking-wide">
            Generate unlimited avatars for your website
          </p>
        </div>
        <select
          value={option}
          onChange={onOptionChange}
          className="bg-slate-900/60 w-full p-3 rounded-xl "
        >
          {data.map((val, ind) => (
            <option value={val.value} key={ind}>
              {val.lable}
            </option>
          ))}
        </select>
        <div className="bg-slate-900/60 w-full p-3 rounded-xl ">{src}</div>
        <input />
        <div className="flex w-full gap-4">
          <button
            onClick={generate}
            className="bg-gradient-to-r from-rose-500 to-orange-600 flex-1 font-medium rounded-lg px-2 py-4 hover:scale-[105%] transition-transform"
          >
            <i className="ri-arrow-right-up-line mr-1"></i>Change
          </button>{" "}
          <button
            onClick={() => download(src)}
            className="bg-gradient-to-r from-green-500 to-cyan-600 flex-1 font-medium rounded-lg px-2 py-4 hover:scale-[105%] transition-transform"
          >
            <i className="ri-download-line mr-1"></i>Download
          </button>{" "}
          <button
            onClick={() => copyLink(src)}
            className="bg-gradient-to-r from-orange-500 to-amber-600 flex-1 font-medium rounded-lg px-2 py-4 hover:scale-[105%] transition-transform"
          >
            <i className="ri-file-copy-line mr-1"></i>Copy
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
