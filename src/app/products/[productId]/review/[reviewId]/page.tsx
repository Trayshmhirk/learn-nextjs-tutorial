type ReviewDetailsProps = {
   params: {
      productId: string;
      reviewId: string;
   };
};

const ReviewDetails = ({ params }: ReviewDetailsProps) => {
   return (
      <div>
         <h1>
            Review {params.reviewId} for product {params.productId}
         </h1>
      </div>
   );
};

export default ReviewDetails;
