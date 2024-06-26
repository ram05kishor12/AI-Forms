import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/components/ui/themeprovider";
import Image from "next/image";
import { ThemeToggle } from "./components/themetoogle";
import Form from "./formgenerator/page";
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-r from-rose-100 to-teal-100">
      Landing Page
      <Link href="/signin">
      <Button>
        Sigin
      </Button>
      </Link>
    </div>

  );
}
