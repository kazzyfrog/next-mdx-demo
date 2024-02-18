import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./_components/hero";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="flex justify-center items-center gap-8">
        <Button variant="destructive" size="lg">
          large button
        </Button>
        <Button variant="outline" size="lg">
          large button
        </Button>
      </div>
      <div className="flex justify-center items-center gap-8">
        <Button variant="link" size="lg">
          link button
        </Button>
      </div>
      {/* <Button variant="myButton">My Button</Button> */}
    </>
  );
}
