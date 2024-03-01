import Image from "next/image";
import Link from "next/link";

const Custom404 = () => {
  return (
    <div className="flex flex-col relative items-center justify-center min-h-screen md:flex-row mx-auto">
      {/* image */}
      <div className="flex items-center flex-1 mt-10 md:mt-0">
        <Image
          src="/notfound.png"
          alt="404 not found"
          width="500"
          height="400"
          className="object-contain"
        />
      </div>
      {/* text */}
      <div className="flex-1 md:ml-8 items-center justify-center text-center">
        <h1 className="text-6xl font-bold">I have bad news for you</h1>
        <p className="mt-6 text-2xl">
          The page you are looking for might be removed or is temporarily
          unavailable
        </p>
        <Link
          className="inline-block py-4 mt-6 text-lg tracking-wider text-white rounded px-7"
          href="/"
        >
          BACK TO HOMEPAGE
        </Link>
      </div>
    </div>
  );
};

export default Custom404;
