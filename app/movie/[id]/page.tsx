type Filme = {
    titulo: string;
    ano: number;
    diretor: string;
    genero: string;
    sinopse: string;
  };
  
  type Params = {
    params: { id: string };
  };
  
  const filmes: Record<string, Filme> = {
    '1': {
      titulo: 'Interstellar',
      ano: 2014,
      diretor: 'Christopher Nolan',
      genero: 'Ficção Científica',
      sinopse: 'Uma equipe de exploradores viaja através de um buraco de minhoca no espaço.'
    },
    '2': {
      titulo: 'Inception',
      ano: 2010,
      diretor: 'Christopher Nolan',
      genero: 'Ação / Ficção Científica',
      sinopse: 'Um ladrão rouba segredos corporativos usando tecnologia de sonhos compartilhados.'
    },
    '3': {
      titulo: 'O Poderoso Chefão',
      ano: 1972,
      diretor: 'Francis Ford Coppola',
      genero: 'Crime / Drama',
      sinopse: 'A história da poderosa família mafiosa Corleone.'
    },
  };
  
  export default function FilmeDetalhe({ params }: Params) {
    const { id } = params;
    const filme = filmes[id];
  
    if (!filme) {
      return <p style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>Carregando...</p>;
    }
  
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <a
          href="/"
          style={{
            display: 'inline-block',
            marginBottom: '20px',
            padding: '8px 12px',
            backgroundColor: '#0070f3',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            textDecoration: 'none'
          }}
        >
          Voltar
        </a>
  
        <h1>{filme.titulo}</h1>
        <p><strong>Ano:</strong> {filme.ano}</p>
        <p><strong>Diretor:</strong> {filme.diretor}</p>
        <p><strong>Gênero:</strong> {filme.genero}</p>
        <p><strong>Sinopse:</strong> {filme.sinopse}</p>
      </div>
    );
  }
  