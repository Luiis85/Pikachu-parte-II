import Link from 'next/link';

export default async function Home() {
  const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=5937bf24877c9ec5a43fa057ddc0ec63&language=pt-BR');
  const data = await res.json();
  const movies = data.results;

  return (
    <>
      <header>
        <h1>NextMovie</h1>
      </header>

      <main>
        <section className="movie-list">
          {movies.map((movie: any) => (
            <article key={movie.id} className="movie">
              <Link href={`/filme/${movie.id}`}>
                <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
                <h2>
                  {movie.title} ({movie.release_date?.split('-')[0]})
                </h2>
              </Link>
              <p className="synopsis">{movie.overview}</p>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
