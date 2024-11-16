import Link from "next/link";

const F4 = () => {
   return (
      <div>
         <h1>F4 Page</h1>

         <div className="flex flex-col">
            <Link href="/f1/f3">F3</Link>
            <Link href="/about">about</Link>
         </div>
      </div>
   );
};

export default F4;
