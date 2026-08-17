"use client";

import { Button, Typography } from "@heroui/react";
import { useEffect, useState } from "react";
import { SiGithub, SiNextdotjs, SiReact, SiX } from "react-icons/si";
import { BackgroundCarousel } from "./components/background-carousel";
import { ThemeSwitcher } from "./components/theme-switcher";

export default function Home() {
  const [now, setNow] = useState<Date>();

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden p-8">
      <BackgroundCarousel />
      {/* Mask */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/70 via-white/25 to-transparent dark:from-black/70 dark:via-black/25 dark:to-transparent" />
      {/* HeiBuNeko's Information */}
      <div className="relative flex items-start justify-between">
        <div className="flex flex-col gap-4 rounded-4xl font-thin text-white">
          {/* HeiBuNeko's Avatar and Name */}
          <div className="flex items-center gap-4">
            <div className='size-12 rounded-full bg-[url("/img/avatar.webp")] bg-center bg-cover' />
            <Typography className="text-4xl">HeiBuNeko</Typography>
          </div>
          {/* HeiBuNeko's Description */}
          <Typography className="text-2xl">
            Scientist working on creating NekoMusume
          </Typography>
          {/* HeiBuNeko's Social Media Links */}
          <Typography className="flex items-center gap-4">
            <SiGithub
              className="cursor-pointer"
              size={20}
              onClick={() => window.open("https://github.com/HeiBuNeko")}
            />
            <SiX
              className="cursor-pointer"
              size={20}
              onClick={() => window.open("https://x.com/HeiBuNeko")}
            />
            <Button
              variant="tertiary"
              onPress={() => window.open("https://react.dev")}
            >
              <SiReact color="#61DAFB" />
              React
            </Button>
            <Button
              variant="tertiary"
              onPress={() => window.open("https://nextjs.org")}
            >
              <SiNextdotjs className="text-foreground" />
              Next.js
            </Button>
          </Typography>
          {/* HeiBuNeko's Current Time */}
          <Typography suppressHydrationWarning>
            {new Intl.DateTimeFormat("en-US", {
              dateStyle: "full",
              timeStyle: "full",
            }).format(now)}
          </Typography>
        </div>
        <ThemeSwitcher />
      </div>
    </div>
  );
}
