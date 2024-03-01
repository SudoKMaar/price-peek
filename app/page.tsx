import Image from "next/image";
import { Searchbar } from "@/components/searchbar";
import { getAllProducts } from "@/action/get-all-products";
import ProductCard from "@/components/product-card";

export default async function Home() {
  const allProducts = await getAllProducts();
  return (
    <main>
      <section className="w-full py-6 md:py-12 lg:py-24 xl:py-32">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6">
          <p className="font-spaceGrotesk text-6xl text-muted-background font-bold">
            Price<span className="text-primary">Peek</span>
          </p>
          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              Your personal price tracker
            </h1>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Track prices of your favorite products and get notified when they
              drop
            </p>
          </div>
          <p className="flex gap-2 text-sm font-medium text-primary">
            Smart Shopping Starts Here:
            <Image
              src="/icons/arrow-right.svg"
              alt="arrow-right"
              width={16}
              height={16}
            />
          </p>

          <div className="mx-auto w-full max-w-sm space-y-2">
            <Searchbar />
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-10 px-6 md:px-20 py-24">
        <h2 className="text-muted-background text-[32px] font-semibold">
          Trending
        </h2>
        <div className="flex flex-wrap gap-x-8 gap-y-16">
          {allProducts?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
