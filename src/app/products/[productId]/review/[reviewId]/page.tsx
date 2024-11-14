import { notFound } from "next/navigation";

type ReviewDetailsProps = {
   params: {
      productId: string;
      reviewId: string;
   };
};

const ReviewDetails = ({ params }: ReviewDetailsProps) => {
   if (parseInt(params.reviewId) > 1000) {
      notFound();
   }
   return (
      <div>
         <h1>
            Review {params.reviewId} for product {params.productId}
         </h1>
      </div>
   );
};

export default ReviewDetails;
