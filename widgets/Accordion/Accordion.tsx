import React, {
    useState
} from 'react';
import FaqAccordionItem from "@/entities/FaqAccordionItem/FawAccordionItem";


const items = [
    {
        title: "Как проходит обучение на онлайн-курсах?",
        description: "Обучение проходит в формате видео-лекций на нашей интерактивной платформе. После приобретения курса, вы сразу же получаете письмо на почту с доступом в личный кабинет, в котором уже открыты все уроки приобретенного курса. Каждый урок состоит из видео-лекции по теме и нескольких десятков интерактивных заданий на отработку материала."
    },
    {
        title: "Я покупаю пакет уроков или онлайн-курс, сколько он действует?",
        description: "Нам надо поговорит"
    },
    {
        title: "Как быстро я достигну результатов?",
        description: "Нам надо поговорит"
    },
    {
        title: "Когда я могу начать обучение?",
        description: "Нам надо поговорит"
    },
    {
        title: "Как проходит обучение на индивидуальных занятиях?",
        description: "Нам надо поговорит"
    }
]

const Accordion = () => {
    const [activeAccordId, setActiveAccordId] = useState<number | null>(null);

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
            {items.map((el, idx) => (
                <FaqAccordionItem
                    func={() => (idx === activeAccordId ? setActiveAccordId(null) : setActiveAccordId(idx))}
                    key={idx}
                    title={el.title}
                    description={el.description}
                    isOpen={idx === activeAccordId}
                />
            ))}
        </div>
    );
};

export default Accordion;