'use client';

import { useEffect } from 'react';

function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="text-center mt-10">
      <h2>Something went wrong</h2>
      <button type="button" onClick={reset} className="hover:text-amber-600">Try Again</button>
    </div>
  );
}

export default Error;
