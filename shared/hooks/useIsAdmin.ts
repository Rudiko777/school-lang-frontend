import {useTypedSelector} from "@/processes/redux/FeaturesCourses/SelectorCourses";

export const useIsAdmin = () => {
    const user = useTypedSelector(state => state.user)
    return !!user?.roles.includes("ROLE_ADMIN");
}