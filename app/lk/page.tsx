'use client'
import React, {useEffect, useState} from 'react';
import Link from "next/link";
import {withAccountLayout} from "@/layouts/AccountLayout/AccountLayout";
import Avatar from "@/features/Avatar/Avatar";
import {useTypedSelector} from "@/processes/redux/FeaturesCourses/SelectorCourses";
import {useDispatch} from "react-redux";
import {actions as userActions} from "@/processes/redux/FeaturesCourses/User.slice";
import {actions as featureActions} from "@/processes/redux/FeaturesCourses/FeaturesCourses.slice";

const Page = () => {
    const[fullName, setFullName] = useState<any>()
    const[item, setItem] = useState<string | null>("")
    const user = useTypedSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        fetchContent()
        if (fullName){
            setItem(localStorage.getItem("token"))
        }
    }, []);

    function logout() {
        localStorage.removeItem("token")
        dispatch(userActions.deleteUser())
        dispatch(featureActions.deleteFeatures())
        window.location.href = "/"
    }

    async function fetchContent(){
        const res = await fetch("http://localhost:8080/info", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token")
            },
        })
        if (res.ok){
            const json = await res.text()
            setFullName(json)
        } else {
            localStorage.removeItem("token")
            window.location.href = "/"
        }
    }

    return (
        <div>
            Lk
            {
                item !== null ? <p>Signed as {fullName}</p> : <p>Unauthorized</p>
            }
            {
                item !== null ? <Link href={"/"} onClick={logout}>Logout</Link> : null
            }
            <Avatar fullName={fullName}/>
            {
                user?.gender
            }
        </div>
    );
};

export default withAccountLayout(Page);