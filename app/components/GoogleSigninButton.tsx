"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

export default function GithubSigninButton() {
  return (
    <Button
      onClick={() => signIn("google")}
      className="w-full"
      variant="outline"
    >
      <FcGoogle size="icon" className="h-4 w-4" />
    </Button>
  );
}
