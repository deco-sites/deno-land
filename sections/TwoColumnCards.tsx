export interface Props {
  firstColumn: { svgIcon: string; title: string; subTitle: string };
  secondColumn: { svgIcon: string; title: string; subTitle: string };
}

export default function TwoColumnCards(
  { firstColumn, secondColumn }: Props,
) {
  return (
    <div class="flex justify-between flex-col gap-11 lg:flex-row lg:gap-[8%] mt-16 w-full max-w-screen-xl m-auto px-6">
      <div class="flex justify-between items-start flex-row-reverse gap-4 lg:flex-row lg:gap-9 w-full md:w-1/2">
        <div
          class="w-20"
          dangerouslySetInnerHTML={{ __html: firstColumn.svgIcon }}
        >
        </div>
        <div class="inline space-y-3 lg:space-y-4 w-3/5 md:w-full">
          <h3 class="font-bold text-blue-dark text-[1.375rem] md:text-3xl lg:text-4xl">
            {firstColumn.title}
          </h3>
          <p class="text-blue-light font-medium md:text-xl lg:text-2xl">
            {firstColumn.subTitle}
          </p>
        </div>
      </div>
      <div class="flex justify-between items-start flex-row-reverse gap-8 lg:flex-row lg:gap-9 w-full md:w-1/2">
        <div
          class="w-20"
          dangerouslySetInnerHTML={{ __html: secondColumn.svgIcon }}
        >
        </div>
        <div class="inline space-y-3 lg:space-y-4 w-3/5 md:w-full">
          <h3 class="font-bold text-blue-dark text-[1.375rem] md:text-3xl lg:text-4xl">
            {secondColumn.title}
          </h3>
          <p class="text-blue-light font-medium md:text-xl lg:text-2xl">
            {secondColumn.subTitle}
          </p>
        </div>
      </div>
    </div>
  );
}
