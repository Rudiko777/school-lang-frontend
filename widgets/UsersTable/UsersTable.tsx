'use client'
import React from 'react';
import {useTypedSelector} from "@/processes/redux/FeaturesCourses/SelectorCourses.ts";

const UsersTable = () => {
    const token = useTypedSelector(state => state.token)
    return (
        <div>

        </div>
    );
};

export default UsersTable;