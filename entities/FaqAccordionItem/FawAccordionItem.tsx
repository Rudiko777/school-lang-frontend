import React, {DetailedHTMLProps, HTMLAttributes, useEffect, useRef, useState} from "react";
import cn from "classnames";
import styles from "@/widgets/Accordion/Accordion.module.css";
import Htag from "@/shared/ui-kit/Htag/Htag";
import ButtonAccordion from "@/shared/ui-kit/ButtonAccordion/ButtonAccordion";
import Ptag from "@/shared/ui-kit/P/Ptag";
import Button from "@/shared/ui-kit/Button/Button.tsx";
import {CourseModuleProps} from "@/app/_types";
import {useDispatch} from "react-redux";
import {actions} from "@/processes/redux/FeaturesCourses/ScoreStudent.slice.ts";

interface AccordionProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    title: string,
    description: string,
    func: any,
    isOpen: boolean,
    activeModules: CourseModuleProps[] | null,
    fullName: string,
    idModule: number,
    courseId: number,
    refetch: any
}

const FaqAccordionItem = ({ title, refetch, isOpen, courseId, idModule, fullName, description, activeModules, func, className, ...props }: AccordionProps) => {
    const reference = useRef<HTMLDivElement | null>(null)
    const[active, setActive] = useState<boolean | null>(false)
    const[action, setAction] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        activeModules?.forEach((el) => {
            if (title == el.title){
                setActive(true)
                return
            }
        })
    }, [action]);

    const addActiveModule = async () => {
        const data = {
            fullName: fullName,
            score: 50,
            idActiveModule: idModule,
            courseId: courseId
        }
        try {
            const res = await fetch(`http://localhost:8080/api/v1/bestStudents/plus`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data),
            }).then(() => {
                setActive(true)
                dispatch(actions.plusScore(50))
                refetch()
            });
        } catch (error) {
            console.error(error)
        }
    }

    const deleteActiveModule = async () => {
        const data = {
            fullName: fullName,
            score: 50,
            idActiveModule: idModule,
            courseId: courseId
        }

        try {
            const res = await fetch(`http://localhost:8080/api/v1/bestStudents/minus`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data),
            }).then(() => {
                setActive(false)
                dispatch(actions.minusScore(50))
                refetch()
            });
        } catch (error) {
            console.error(error)
        }
    }




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
                    <Button className={styles.btn} size={"small"} typeBtn={"outlined"} color={"purple"}
                    onClick={active ? deleteActiveModule : addActiveModule}
                    >
                        {active ? "Нажмите, если думаете что не уверены" : "Нажмите, если вы прошли модуль"}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default FaqAccordionItem;