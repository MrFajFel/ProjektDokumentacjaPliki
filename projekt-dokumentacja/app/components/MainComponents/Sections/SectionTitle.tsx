import { PropsWithChildren } from "react";



export default function SectionTitle(props: PropsWithChildren<{id: string}>) {
    return(
        <div id={props.id} className="scroll-mt-12 mt-10 ml-5 font-bold text-gray-500 dark:text-shadow-black dark:text-shadow-sm">
            {props.children}
        </div>
    );
}