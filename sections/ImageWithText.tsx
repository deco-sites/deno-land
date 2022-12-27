import Image from "$live/std/ui/components/Image.tsx";
import type { Image as LiveImage } from "$live/std/ui/types/Image.ts";

export interface Props {
  title: string;
  text: string;
  imagePosition?: string;
  image: LiveImage;
}

export default function ImageWithText(
  { title, text, imagePosition, image }: Props,
) {
  const commonCss =
    "flex max-w-screen-xl m-auto gap-5 md:gap-10 lg:gap-12 mt-14";
  const cssRight = commonCss + " flex-row-reverse ";
  const cssLeft = commonCss + " flex-row";

  return (
    <div class={imagePosition == "right" ? cssRight : cssLeft}>
      <div class="w-full rounded-lg md:rounded-2xl lg:w-[70%] bg-azure card-shadow">
        <img src={image} alt="" class="p-3.5 lg:py-11 lg:px-10" />
      </div>
      <div class="flex flex-col gap-2 justify-center items-center">
        <h3 class="w-full text-left font-bold text-primary text-3xl md:text-4xl">
          {title}
        </h3>
        <p class="text-left text-blue-light font-medium text-lg md:text-2xl">
          {text}
        </p>
      </div>
    </div>
  );
}
