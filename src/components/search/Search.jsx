'use client'
import React, { useState, useEffect } from 'react'
import { FaSearch } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { VscSearchStop } from "react-icons/vsc";
import Modal from 'react-modal';
import { getMovies } from '@/service/movieService';
import Image from 'next/image';
import MovieRate from '../movieRate/MovieRate';

function Search() {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])

    useEffect(()=> {
        const handleSearch = async () => {
            const results = await getMovies(query);
            setMovies(results);
        };

        handleSearch()
    }, [query])

    function openModal() {
        setIsOpen(true);
        console.log('ss');
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className='relative'>
            <button onClick={openModal}> <FaSearch size={24} color='#fff'/> </button>

            <Modal style={{overlay: {backgroundColor: 'rgba(0, 0, 0, 0.75)'}}} isOpen={modalIsOpen} onRequestClose={closeModal} className='flex flex-col gap-3 justify-center bg-blue-950 w-full sm:w-1/2 p-4 rounded-b-lg absolute right-0 top-28 sm:top-20 md:top-20'>
                <div className='flex justify-center w-full bg-blue-900 rounded-lg p-3 gap-4'>
                    <FaSearch size={24} color='#ccc' />
                    <input value={query} onChange={(e)=> {setQuery(e.target.value)}} className='w-full bg-transparent focus:outline-none text-white font-bold' type="text" placeholder='Search' />
                    <button onClick={()=>{setQuery('')}}> <IoIosCloseCircle size={24} color='#ccc'/> </button>
                </div>

                <div className='h-96 flex flex-col gap-3 overflow-y-auto'>
                    <button className='text-lg text-white p-2 rounded-lg bg-blue-900 w-1/3 justify-center items-center flex gap-3' onClick={closeModal}> <VscSearchStop size={24} color='#fff'/> Close search</button>
                    {movies.length > 0 ? (
                        movies.map((movie) => (
                            <div className='bg-slate-800 flex flex-col sm:flex-row gap-3 p-4 rounded-lg' key={movie.id}>
                                {movie.poster_path && (
                                    <Image className='rounded-lg w-1/2 sm:w-1/4 h-60' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} width={500} height={1}/>
                                )}
                                <div className='flex flex-col gap-2'>
                                    <h1 className='font-bold text-white text-lg'>{movie.title}</h1>
                                    <MovieRate rate={movie.vote_average}/>
                                    <span className='text-slate-100'>Release: {movie.release_date}</span>
                                    <p className='text-slate-100'>{movie.overview}</p>
                                </div>
                            </div>
                            
                        ))
                    ) : (
                        <p className='text-slate-200 text-xl'>No results.</p>
                    )}
                </div>
            </Modal>
        </div>
    )
}

export default Search