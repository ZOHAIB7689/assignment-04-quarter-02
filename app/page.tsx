import Card from "./card/page";
export default function Home() {
  return (
    <div className="bg-gradient-to-tr flex flex-col sm:flex-row flex-wrap justify-evenly items-center h-screen  w-full from-red-950 to-sky-950">
      <Card name="Askalan" rollNumber={34823} age={34}/>
      <Card  name="faiza" rollNumber={238432} age={28}/>
      <Card name="wadood" rollNumber={325234} age={19}/>





    </div>
  );
}
