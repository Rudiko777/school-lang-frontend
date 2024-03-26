import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

export interface ButtonSocialProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    social: 'vk' | 'gos' | 'yandex'
}