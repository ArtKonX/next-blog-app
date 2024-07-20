import { DM_Serif_Display, Roboto } from 'next/font/google';

const dmSerifDisplay400 = DM_Serif_Display({ weight: '400', subsets: ["latin"] });

const roboto = Roboto({ weight: '300', subsets: ["latin"] })

// ...Еще больше шрифтов

export { dmSerifDisplay400, roboto }