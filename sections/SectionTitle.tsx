
export interface Props{
    themeTitle: string,
    title: string,
    subTitle: string
}

export default function SectionTitle({themeTitle, title, subTitle} : Props){
    
    return(
        <div class="w-full max-w-screen-2xl m-auto mt-8">
            <div class="bg-gradient-15 from-primary to-primary-super-light h-14 w-36 rounded-full flex justify-center items-center m-auto">
                <span class="bg-secondary text-primary text-2xl font-bold h-11 w-11/12 rounded-full flex justify-center items-center">{themeTitle}</span>
            </div>
            <h2 class="font-bold text-primary text-3xl md:my-5 md:text-5xl md:text-center lg:text-6xl">{title}</h2>
            <p class="font-semibold text-primary-light text-xl md:text-2xl md:text-center">{subTitle}</p>
        </div>
    )

}