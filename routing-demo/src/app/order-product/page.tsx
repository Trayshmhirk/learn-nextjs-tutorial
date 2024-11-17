"use client";

import { useRouter } from "next/navigation";

const OrderProduct = () => {
   const router = useRouter();
   const handlePlaceOrder = () => {
      console.log("Placing order...");

      router.push("/");
      // router.back();
      // router.replace("/");
   };

   return (
      <div className="flex flex-col gap-3 items-start py-3">
         <h1>Order Product</h1>

         <button
            className="bg-blue-400 p-2 text-white rounded"
            onClick={handlePlaceOrder}
         >
            Place order
         </button>
      </div>
   );
};

export default OrderProduct;
