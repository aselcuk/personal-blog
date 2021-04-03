export type Theme = {
    colors: {
        bgColor: string;
        borderColor: string;
        cardBgColor: string;
        primaryTextColor: string;
        secondaryTextColor: string;
        subTextColor: string;
    };
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
        bgColor: '#202127',
        borderColor: '#B6B6B6',
        cardBgColor: '#2c2c33',
        primaryTextColor: '#FFFFFF',
        secondaryTextColor: '#FF82EB',
        subTextColor: '#C4C4C4'
    },
    isDark: true
};