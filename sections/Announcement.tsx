

export interface Props{
    visible: boolean,
    text: string,
    link: string,
    bgColor: string,
}

export default function Announcement({visible, text, link, bgColor}: Props){
    return(
        <div class={visible ? "block" :  "hidden"} style={"background-color:" + bgColor}>
            <a href={link} target="_blank" class="text-2xl block text-center text-secondary font-bold w-full py-3">
                {text}
            </a>
        </div>
    )
}