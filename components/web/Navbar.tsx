import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Navbar() {
  return (
    <nav className="w-full  py-5 flex items-center justify-between px-6">
      <div className="flex items-center gap-8 ">
        <Link href="/">
          <h1 className="text-3xl font-bold">
            Dev<span className="text-primary">Notes</span>
          </h1>
        </Link>

        <div className="flex items-center gap-2">
          <Link className={buttonVariants({ variant: "ghost" })} href="/">
            Home
          </Link>
          <Link className={buttonVariants({ variant: "ghost" })} href="/blog">
            Blog
          </Link>
          <Link className={buttonVariants({ variant: "ghost" })} href="/create">
            Create
          </Link>
        </div>
      </div>

      <div className="flex gap-4">
        <Link className={buttonVariants()} href="/auth/sign-up">
          Sign up
        </Link>
        <Link
          className={buttonVariants({ variant: "outline" })}
          href="/auth/login"
        >
          Login
        </Link>

        <ThemeToggle />
      </div>
    </nav>
  );
}
