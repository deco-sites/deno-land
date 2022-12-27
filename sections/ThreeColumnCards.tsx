import Image from "$live/std/ui/components/Image.tsx";
import type { Image as LiveImage } from "$live/std/ui/types/Image.ts";

export interface Props {
  firstColumn: { svgIcon: string; title: string; subTitle: string };
  secondColumn: { svgIcon: string; title: string; subTitle: string };
  thirdColumn: { svgIcon: string; title: string; subTitle: string };
}

export default function ThreeColumnCards(
  { firstColumn, secondColumn, thirdColumn }: Props,
) {
  return (
    <div class="flex justify-between flex-col gap-11 lg:flex-row lg:gap-[8%] mt-16 w-full max-w-screen-xl m-auto">
      <div class="flex items-start flex-row-reverse gap-8 lg:flex-col lg:gap-9">
        <div
          class="w-16"
          dangerouslySetInnerHTML={{ __html: firstColumn.svgIcon }}
        >
        </div>
        <div class="inline space-y-3 lg:space-y-4">
          <h3 class="font-bold text-blue-dark text-[1.375rem] md:text-3xl lg:text-4xl">
            {firstColumn.title}
          </h3>
          <p class="text-blue-light font-medium md:text-xl lg:text-2xl">
            {firstColumn.subTitle}
          </p>
        </div>
      </div>
      <div class="flex items-start flex-row-reverse gap-8 lg:flex-col lg:gap-9">
        <div
          class="w-16"
          dangerouslySetInnerHTML={{ __html: secondColumn.svgIcon }}
        >
        </div>
        <div class="inline space-y-3 lg:space-y-4">
          <h3 class="font-bold text-blue-dark text-[1.375rem] md:text-3xl lg:text-4xl">
            {secondColumn.title}
          </h3>
          <p class="text-blue-light font-medium md:text-xl lg:text-2xl">
            {secondColumn.subTitle}
          </p>
        </div>
      </div>
      <div class="flex items-start flex-row-reverse gap-8 lg:flex-col lg:gap-9">
        <div
          class="w-16"
          dangerouslySetInnerHTML={{ __html: thirdColumn.svgIcon }}
        >
        </div>
        <div class="inline space-y-3 lg:space-y-4">
          <h3 class="font-bold text-blue-dark text-[1.375rem] md:text-3xl lg:text-4xl">
            {thirdColumn.title}
          </h3>
          <p class="text-blue-light font-medium md:text-xl lg:text-2xl">
            {thirdColumn.subTitle}
          </p>
        </div>
      </div>
    </div>
  );
}
