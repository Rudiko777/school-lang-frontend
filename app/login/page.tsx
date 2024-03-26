import React from 'react';
import styles from './page.module.css'
import Logo from '../../public/login/logo.svg'
import ButtonSocial from "@/components/ui-kit/ButtonSocial/ButtonSocial";
import Link from "next/link";
import door from '../../public/login/door.png'
import Image from "next/image";
import Htag from "@/components/ui-kit/Htag/Htag";
import Ptag from "@/components/ui-kit/P/Ptag";
import Input from "@/components/Input/Input";
import Button from "@/components/ui-kit/Button/Button";

const Page = () => {
    return (
        <div className={styles.block}>
            <div className={styles.contentLogin}>
                <Link href={'/'}>
                    <Logo/>
                </Link>
                <div className={styles.loginTitle}>
                    <Htag type={'h2-titleBlock'}>
                        Вход в кабинет
                    </Htag>
                    <Ptag type={'medium'}>
                        На указанный номер поступит звонок с номера +7 (999) 999-ХХ-ХХ
                    </Ptag>
                </div>
                <div className={styles.loginActions}>
                    <Input placeholder={'+ 7 900 123-45-67'} inputSize={'large'} state={'default'} type={'tel'} label={'Телефон'}/>
                    <Button size={'large'} typeBtn={'contained'} color={'purple'} className={styles.continue}>
                        Продолжить
                    </Button>
                </div>
                <div className={styles.or}>
                    <span className={styles.orLeft}></span><span className={styles.orContent}>или</span><span className={styles.orRight}></span>
                </div>
                <div className={styles.socialBlock}>
                    <ButtonSocial social={'vk'}/>
                    <ButtonSocial social={'yandex'}/>
                    <ButtonSocial social={'gos'}/>
                </div>
                <div className={styles.registration}>
                    <Ptag type={'medium'}>
                        Если вы не зарегистрировались, нажмите на кнопку
                    </Ptag>
                    <Link href={'/registration'}>
                        <Button size={'medium'} typeBtn={'contained'} color={'purple'} className={styles.registrationButton}>
                            Зарегистрироваться
                        </Button>
                    </Link>
                </div>
            </div>
            <Image src={door} alt={'LoginPage'}/>
        </div>
    );
};

export default Page;