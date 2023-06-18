import Results from '../../../components/Results';

async function SearchPage({ params }) {
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}&language=en-US&include_adult=false`);

  if (!response.ok) {
    throw new Error('Error fetching data');
  }

  const data = await response.json();
  const { results } = data;

  return (
    <div>
      {results && results.length === 0 ? (
        <h1 className="text-center pt-6">No results found</h1>
      ) : <Results results={results} />}
    </div>
  );
}

export default SearchPage;
