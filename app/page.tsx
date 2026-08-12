"use client";

export default function Home() {
  return (
    <div className='h-screen w-full bg-[url("/img/background.png")] bg-center bg-cover p-8'>
      <div className="flex flex-col gap-4 font-thin text-white">
        {/* HeiBuNeko's Avatar and Name */}
        <div className="flex items-center gap-4">
          <div className='size-14 rounded-full bg-[url("/img/avatar.jpg")] bg-center bg-cover' />
          <div className="text-5xl">HeiBuNeko</div>
        </div>
        {/* HeiBuNeko's Description */}
        <div className="text-3xl">Scientist working on creating NekoMusume</div>
      </div>
    </div>
  );
}
