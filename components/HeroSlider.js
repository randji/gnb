import Image from "next/image";

export default function HeroSlider() {
  return (
    <div className="relative h-[450px] sm:h-[650px] lg:h-[700px] xl:h-[1200px] w-full overflow-hidden">
      <div className="absolute inset-0 w-full">
        <Image
          src="/imgGnb/camHero.jpeg"
          alt="Hero"
          priority
          width={1000}
          height={1000}
          className="object-center h-[300px] sm:h-[450px] lg:h-[600px] xl:h-[800px] w-full"
          sizes="100vw"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 to-transparent" />
      </div>

      <div className="absolute inset-0 flex flex-col text-white pl-2 sm:pl-8 top-[25%] sm:top-[25%]">
        <h1 className="mb-2 text-3xl sm:text-5xl lg:text-[85px]">GNB-PROTECT</h1>
        <h2 className="text-base sm:text-2xl lg:text-4xl">Votre sécurité au quotidien</h2>
      </div>
      <div className="absolute inset-0 flex flex-col justify-center top-60 sm:top-[250px] lg:top-[550px] xl:top-[550px]">
        <div className="bg-white w-fit mx-auto p-2 rounded-full">
        <div className="bg-black w-fit mx-auto rounded-full">
          <Image
            src="/imgGnb/GNB PROTECT LOGO BLANC SANS FOND.png"
            alt="Logo"
            width={100}
            height={100}
            className="w-[170px] sm:w-[190px] md:w-[190px] lg:w-[300px] xl:w-[350px]"
          />
        </div>
        </div>
      </div>
    </div>
  );
}
