export interface Props {
  themeTitle: string;
  title: string;
  subTitle: string;
}

export default function SectionTitle({ themeTitle, title, subTitle }: Props) {
  return (
    <div class="w-full max-w-screen-2xl mt-8 px-6">
      <div class="bg-gradient-15 from-blue-dark to-blue-super-light h-10 w-24 md:h-14 md:w-36 rounded-full flex justify-center items-center ml-0 md:m-auto">
        <span class="bg-secondary text-primary text-base md:text-2xl font-bold h-[34px] w-[90px] md:h-[48px] md:w-[136px] rounded-full flex justify-center items-center">
        </span>
        <span class="absolute colorWash text-primary text-base md:text-2xl font-bold h-[34px] w-[106px] md:h-[48px] md:w-[136px] rounded-full flex justify-center items-center">
          {themeTitle}
        </span>
      </div>
      <h2 class="font-bold text-blue-dark text-3xl mb-4 mt-5 md:my-5 md:text-5xl md:text-center lg:text-6xl">
        {title}
      </h2>
      <p class="font-medium text-blue-light text-xl md:text-2xl md:text-center">
        {subTitle}
      </p>
    </div>
  );
}
