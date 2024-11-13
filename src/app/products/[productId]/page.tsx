const ProductDetails = ({ params }: { params: { productId: string } }) => {
   return (
      <div className="">
         <h1>Product details about {params.productId}</h1>
      </div>
   );
};

export default ProductDetails;
