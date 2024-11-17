export function Barchart() {
   return <h1>Bar chart</h1>;
}

export default function Dashboard() {
   return (
      <div>
         <h1>Dashboard</h1>

         <Barchart />
      </div>
   );
}
