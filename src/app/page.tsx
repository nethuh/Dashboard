import Image from "next/image";
import PageTitle from "@/components/PageTitle";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 w-full">
        <PageTitle title="Dashboard"/>
    </div>
  );
}
