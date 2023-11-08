
interface LanguageProp {
    params: { lang: Locale }
}

interface Children {
  children: React.ReactNode
}

interface Header {
  header: {
    headerNavLinks: ({
        id: number;
        title: string;
        src: string;
        sublinks?: undefined;
    } | {
        id: number;
        title: string;
        src: string;
        sublinks: {
            id: number;
            title: string;
            src: string;
        }[];
    })[];
  }
}
