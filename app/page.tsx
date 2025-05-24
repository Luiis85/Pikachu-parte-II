type Movie = {
  id: number;
  title: string;
  year: number;
  image: string;
  synopsis: string;
};

const movies: Movie[] = [
  {
    id: 1,
    title: "Interstellar",
    year: 2014,
    image: "https://upload.wikimedia.org/wikipedia/pt/thumb/3/3a/Interstellar_Filme.png/250px-Interstellar_Filme.png",
    synopsis:
      "Exploradores espaciais viajam por um buraco de minhoca em busca de um novo lar para a humanidade.",
  },
  {
    id: 2,
    title: "Inception",
    year: 2010,
    image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
    synopsis:
      "Um ladrão especializado em roubar segredos via sonhos recebe o desafio de plantar uma ideia na mente de alguém.",
  },
  {
    id: 3,
    title: "O Poderoso Chefão",
    year: 1972,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ880p4ChsweZ96d8qJlKf2ZXlSWdSZWNlBgQ&s",
    synopsis: "A saga da família mafiosa Corleone e seu líder, Don Vito Corleone.",
  },
  {
    id: 4,
    title: "Blade Runner 2049",
    year: 2017,
    image: "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg",
    synopsis:
      "Um caçador de replicantes descobre um segredo que pode destruir o que resta da humanidade.",
  },
  {
    id: 5,
    title: "Matrix",
    year: 1999,
    image: "https://m.media-amazon.com/images/I/81xTx-L9wOL._AC_SY679_.jpg",
    synopsis:
      "Um hacker descobre a verdade sobre a realidade e luta contra máquinas que dominam o mundo.",
  },
];

export default function Home() {
  return (
    <>
      <header>
        <h1>NextMovie</h1>
      </header>

      <main>
        <section className="movie-list">
          {movies.map((movie) => (
            <article key={movie.id} className="movie">
              <img src={movie.image} alt={movie.title} />
              <h2>
                {movie.title} ({movie.year})
              </h2>
              <p className="synopsis">{movie.synopsis}</p>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
