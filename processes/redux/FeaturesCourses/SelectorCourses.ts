'use client'
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "@/processes/redux/store";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
