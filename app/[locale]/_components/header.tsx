import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import { Link } from "@/i18n/routing";

export function Header() {
  return (
    <header className="bg-muted flex h-28 w-full justify-center">
      <div className="size-full max-w-[1200px] bg-red-200">
        <nav className="fixed z-10 flex h-28 w-full max-w-[1200px] justify-between bg-green-200 px-8 md:px-10">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center">
              <Avatar className="size-14 rounded-full">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="Matteo Urso"
                />
                <AvatarFallback>{"MU"}</AvatarFallback>
              </Avatar>
            </Link>
            <Link
              href="/changelog"
              className="flex w-20 items-center justify-center p-1 font-normal transition-all hover:font-bold md:w-24"
            >
              {"changelog"}
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/contack">
              <Button effect="shine">{"get in touch"}</Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
