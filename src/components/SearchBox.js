'use client';

import { useRef } from 'react';
import { useRouter } from 'next/navigation';

function SearchBox() {
  const router = useRouter();
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;
    router.push(`/search/${inputRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex max-w-6xl mx-auto justify-between items-center px-5">
      <input
        type="text"
        ref={inputRef}
        placeholder="Search keywords..."
        className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1"
      />
      <button type="submit" className="text-amber-600 disabled:text-gray-400">Search</button>
    </form>
  );
}

export default SearchBox;
