import { apply, tw } from "twind";
import { animation, css } from "twind/css";
import Image from "$live/std/ui/components/Image.tsx";
import type { Image as LiveImage } from "$live/std/ui/types/Image.ts";

export interface Props {
  image: LiveImage;
  imageMobile: LiveImage;
  altText: string;
  title: string;
  subTitle: string;
}

export default function Banner(
  { image, imageMobile, altText, subTitle, title }: Props,
) {
  return (
    <div class="relative">
      <picture class="inset-0">
        <source
          media="(max-width: 1029px)"
          srcset={imageMobile}
        />
        <source
          media="(min-width: 1030px)"
          srcset={image}
        />
        <Image
          class="object-cover w-full h-full inset-0 h-[125vw] md:h-auto"
          sizes="(max-width: 640px) 75vw, 50vw"
          src={image}
          alt={altText}
          width={300}
          height={300}
        />
      </picture>
      <div class="h-full w-full absolute text-secondary top-0">
        <div class="flex flex-col justify-center h-full w-full max-w-screen-xl m-auto px-5">
          <p class="text-3xl">{subTitle}</p>
          <h1 class="text-5xl lg:text-5xl xl:text-7xl max-w-md font-bold mt-2 md:mt-8">
            {title}
          </h1>
          <div class="inline-flex gap-4 flex-col lg:gap-7 lg:flex-row mt-8 md:mt-16">
            <button class="flex justify-center items-center bg-primary h-12 px-5 rounded-[0.375rem] hover:bg-primary-opacity font-medium w-[160px]">
              Installation
            </button>
            <button class="flex justify-center items-center bg-primary h-12 px-5 rounded-[0.375rem] hover:bg-primary-opacity font-medium w-[160px]">
              Documentation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
