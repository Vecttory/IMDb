import Image from 'next/image';

async function getMovie(movieId) {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`);
  return response.json();
}

const page = async ({ params }) => {
  const movieId = params.id;
  const result = await getMovie(movieId);
  return (
    <div className="w-full">
      <div className="p-4 md:pt-4 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`}
          width={500}
          height={300}
          className="rounded-lg w-full md:w-1/2"
          placeholder="blur"
          style={{ maxWidth: '100%', height: '100%' }}
          blurDataURL="/spinner.svg"
          alt="Movie Poster"
        />
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">
            {result.title || result.name}
          </h2>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">
              Overview:
            </span>
            {result.overview}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">
              Date Released:
            </span>
            {result.release_date || result.first_air_date}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">
              Rating:
            </span>
            {result.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
