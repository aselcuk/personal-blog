export type Theme = {
    colors: unknown;
    isDark: boolean;
}

export const defaultTheme: Theme = {
    colors: {
        bgColor: '#F6F6F6',
        borderColor: '#B6B6B6',
        cardBgColor: '#FFFFFF',
        primaryTextColor: '#4B4B4B',
        secondaryTextColor: '#D72626',
        subTextColor: '#959595'
    },
    isDark: false
};

export const darkTheme: Theme = {
    colors: {
        bgColor: '#3a3a3a',
        borderColor: '#B6B6B6',
        cardBgColor: '#484848',
        primaryTextColor: '#FFFFFF',
        secondaryTextColor: '#FF82EB',
        subTextColor: '#C4C4C4'
    },
    isDark: true
};