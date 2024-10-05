interface Student {
  name: string;
  age: number;
  rollNumber: number;
}

export default function Card(props: Student) {
  return (
    <div>
      <div className="rounded-lg text-lime-500/50 hover:scale-105 shadow hover:shadow-lg hover:shadow-yellow-300/50 duration-500 cursor-pointer text-2xl border border-fuchsia-200 p-4 font-semibold">
        <h1 className="m-4">Name:{props.name}</h1> 
        <h1 className="m-4">Rollnumber:{props.rollNumber}</h1>
        <h1 className="m-4">Age:{props.age}</h1>
      </div>
    </div>
  );
} 
