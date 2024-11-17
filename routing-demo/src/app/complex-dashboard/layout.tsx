import React from "react";

type Props = {
   children: React.ReactNode;
   users: React.ReactNode;
   revenue: React.ReactNode;
   notifications: React.ReactNode;
   login: React.ReactNode;
};

const Layout = ({ children, users, revenue, notifications, login }: Props) => {
   const isLoggedIn = true;

   return isLoggedIn ? (
      <div>
         <div>{children}</div>

         <div className="flex">
            <div className="flex flex-col">
               <div>{users}</div>
               <div>{revenue}</div>
            </div>

            <div className="flex flex-1">{notifications}</div>
         </div>
      </div>
   ) : (
      login
   );
};

export default Layout;
