'use client'
import React, {useEffect, useRef, useState} from 'react';
import styles from './page.module.css'
import Htag from "@/shared/ui-kit/Htag/Htag";
import Input from "@/shared/ui-kit/Input/Input";
import Button from "@/shared/ui-kit/Button/Button";

const Page = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const Input1RefWhom = useRef<HTMLInputElement>(null)
    const Input1RefDesc = useRef(null)
    const Input1RefImage = useRef(null)

    const [image, setImage] = useState("");
    const [whom, setWhom] = useState("");
    const [description, setDescription] = useState("");

    const [whomState, setWhomState] = useState("default");
    const [descState, setDescState] = useState("default");
    const [imageState, setImageState] = useState("default");


    const handleWhomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setWhom(e.target.value);
    };
    const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value);
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = () => {
                const base64Image = reader.result as string;
                setImage(base64Image);
            }

            reader.readAsDataURL(file);
        }
    };

    useEffect(() => {
        if (!whom) {
            setWhomState("errorFilled");
        } else {
            setWhomState("default");
        }

        if (!description) {
            setDescState("error");
        } else {
            setDescState("default");
        }

        const inputValue = fileInputRef.current?.value;

        if (!inputValue) {
            setImageState("error");
        } else {
            setImageState("default");
        }
        }, [whom, description]
    )

    const handleSubmit = () => {
        const formData = new FormData();
        formData.append("whom", whom);
        formData.append("description", description);
        formData.append("image", String(image.substring(image.indexOf('iV'))));

        console.log(String(image.substring(image.indexOf('iV'))));

        fetch("http://localhost:8080/save/targetAudience", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                window.location.href = "/"
            })
            .catch((error) => {
                console.error("Ошибка:", error);
            });
    };

    return (
        <div className={styles.page}>
            <Htag type={"h1-mainTitle"}>Добавьте новый продукт</Htag>
            <Input
                placeholder={"whom"}
                inputSize={"large"}
                state={"default"}
                label={"Whom"}
                type={"text"}
                onChange={handleWhomChange}
                value={whom}
            />
            <Input
                placeholder={"description"}
                inputSize={"large"}
                state={"default"}
                label={"Description"}
                type={"text"}
                onChange={handleDescriptionChange}
                value={description}
            />
            <Input
                placeholder={"whom"}
                inputSize={"large"}
                state={"default"}
                label={"Iamge"}
                type={"file"}
                onChange={handleImageChange}
                value={image}
            />
            <Button onClick={handleSubmit} size={"large"} typeBtn={"contained"} color={"purple"}>
                Отправить
            </Button>
        </div>
    );
};

export default Page;