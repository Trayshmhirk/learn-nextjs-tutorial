"use client";

import { useState } from "react";

const Dashboard = () => {
   const [name, setName] = useState("");

   console.log("dashboard client component");

   return (
      <div className="p-4 flex flex-col gap-3">
         <h1>Dashboard Page</h1>

         <div>
            <input
               type="text"
               className="border border-gray-500 text-white bg-transparent rounded p-1"
               value={name}
               onChange={(e) => setName(e.target.value)}
            />
            <p>Hello, {name}!</p>
         </div>
      </div>
   );
};

export default Dashboard;
