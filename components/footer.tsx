import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="flex justify-center items-center text-center w-full bg-black bg-opacity-10 text-wrap mx-auto">
      <small className="text-black">
        &copy; {new Date().getFullYear()}
        <Button variant="link" className="text-black text-xs px-1" asChild>
          <Link
            href="https://kmaar.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Abhishek Kumar
          </Link>
        </Button>
        . All rights reserved. | Powered by
        <Button variant="link" className="text-black text-xs px-1" asChild>
          <Link
            href="https://kmstudio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            KMaar Miscellaneous Studio
          </Link>
        </Button>
      </small>
    </footer>
  );
}
