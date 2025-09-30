/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import Image from "next/image";

export default function Nosotros({ah, index}:{ah:any,index:number}) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className={`container flex flex-col items-center ${(index + 1) % 2 == 0 ?'md:flex-row' : "md:flex-row-reverse" } justify-center gap-8 px-4 md:px-6`}>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {ah.title}
          </h2>
          <p className="max-w-[600px] text-justify md:text-base/relaxed lg:text-base/relaxed xl:text-base/relaxed">
            {ah.description}
          </p>
        </div>
        <div className="flex-1 gap-4">
          <Image
            src={ah.image}
            width={1000}
            height={1000}
            alt="About Us"
            priority
            className="overflow-hidden rounded-xl object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
