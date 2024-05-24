import React from 'react';
import {withMainPageLayout} from "@/layouts/MainLayout/MainPageLayout";
import LanguageCourse from "@/entities/LanguageCourse/LanguageCourse";


const Page = ({params}: {params: {id: number}}) => {
    return (
        <>
            <LanguageCourse id={params.id}/>
        </>
    );
};

export default withMainPageLayout(Page);