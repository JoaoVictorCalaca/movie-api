import { CCarousel, CCarouselCaption, CCarouselItem, CImage } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css';
import React from 'react'

function Carrousel({ movies }) {
    return (
        <CCarousel controls indicators className='z-0'>
            {movies.map((movie) => (
                <CCarouselItem  key={movie.id}>
                    {movie.poster_path && (
                        <CImage className='rounded-lg w-full' src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} />
                    )}

                    <CCarouselCaption className='flex flex-col gap-4'>
                        <h1 className='font-bold text-blue-100 text-xl sm:text-5xl'>{movie.title}</h1>
                        <p className='text-blue-100 font-bold hidden sm:block'>{movie.overview}</p>
                    </CCarouselCaption>
                </CCarouselItem>
            ))}
        </CCarousel>
    )
}

export default Carrousel