'use client'
import React, {
    useEffect,
    useState
} from 'react';
import FaqAccordionItem from "@/entities/FaqAccordionItem/FawAccordionItem";
import {CourseModuleProps} from "@/app/_types";
import {BestStudentsProps, useGetBestStudentByFullNameQuery} from "@/processes/redux/api/BestStudentsAPI.ts";
import {useDispatch} from "react-redux";
import {actions} from "@/processes/redux/FeaturesCourses/ScoreStudent.slice.ts";


const Accordion = ({modules, fullName, courseId}: {modules: CourseModuleProps[], fullName: string, courseId: number}) => {
    const [activeAccordId, setActiveAccordId] = useState<number | null>(null);
    const {data, refetch} = useGetBestStudentByFullNameQuery(fullName)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(data)
        dispatch(actions.addEducationStudent({fullName: data?.fullName, score: data?.score}))
    }, []);

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
            {modules?.map((el, idx) => (
                <FaqAccordionItem
                    func={() => (idx === activeAccordId ? setActiveAccordId(null) : setActiveAccordId(idx))}
                    key={idx}
                    title={el.title}
                    description={el.description}
                    isOpen={idx === activeAccordId}
                    activeModules={data ? data?.modules : null}
                    fullName={fullName}
                    idModule={el.id}
                    courseId={courseId}
                    refetch={refetch}
                />
            ))}
        </div>
    );
};

export default Accordion;