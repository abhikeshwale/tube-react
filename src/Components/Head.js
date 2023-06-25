import React, { useEffect, useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { YOUTUBE_API_SUGGESTIONS_API, YOUTUBE_LOGO } from "../util/Constants";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../util/appSlice";
function Head() {
  const [searctQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => getSuggestions(), 200);
    return () => {
      clearTimeout(timer);
    };

  }, [searctQuery]);
  /**#Notes
   * make api call after every every 200 ms
   * getSuggestions();
   * but if the diff between 2 api call is <200 decline the call
   *
   * key -i
   * - render the component
   * - useEffect();
   * - start timer => make api call after 200ms
   *
   * key -ip
   * destroy the compnent(useEffect return method)(clears the setTimeout and set up the new timer)
   * - re-render the component
   * - useEffect();
   * - start timer => make api call after 200ms
   *
   *
   */


  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const getSuggestions = async () => {
    console.log(searctQuery);
    const data = await fetch(YOUTUBE_API_SUGGESTIONS_API + searctQuery);
    const json = await data.json();
  };
 
  return (
    <div className="grid grid-flow-col  p-3 shadow-lg m-3 ">
      <div className="flex col-span-1 cursor-pointer">
        <MenuRoundedIcon onClick={() => toggleMenuHandler()} />
        <a href="/">
          <img className="h-6 mx-2" alt="yt-logo" src={YOUTUBE_LOGO}></img>
        </a>
      </div>
      <div className="col-span-10 px-4">
        <input
          value={searctQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
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
}

export default Head;
