import React, {DetailedHTMLProps, HTMLAttributes, useRef} from "react";
import cn from "classnames";
import styles from "@/widgets/Accordion/Accordion.module.css";
import Htag from "@/shared/ui-kit/Htag/Htag";
import ButtonAccordion from "@/shared/ui-kit/ButtonAccordion/ButtonAccordion";
import Ptag from "@/shared/ui-kit/P/Ptag";

interface AccordionProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    title: string,
    description: string,
    func: any,
    isOpen: boolean
}

const FaqAccordionItem = ({ title, isOpen, description, func, className, ...props }: AccordionProps) => {
    const reference = useRef<HTMLDivElement | null>(null)
    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();
        func();
    };

    return (
        <div
            className={cn(styles.accordion, className, {
                [styles.active]: isOpen
            })}
            {...props}
        >
            <div className={styles.mainPart}>
                <Htag type={"h3-titleAdv"}>
                    {title}
                </Htag>
                <ButtonAccordion state={isOpen} onClick={handleClick} />
            </div>
            <div
                className={cn(styles.accordionCollapse, {
                    [styles.activeDesc]: isOpen
                })}
                style={isOpen ? {height: reference.current?.scrollHeight} : {height: "0px"}}
            >
                <div className={styles.body} ref={reference}>
                    <Ptag type={"medium"}>
                        {description}
                    </Ptag>
                </div>
            </div>
        </div>
    );
};

export default FaqAccordionItem;