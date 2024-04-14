import React, {JSX} from 'react';
import styles from './ButtonSocial.module.css'
import {ButtonSocialProps} from "@/shared/ui-kit/ButtonSocial/ButtonSocial.props";
import cn from 'classnames'
import VK from '../../../public/login/vk.svg'
import Yandex from '../../../public/login/yandex.svg'
import Gos from '../../../public/login/gos.svg'

const ButtonSocial = ({social, className, ...props}: ButtonSocialProps): JSX.Element => {

    return (
        <button className={cn(styles.buttonSocial, className)} {...props}>
            <div className={styles.block}>
                {social === 'vk' && <VK/>}
                {social === 'yandex' && <Yandex/>}
                {social === 'gos' && <Gos/>}
                {social === 'vk' && <span>Через Вконтакте</span>}
                {social === 'yandex' && <span>Войти с Яндекс ID</span>}
                {social === 'gos' && <span>Войти через Госуслуги</span>}
            </div>
        </button>
    );
};

export default ButtonSocial;