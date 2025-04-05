import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";
import Image from "next/image";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Digital Alchemist of Game Worlds
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            &quot;My journey into game development is driven by a passion for
            crafting immersive and interactive experiences. With Unity as my
            spellbook and C# as my incantation, I bring virtual worlds to life.
            From designing engaging gameplay mechanics to optimizing
            performance, I strive to create seamless and captivating experiences
            for players. My expertise spans game design, physics simulation, AI
            behavior, and UI/UX, ensuring that every project I work on is both
            technically solid and visually stunning. Join me as I explore the
            endless possibilities of game development and push the boundaries
            of interactive entertainment.&quot;
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            5+ <sub className="font-semibold text-base">Notable Achievements</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            4+ <sub className="font-semibold text-base">Hackathons</sub>
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}>
          <Image
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs?username=AnishDogra&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="AnishDogra's Top Languages"
            width={600}
            height={400}
            priority={true}
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <Imagege
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=AnishDogra&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="AnishDogra's GitHub Stats"
            width={600}
            height={400}
            priority={true}
          />
        </ItemLayout>
ge
        <ItemLayout className={"col-span-full"}>
          <Image
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=unity,csharp,blender,cpp,photoshop,canva,github,git,linux,vscode,netlify,vercel`}
            alt="AnishDogra's Skills"
            width={600}
            height={400}
            priority={true}
          />ge
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Image
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL}?user=AnishDogra&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`}
            alt="AnishDogra's GitHub Streak Stats"
            width={600}
            height={400}
            priority={true}
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>ge
          <Link
            href="https://github.com/AnishDogra/Nextjs-contentlayer-blog"
            target="_blank"
            className="w-full"
          >
            <Image
              className="w-full h-auto"
              src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/pin/?username=AnishDogra&repo=Nextjs-contentlayer-blog&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
              alt="AnishDogra's Pinned Repository"
              width={600}
              height={400}
              priority={true}
            />export default AboutDetails;
          </Link>        </ItemLayout>      </div>
    </section>
  );
};

export default AboutDetails;
