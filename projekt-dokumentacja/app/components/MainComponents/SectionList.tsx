import { PropsWithChildren } from "react";

export default function SectionList(props: PropsWithChildren){
    return(
        <section className="mt-10 md:sm:w-full md:sm:mr-0 md:sm:ml-0 md:lg:ml-20 md:lg:mr-20 md:lg:w-fit">
            {props.children}
        </section>
    );
}