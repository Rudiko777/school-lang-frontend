import React, {JSX} from 'react';
import styles from './Footer.module.css'
import {FooterProps} from "@/templates/Footer/Footer.props";
import Logo from '@/public/footer/logo.svg'
import Ptag from "@/shared/ui-kit/P/Ptag";
import cn from "classnames";
import mir from '@/public/footer/mir.png'
import visa from '@/public/footer/visa.png'
import master from '@/public/footer/master.png'
import Image from "next/image";
import Htag from "@/shared/ui-kit/Htag/Htag";
import Link from "next/link";
import Facebook from '@/public/footer/facebook.svg'
import Youtube from '@/public/footer/youtube.svg'
import VK from '@/public/footer/vk.svg'
import Twitter from '@/public/footer/twitter.svg'

const Footer = ({className, ...props}: FooterProps): JSX.Element => {
    return (
        <footer className={className} {...props}>
            <div className={styles.footerContainer}>
                <div className={styles.footerContent}>
                    <div className={styles.company}>
                        <Logo/>
                        <Ptag type={'small'} className={cn(styles.text, styles.p)}>
                            Language2Go — интерактивная платформа для легкого, удобного<br/> и быстрого изучения иностранных языков.
                        </Ptag>
                        <div className={styles.sponsors}>
                            <Image src={visa} alt={'visa'}/>
                            <Image src={master} alt={'masterCard'}/>
                            <Image src={mir} alt={'mir'}/>
                        </div>
                    </div>
                    <div className={styles.Education}>
                        <Htag type={'h3-footer'}>
                            Обучение
                        </Htag>
                        <ul className={styles.List}>
                            <li className={styles.Item}>
                                <Link href={'#'}>
                                    Все языки
                                </Link>
                            </li>
                            <li className={styles.Item}>
                                <Link href={'#'}>
                                    Взрослым
                                </Link>
                            </li>
                            <li className={styles.Item}>
                                <Link href={'#'}>
                                    Детям и подросткам
                                </Link>
                            </li>
                            <li className={styles.Item}>
                                <Link href={'#'}>
                                    Мини-курсы
                                </Link>
                            </li>
                            <li className={styles.Item}>
                                <Link href={'#'}>
                                    Тренажеры
                                </Link>
                            </li>
                            <li className={styles.Item}>
                                <Link href={'#'}>
                                    Индивидуальные занятия
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.Information}>
                        <Htag type={'h3-footer'}>
                            Информация
                        </Htag>
                        <ul className={styles.List}>
                            <li className={styles.Item}>
                                <Link href={'#'}>
                                    О нас
                                </Link>
                            </li>
                            <li className={styles.Item}>
                                <Link href={'#'}>
                                    Отзывы
                                </Link>
                            </li>
                            <li className={styles.Item}>
                                <Link href={'#'}>
                                    Новости
                                </Link>
                            </li>
                            <li className={styles.Item}>
                                <Link href={'#'}>
                                    Частые вопросы
                                </Link>
                            </li>
                            <li className={styles.Item}>
                                <Link href={'#'}>
                                    Условия оплаты
                                </Link>
                            </li>
                            <li className={styles.Item}>
                                <Link href={'#'}>
                                    Контакты
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.Contacts}>
                        <Htag type={'h3-footer'}>
                            Контакты
                        </Htag>
                        <a href={'tel:+74951563550'} className={styles.contact}>+7 (495) 156-35-50</a>
                        <div className={styles.mailContainer}>
                            <a href={'mailto:info@language2go.ru'} className={styles.mail}>info@language2go.ru</a>
                            <a href={'mailto:support@language2go.ru'} className={styles.mail}>support@language2go.ru</a>
                        </div>
                        <p className={styles.geolocation}>101000, Москва, Россия</p>
                        <div className={styles.socials}>
                            <Facebook/>
                            <Youtube/>
                            <VK/>
                            <Twitter/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                <div className={styles.copyrightContent}>
                    <p className={styles.copyrightTitle}>
                        © 2022 Language to go
                    </p>
                    <div className={styles.safety}>
                        <Link href={'#'}>Правовая оговорка</Link>
                        <Link href={'#'}>Пользовательское соглашение</Link>
                        <Link href={'#'}>Политика конфиденциальности</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;