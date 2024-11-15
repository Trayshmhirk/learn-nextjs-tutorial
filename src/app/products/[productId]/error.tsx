"use client";

export default function ErrorBoundary({
   error,
   reset,
}: {
   error: Error;
   reset: () => void;
}) {
   return (
      <div>
         <h1>{error.message}</h1>

         <button className="bg-blue-400 p-2 text-white rounded" onClick={reset}>
            Try again  
         </button>
      </div>
   );
}
