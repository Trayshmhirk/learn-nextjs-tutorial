"use client";
import { notFound } from "next/navigation";

type ReviewDetailsProps = {
   params: {
      productId: string;
      reviewId: string;
   };
};

// function getRandomInt(count: number) {
//    return Math.floor(Math.random() * count);
// }

const ReviewDetails = ({ params }: ReviewDetailsProps) => {
   // const random = getRandomInt(2);

   // if (random === 1) {
   //    throw new Error("Error loading review");
   // }

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
