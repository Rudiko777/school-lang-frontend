import React, {ChangeEventHandler, JSX, useState} from 'react';
import CheckBox from "@/shared/ui-kit/CheckBox/CheckBox";

const LevelFilter = (): JSX.Element => {
    const[primary, setPrimary] = useState<boolean>(true)
    const[medium, setMedium] = useState<boolean>(false)
    const[hard, setHard] = useState<boolean>(false)

    const handlePrimaryChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setPrimary(event.target.checked);
    };

    const handleMediumChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setMedium(event.target.checked);
    };

    const handleHardChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setHard(event.target.checked);
    };

    return (
        <div>
            <CheckBox isChecked={primary} onChange={handlePrimaryChange}>
                Начальный
            </CheckBox>
            <CheckBox isChecked={medium} onChange={handleMediumChange}>
                Средний
            </CheckBox>
            <CheckBox isChecked={hard} onChange={handleHardChange}>
                Высокий
            </CheckBox>
        </div>
    );
};

export default LevelFilter;