import React from 'react'
import VideoContainer from './VideoContainer'
import { YOUTUBE_LOGO } from '../Utils/Constants'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';


const Header = () => {
  return (
    <div className='grid-flow-row justify-between mt-5 ml-5'>

        <div className='flex'> 
       < MenuRoundedIcon/>
            <img className='h-5' alt='yt-logo'src={YOUTUBE_LOGO}></img>
        </div>
        <div className='flex'> 
            <input className='border rounded-l-xl'  type='search'></input>
            <button> <SearchRoundedIcon className='border rounded-r-xl ' /></button>
           
        </div>
        <div>
            <button><PersonOutlineRoundedIcon/></button>
           
        </div>
    </div>
  )
}

export default Header