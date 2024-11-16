import Card from "@/components/card";
import Link from "next/link";

const Notifications = () => {
   return (
      <Card>
         <div className="flex flex-col gap-2 items-center">
            <div>Notifications</div>
            <Link
               href="/complex-dashboard/archived"
               className="bg-blue-400 p-2 text-white rounded no-underline"
            >
               Archived
            </Link>
         </div>
      </Card>
   );
};

export default Notifications;
