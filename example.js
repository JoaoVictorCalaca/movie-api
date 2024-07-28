const [movie, setMovie] = useState(null)

const apiKey = 'a25b73fc914301a512ef2c15108c844b'
const movieId = 550

useEffect(()=> {
  const fetchMovieDetails = async () => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`)
      setMovie(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  fetchMovieDetails()
}, [movieId, apiKey])

if (!movie) return <div>carregando</div>

const posterUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://via.placeholder.com/500x750?text=No+Image';

return (
  <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <h1>{movie.title}</h1>
    <Image src={posterUrl} alt="movie poster" width={100} height={100}/>
    <p>{movie.overview}</p>
  </main>
);