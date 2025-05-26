require('dotenv').config();
const axios = require('axios');

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.TMDB_API_KEY;

async function buscarFilmesPopulares() {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular`, {
      params: {
        api_key: API_KEY,
        language: 'pt-BR',
      },
    });

    return response.data.results;
  } catch (error) {
    console.error('Erro ao buscar filmes:', error.message);
    return [];
  }
}

module.exports = { buscarFilmesPopulares };