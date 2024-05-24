import {useTypedSelector} from "@/processes/redux/FeaturesCourses/SelectorCourses.ts";

export const useIsTokenSelector = () => {
    const token = useTypedSelector(state => state.token)
    return token?.token !== null;
}