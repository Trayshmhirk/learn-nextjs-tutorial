import { cookies } from "next/headers";

const About = async () => {
   const cookieStore = await cookies();
   const theme = cookieStore.get("theme");
   console.log(theme);

   return (
      <div className="p-4">
         <h1>About Page {new Date().toLocaleTimeString()}</h1>
      </div>
   );
};

export default About;
