import { createContext } from "react";

export interface ThemeType {
    name: string;
    bgColor: string;
    fgColor: string;
}

export const ThemeContext = createContext<any|ThemeType>("");
