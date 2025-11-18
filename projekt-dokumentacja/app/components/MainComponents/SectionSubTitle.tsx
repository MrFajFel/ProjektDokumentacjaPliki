import { PropsWithChildren } from "react";



export default function SectionSubTitle(props: PropsWithChildren<{id: string}>){
    return(
        <div id={props.id} className="mt-10 scroll-mt-12">
            {props.children}
        </div>
    );
}