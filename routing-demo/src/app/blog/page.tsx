import { Metadata } from "next";

export const metadata: Metadata = {
   title: {
      absolute: "My Blog",
   },
};

const Blog = () => {
   return <h1>My Blog website</h1>;
};

export default Blog;
