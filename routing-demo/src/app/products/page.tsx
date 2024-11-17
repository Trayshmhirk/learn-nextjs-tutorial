import Link from "next/link";

const Products = () => {
   const productId = 100;
   return (
      <div className="flex flex-col gap-3">
         <h1>Product List</h1>
         <div className="flex flex-col">
            <Link href="products/1">
               <li>Products 1</li>
            </Link>
            <Link href="products/2">
               <li>Products 2</li>
            </Link>
            <Link href="products/3" replace>
               <li>Products 3</li>
            </Link>
            <Link href={`products/${productId}`}>
               <li>Products {productId}</li>
            </Link>
         </div>

         <Link href="/">Back</Link>
      </div>
   );
};

export default Products;
