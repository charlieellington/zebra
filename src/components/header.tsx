"use client";
import Link from "next/link";
import { Logo } from "./logo";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/content/nav";
import Image from "next/image";

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      {/* Spacer to push content down and prevent overlap with fixed header */}
      <div className="h-16 lg:h-20" />
      <header>
        <nav
          data-state={menuState && "active"}
          className="fixed top-0 z-20 w-full px-2"
        >
          <div
            className={cn(
              "mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12",
              isScrolled &&
                "bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5"
            )}
          >
            <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
              <div className="flex w-full justify-between lg:w-auto">
                <Link
                  href="/"
                  aria-label="home"
                  className="flex items-center space-x-2"
                >
                  <Logo />
                  <span className="text-lg font-semibold">Zebra Design</span>
                </Link>

                <button
                  onClick={() => setMenuState(!menuState)}
                  aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                  className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
                >
                  <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                  <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                </button>
              </div>

              <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                <ul className="flex gap-8 text-sm">
                  {NAV_LINKS.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className=" hover:text-accent-foreground block duration-150"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                <div className="lg:hidden">
                  <ul className="space-y-6 text-base">
                    {NAV_LINKS.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className="text-muted-foreground hover:text-accent-foreground block duration-150"
                        >
                          <span>{item.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                  {/* Desktop button - hidden on mobile, shown on desktop */}
                  <div className="hidden lg:flex lg:items-center lg:gap-1.5">
                    {/* Profile image - only shown when NOT scrolled */}
                    {!isScrolled && (
                      <div className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-background shadow-sm">
                        <Image
                          src="/images/other/charlie-ellington.jpg"
                          alt="Charlie Ellington"
                          fill
                          className="object-cover"
                          sizes="32px"
                        />
                      </div>
                    )}
                    <Button 
                      asChild 
                      size="sm"
                      variant={isScrolled ? "default" : "ghost"}
                      className={cn(
                        !isScrolled ? "hover:bg-accent/10" : "",
                        "px-3 py-1.5 h-auto"
                      )}
                    >
                      <Link href="https://cal.com/charlieellington/zebra-call" target="_blank" rel="noopener noreferrer">
                        Book Intro Call with Charlie
                      </Link>
                    </Button>
                  </div>
                  {/* Mobile button - shown only when mobile menu is open */}
                  <div className="block lg:hidden">
                    <Button asChild size="default" className="w-full">
                      <Link href="https://cal.com/charlieellington/zebra-call" target="_blank" rel="noopener noreferrer">
                        Book Intro Call with Charlie
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
