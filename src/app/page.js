import Results from '../components/Results';

const { API_KEY } = process.env;

const page = async ({ searchParams }) => {
  const genre = searchParams.genre || 'fetchTrending';
  const response = await fetch(
    `https://api.themoviedb.org/3/${
      genre === 'fetchTrending' ? 'trending/all/week' : 'movie/top_rated'
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } },
  );

  if (!response.ok) {
    throw new Error('Failed to fetch API');
  }

  const data = await response.json();

  const { results } = data;

  return (
    <div>
      <Results results={results} />
    </div>
  );
};

export default page;
