import { apply, tw } from "twind";
import { animation, css } from "twind/css";
import Image from "$live/std/ui/components/Image.tsx";
import type { Image as LiveImage } from "$live/std/ui/types/Image.ts";

export interface Props {
  image: LiveImage;
  altText: string;
  title: string;
  subTitle: string;
}

export default function Banner({ image, altText, subTitle, title }: Props) {
  return (
    <div class={tw`relative`}>
      <picture class={tw`inset-0`}>
        <source
          srcset={image}
        />
        <Image
          class="object-cover w-full h-full inset-0"
          sizes="(max-width: 640px) 75vw, 50vw"
          src={image}
          alt={altText}
          width={300}
          height={300}
        />
      </picture>
      <div class={tw`h-full w-full absolute text-secondary top-0`}>
        <div class="flex flex-col justify-center h-full w-full max-w-screen-xl m-auto">
          <p class="text-3xl">{subTitle}</p>
          <h1 class="text-7xl max-w-md font-bold mt-8">{title}</h1>
          <div class="inline-flex gap-4 flex-col lg:gap-7 lg:flex-row mt-16">
            <button class="flex items-center bg-primary h-12 px-5 rounded-[0.375rem] hover:bg-primary-opacity font-medium">
              Installation
            </button>
            <button class="flex items-center bg-primary h-12 px-5 rounded-[0.375rem] hover:bg-primary-opacity font-medium">
              Documentation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
