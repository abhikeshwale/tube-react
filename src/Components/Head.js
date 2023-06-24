import React from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { YOUTUBE_LOGO } from "../util/Constants";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../util/appSlice";
function Head() {

const dispatch = useDispatch();

const toggleMenuHandler = () =>{
    dispatch(toggleMenu());
}
;

  return (
    <div className="grid grid-flow-col  p-3 shadow-lg m-3 ">
      <div className="flex col-span-1 cursor-pointer">
        <MenuRoundedIcon onClick={()=>toggleMenuHandler()} />
        <a href="/">
        <img className="h-6 mx-2" alt="yt-logo" src={YOUTUBE_LOGO}></img></a>
      </div>
      <div className="col-span-10 px-4">
        <input
          className="w-1/2  border border-gray-400  rounded-l-xl"
          type="search"
        ></input>
        <button className="border border-gray-400 rounded-r-xl px-2 bg-slate-100">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <PersonOutlineRoundedIcon />
      </div>
    </div>
  );
};

export default Head;
