import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import Link from "next/link";

export default function SignUp() {
  return (
    <div className="mt-24 rounded bg-black/70  py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
      <form>
        <h1 className="text-3xl font-semibold text-white">Sign Up</h1>
        <div className="space-y-4 mt-5">
          <Input
            type="email"
            name="email"
            placeholder="Email"
            className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block "
          />
          <Button
            type="submit"
            variant="destructive"
            className="w-full bg-[#e50914]"
          >
            Sign Up
          </Button>
        </div>
      </form>
      <div className="text-gray-500 text-sm mt-2">
        Already have an account?{" "}
        <Link href="/login" className="text-white hover:underline">
          Log in now
        </Link>
      </div>
      <div className="flex w-full justify-center items-center gap-x-3 mt-6">
        <Button className="w-full" variant="outline">
          <FcGoogle size="icon" className="h-4 w-4" />
        </Button>
        <Button className="w-full" variant="outline">
          <FaGithub size="icon" className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
