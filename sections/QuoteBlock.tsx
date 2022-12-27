import Image from "$live/std/ui/components/Image.tsx";
import type { Image as LiveImage } from "$live/std/ui/types/Image.ts";

export interface Props {
  text: string;
  images: { image: LiveImage; link: string }[];
}

export default function QuoteBlock({ text, images }: Props) {
  return (
    <div class="bg-gradient-15 from-blue-dark to-blue-super-light pb-14 lg:pt-24 lg:pb-20 mt-16">
      <div class="w-full max-w-screen-xl m-auto">
        <blockquote class="text-secondary font-semibold text-2xl lg:text-5xl leading-tight text-center">
          {text}
        </blockquote>
        <div class="flex justify-center items-center mt-11 gap-20">
          {images.map((image) => {
            return (
              <a href={image.link} target="_blank">
                <picture class="inset-0">
                  <source
                    srcset={image.image}
                  />
                  <Image
                    class="object-cover inset-0"
                    sizes="(max-width: 640px) 75vw, 50vw"
                    src={image.image}
                    width={200}
                    height={40}
                  />
                </picture>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
