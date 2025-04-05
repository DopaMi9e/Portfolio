import React from "react";
import ItemLayout from "./ItemLayout";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
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
            technically solid and visually stunning.&quot;
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

        {/* Updated Skills Section */}
        <ItemLayout className={"col-span-full"}>
          <a
            href="https://skillicons.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center"
          >
            <img
              src="https://skillicons.dev/icons?i=unity,csharp,blender,photoshop,github,canva,linux,git,vscode&theme=light"
              alt="My Skills"
              className="w-auto h-12"
            />
          </a>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
