"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";

export default function GithubSigninButton() {
  return (
    <Button
      onClick={() => signIn("github")}
      className="w-full"
      variant="outline"
    >
      <FaGithub size="icon" className="h-4 w-4" />
    </Button>
  );
}
