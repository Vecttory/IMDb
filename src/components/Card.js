import Image from 'next/image';
import Link from 'next/link';
import { FiThumbsUp } from 'react-icons/fi';

function Card({ result }) {
  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">

      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`}
          width={500}
          height={300}
          className="w-full sm:rounded-t-lg dark:group-hover:opacity-70 group-hover:opacity-80 transition-opacity duration-200"
          placeholder="blur"
          style={{ maxWidth: '100%', height: 'auto' }}
          blurDataURL="spinner.svg"
          alt="Image is not available"
        />
        <div className="p-2">
          <p className="line-clamp-2">{result.overview}</p>
          <h2 className="truncate text-lg font-bold">{result.title || result.name}</h2>
          <p className="flex items-center">
            {result.release_date || result.first_air_date}
            <FiThumbsUp className="h-5 ml-3 mr-1" />
            {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Card;
