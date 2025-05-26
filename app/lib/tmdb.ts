const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export async function buscarFilmesPopulares() {
  try {
    const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=pt-BR`);
    if (!res.ok) {
      throw new Error('Erro ao buscar filmes');
    }
    const data = await res.json();
    return data.results;
  } catch (err) {
    console.error(err);
    return [];
  }
}

const API_KEY = 'SUA_CHAVE_DA_API';

export async function buscarFilmePorId(id: string) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=pt-BR`);
  if (!res.ok) throw new Error('Erro ao buscar detalhes do filme');
  return res.json();
}