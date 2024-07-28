import React from 'react'
import { BsEmojiNeutralFill, BsFillEmojiFrownFill, BsFillEmojiSmileFill  } from "react-icons/bs";

function MovieRate({rate}) {
    if (rate <= 4.5) {
        return <h2 className='flex gap-2 text-sm text-white'>users rating: <span className='flex items-center gap-2 text-red-600 font-bold'> {rate} <BsFillEmojiFrownFill size={24} color='#dc2626'/> </span> </h2>
    }else if (rate > 4.5 && rate < 7.5) {
        return <h2  className='flex gap-2 text-sm text-white'>users rating: <span className='flex items-center gap-2 text-yellow-400 font-bold'> {rate} <BsEmojiNeutralFill size={24} color='yellow'/> </span> </h2>
    }else {
        return <h2 className='flex gap-2 text-sm text-white'>users rating: <span className='flex items-center gap-2 text-green-600 font-bold'> {rate} <BsFillEmojiSmileFill  size={24} color='green'/> </span> </h2>
    }
}

export default MovieRate