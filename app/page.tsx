import Image from "next/image";
import Logo from "@/public/logo.png";
import { contacts, marketingImg } from "@/constant";
import { ContactType, MarketingImgType } from "@/types/type";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="h-screen w-screen overflow-hidden relative">
      <div className="hidden sm:block absolute top-1/4 left-0">
        <img src="/thumbnail-grass.svg" alt="grass" />
      </div>
      <div className="hidden sm:block absolute top-28 right-0 translate-x-[50%]">
        <Image
          src="/plate.png"
          alt="plate"
          width={540}
          height={540}
          className=""
        />
      </div>
      <div className="flex-center flex-col max-w-7xl mx-auto h-full text-center gap-y-5">
        <div className="flex items-center justify-center lg:justify-start gap-2 font-kgBlankSketch text-sm text-primary md:gap-5 z-20">
          <Image
            width={34}
            height={34}
            src="/location.svg"
            alt="Location"
            className="size-8"
          />
          <p>Arjan</p>
          <div className="h-2 w-1 rounded-lg bg-secondary"></div>
          <p>Business bay</p>
          <div className="h-2 w-1 rounded-lg bg-secondary"></div>
          <p>Silicon Oasis</p>
          <Image
            src="/country.svg"
            width={40}
            height={40}
            loading="lazy"
            alt="country"
            className="size-8 rounded-full"
          />
        </div>
        <div className="relative flex flex-col gap-y-5 items-center">
          <div className="hidden sm:block absolute -left-40 -top-5 w-[117px] h-[100px]">
            <div className="relative w-[117px] h-[100px]">
              <Image
                src={Logo}
                fill
                placeholder="blur"
                alt="logo"
                priority={true}
                quality={100}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-center font-kgBlankSketch text-3xl !leading-[120%] text-[#1A1B4B]/80 md:text-4xl lg:text-5xl xl:text-6xl">
              Welcome to Chef Irina <br />
              Restaurant.
            </h1>

            <h2 className="font-gilroyLight text-text lg:text-2xl">
              Our website is under maintenance. Find us on <br /> the listed
              platforms below.
            </h2>
          </div>

          <div className="flex-center gap-5 sm:gap-12 w-full p-5 border-dotted border-y-[1.4px]  border-[rgba(26,27,75,0.30)] my-3 sm:mt-10">
            {marketingImg.map((item: MarketingImgType) => (
              <Image
                key={item.alt}
                src={item.src}
                alt={item.alt}
                width={120}
                height={50}
                className={`w-[70px] sm:w-[120px] sm:h-[50px]`}
              />
            ))}
          </div>
          <div className="sm:flex-center gap-5">
            <p className="hidden sm:block text-text text-xs lg:text-base font-gilroySemibold">
              Copyrights 2024 - Chef Irina Restautrant
            </p>
            <div className="hidden sm:block w-1 h-8 bg-border rounded-lg"></div>
            {contacts.map((item: ContactType, idx: number) => (
              <div
                className="flex-center sm:flex gap-2 text-xs lg:text-base "
                key={item.label}
              >
                {item.icon && (
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={20}
                    height={20}
                  />
                )}
                <p className="text-text">{item.label}: </p>
                <Link href={item.link}>
                  <p className="text-primary font-gilroySemiBold mt-[5px]">
                    {item.tel}
                  </p>
                </Link>
                {idx === 0 && (
                  <div className="hidden sm:block w-1 h-8 bg-border rounded-lg ml-2"></div>
                )}
              </div>
            ))}
            <p className="sm:hidden block text-text text-xs lg:text-base font-gilroySemibold mt-1">
              Copyrights 2024 - Chef Irina Restautrant
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
