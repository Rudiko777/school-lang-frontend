'use client'
import React, {useEffect, useState} from 'react';

const Page = () => {
    const[fullName, setFullName] = useState<any>()
    const[item, setItem] = useState<string | null>("")

    useEffect(() => {
        setItem(localStorage.getItem("token"))
        fetchContent();
    }, []);

    async function fetchContent(){
        const res = await fetch("http://localhost:8080/info", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        })

        if (res.ok){
            const json = await res.text()
            setFullName(json)
        }
    }

    return (
        <div>
            Lk
            {
                item !== null ? <p>Signed as {fullName}</p> : <p>Unauthorized</p>
            }
        </div>
    );
};

export default Page;