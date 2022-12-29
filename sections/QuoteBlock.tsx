import Image from "$live/std/ui/components/Image.tsx";
import type { Image as LiveImage } from "$live/std/ui/types/Image.ts";

import QuillText from "$start/sections/QuillText.tsx";
import type { HTML } from "$live/std/ui/types/HTML.ts";

export interface Props {
  textDesk: HTML;
  textMob: HTML;
  images: { image: LiveImage; link: string }[];
}

export default function QuoteBlock({ textDesk, textMob, images }: Props) {
  return (
    <div class="bg-gradient-15 from-blue-dark to-blue-super-light py-14 px-6 lg:pt-24 lg:pb-20 mt-16">
      <div class="w-full max-w-screen-xl m-auto">
        <blockquote class="text-secondary font-semibold text-2xl lg:text-[2.75rem] leading-tight text-left md:text-center hidden md:block">
          <QuillText html={textDesk} />
        </blockquote>
        <blockquote class="text-secondary font-semibold text-2xl lg:text-[2.75rem] leading-tight text-left md:text-center block md:hidden">
          <QuillText html={textMob} />
        </blockquote>
        <div class="flex flex-wrap justify-items-start md:justify-center items-center mt-11 gap-8 md:gap-20">
          {images.map((image) => {
            return (
              <a
                href={image.link}
                target="_blank"
                class="opacity-80 hover:opacity-100"
              >
                <picture class="inset-0">
                  <source
                    srcset={image.image}
                  />
                  <Image
                    class="object-cover inset-0 w-[100px] md:w-[200px]"
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
