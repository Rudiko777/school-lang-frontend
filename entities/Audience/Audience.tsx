'use client'
import React, {JSX, useEffect, useState} from 'react';
import styles from './Audience.module.css'
import {AudienceProps} from "@/entities/Audience/Audience.props";
import Image from "next/image";
import Htag from "@/shared/ui-kit/Htag/Htag";
import Ptag from "@/shared/ui-kit/P/Ptag";

const Audience = ({whom, description, image, id}: AudienceProps): JSX.Element => {
    const [file, setFile] = useState();
    useEffect(() => {
            try {
                fetch(`http://localhost:8080/image/${id}`, {
                    method: "POST",
                }).then(response => response.blob())
                    .then(data => {
                        const file = new File([data], 'image.jpg', {type: 'image/jpeg'});

                        // @ts-ignore
                        setFile(URL.createObjectURL(file));
                    })
                    .catch(error => {
                        console.log(error);
                    });
            } catch (error) {
                console.log(error)
            }
        }, [whom, description, image, id]
    )
    
    return (
        <div className={styles.container}>
            <img src={file} alt={"Картинка"}/>
            <Htag type={"h3-titleAdv"} className={styles.title}>{whom}</Htag>
            <Ptag type={"medium"}>{description}</Ptag>
        </div>
    );
};

export default Audience;