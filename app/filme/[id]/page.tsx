interface Params {
  params: {
    id: string;
  };
}

export default async function FilmePage({ params }: Params) {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=5937bf24877c9ec5a43fa057ddc0ec63&language=pt-BR`);
  const filme = await response.json();

  if (!filme.title) {
    return <p>Filme não encontrado.</p>;
  }

  return (
    <div>
      <h1>{filme.title} ({filme.release_date?.split('-')[0]})</h1>
      <img src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`} alt={filme.title} />
      <p>{filme.overview}</p>
    </div>
  );
}