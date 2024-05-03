import {useTypedSelector} from "@/processes/redux/FeaturesCourses/SelectorCourses";
import {useGetLanguageCoursesQuery} from "@/processes/redux/api/LanguageCoursesAPI";

export const useLoadByData = () => {
    const userLanguageCourses = useTypedSelector(state => state.user?.languageCourses)
    const {data} = useGetLanguageCoursesQuery()

    const filteredFeatures = data?.filter((el) => {
        if (Array.from(userLanguageCourses)?.includes(Number(el.id))){
            return el
        }
    })
    return filteredFeatures || []
}