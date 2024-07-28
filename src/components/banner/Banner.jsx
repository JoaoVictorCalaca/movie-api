'use client'
import React, { useEffect, useState } from 'react'
import { trendingMovies } from '@/service/movieService'
import Carrousel from '../carrousel/Carrousel'

function Banner() {
    const [movies, setMovies] = useState([])
    
    useEffect(()=> {
        const handleContent = async () => { 
            const results = await trendingMovies()
            setMovies(results)
        }

        handleContent()
        console.log(movies);
    }, [])

    return (
        <div  className="rounded-b-2xl relative">
            <Carrousel movies={movies}/>
        </div>
    )
}

export default Banner