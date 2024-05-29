import {AdminSidebarTab} from "@/shared/types";

export const ADMIN_SIDEBAR_TABS: AdminSidebarTab[] = [
    {
        title: "Главная",
        url: "/admin",
    },
    {
        title: "Целевая аудитория",
        url: "/admin/audience",
    },
    {
        title: "Настройка курсов",
        url: "/admin/courses"
    }
]