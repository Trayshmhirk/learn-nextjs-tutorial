const Card = ({ children }: { children: React.ReactNode }) => {
   return (
      <div className="flex justify-center items-center p-24 m-3 border border-[#ddd] shadow-md">
         {children}
      </div>
   );
};

export default Card;
