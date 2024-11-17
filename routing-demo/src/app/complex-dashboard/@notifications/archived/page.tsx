import Card from "@/components/card";
import Link from "next/link";

const ArchivedNotifications = () => {
   return (
      <Card>
         <div className="flex flex-col gap-2 items-center">
            <div>Archived Notifications</div>
            <Link
               href="/complex-dashboard"
               className="bg-blue-400 p-2 text-white rounded no-underline"
            >
               Default
            </Link>
         </div>
      </Card>
   );
};

export default ArchivedNotifications;
