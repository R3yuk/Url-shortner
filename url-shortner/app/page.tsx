import UrlShortnerContainer from "@/components/ui/url-shortner-container";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto max-w-xl py-12 md:py-24">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">Url Shortner</h1>
        <p className="md:text-lg">Shorten your URLs and share them easily</p>
      
      </div>
      <UrlShortnerContainer />
    </main>
  );
}
