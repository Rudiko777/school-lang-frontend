import React from 'react';
import {withMainPageLayout} from "@/layouts/MainLayout/MainPageLayout";
import LanguageCourse from "@/entities/LanguageCourse/LanguageCourse";


const Page = ({params}: {params: {id: number}}) => {
    return (
        <div>
            <LanguageCourse id={params.id}/>
        </div>
    );
};

export default withMainPageLayout(Page);