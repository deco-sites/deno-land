import Image from "$live/std/ui/components/Image.tsx";
import type { Image as LiveImage } from "$live/std/ui/types/Image.ts";

export interface Props {
  title: string;
  text: string;
  imagePosition?: string;
  image: LiveImage;
  backgroundAtImage?: boolean;
}

export default function ImageWithText(
  { title, text, imagePosition, image, backgroundAtImage = true }: Props,
) {
  const commonCss =
    "flex flex-col md:flex-row max-w-screen-xl m-auto gap-5 md:gap-10 lg:gap-12 mt-14 px-6";
  const cssRight = commonCss + " md:flex-row-reverse ";
  const cssLeft = commonCss + " md:flex-row";

  return (
    <div class={imagePosition == "right" ? cssRight : cssLeft}>
      <div
        class={`w-full rounded-lg md:rounded-2xl w-full lg:w-[70%] ${
          backgroundAtImage ? "bg-azure card-shadow" : ""
        }`}
      >
        <picture class="inset-0">
          <source
            srcset={image}
          />
          <Image
            class="object-cover inset-0 p-3.5 lg:py-11 lg:px-10 w-full"
            sizes="(max-width: 640px) 75vw, 50vw"
            src={image}
            width={200}
            height={40}
          />
        </picture>
      </div>
      <div class="flex flex-col gap-2 justify-center items-center">
        <h3 class="w-full text-left font-bold text-blue-dark text-3xl md:text-4xl">
          {title}
        </h3>
        <p class="text-left text-blue-light font-medium text-lg md:text-2xl">
          {text}
        </p>
      </div>
    </div>
  );
}
