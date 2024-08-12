export namespace Components {
  interface PageProps {
    listUrl: string;
    setListUrl: (url: string) => void;
    yearList: string[];
    setYearList: (yearList: string[]) => void;
    allYearList: string[];
  }
}
