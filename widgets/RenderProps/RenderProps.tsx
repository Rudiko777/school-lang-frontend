'use client'

import {useState} from "react";

interface RenderPropsLayoutProps{
    renderHeader: any,
    renderFooter: any,
    renderSidebarLeft?: any,
    renderSidebarRight?: any,
    renderMainContent: any
}

const RenderPropsLayout = ({
    renderHeader,
    renderFooter,
    renderSidebarLeft,
    renderSidebarRight,
    renderMainContent
}: RenderPropsLayoutProps) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <div className={"headerRenderProps"}>{renderHeader?.()}</div>
            <button onClick={() => setIsOpen(!isOpen)}>ClickMe!</button>
            <div>
                <div className={"sidebarLeft"}>{renderSidebarLeft?.(isOpen)}</div>
                <div className={"mainContent"}>{renderMainContent?.()}</div>
                <div className={"sidebarRight"}>{renderSidebarRight?.(isOpen)}</div>
            </div>
            <div className={"footerRenderProps"}>{renderFooter?.()}</div>
        </div>
    )
}

export default function RenderProps() {
    return(
        <RenderPropsLayout
            renderHeader={() => <header>Header</header>}
            renderFooter={() => <footer>Footer</footer>}
            renderMainContent={() => <div>MainContent</div>}
            renderSidebarLeft={(isOpen: boolean) => <div>{isOpen ? "Open" : "Closed"}</div>}
        />
    )
}