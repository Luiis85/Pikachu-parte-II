export const metadata = {
    title: 'NextMovie',
    description: 'Seu catálogo de filmes favorito!',
  };
  
  export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="pt-BR">
        <body>
          <header style={{ backgroundColor: 'wheat', padding: '20px' }}>
            <h1 style={{ color: 'white' }}>NextMovie</h1>
          </header>
          <main>{children}</main>
        </body>
      </html>
    );
  }
  