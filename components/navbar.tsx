import Image from "next/image";
import Link from "next/link";

const navIcons = [
  { src: "/icons/search.svg", alt: "search" },
  { src: "/icons/black-heart.svg", alt: "heart" },
  { src: "/icons/user.svg", alt: "user" },
];

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className=" flex justify-between items-center px-6 md:px-20 py-4">
        <Link href="/" className="flex items-center gap-1">
          <Image src="/logo.webp" width={27} height={27} alt="logo" />
          <p className="font-spaceGrotesk text-[21px] text-muted-background font-bold">
            Price<span className="text-primary">Peek</span>
          </p>
        </Link>
        <div className="flex items-center gap-5">
          {navIcons.map((icon) => (
            <Image
              key={icon.alt}
              src={icon.src}
              alt={icon.alt}
              width={28}
              height={28}
              className="object-contain cursor-pointer"
            />
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
