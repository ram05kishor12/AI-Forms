import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/components/ui/themeprovider";
import Image from "next/image";
import { ThemeToggle } from "./components/themetoogle";
import Form from "./Form-Generator/page";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Form />
    </div>
  );
}
