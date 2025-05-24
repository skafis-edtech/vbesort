import AboutPage from "./AboutPage";
import BioPage from "./BioPage";
import ContributePage from "./ContributePage";
import HistPage from "./HistPage";
import ListPage from "./ListPage";
import MainPage from "./MainPage";
import MathPuppPage from "./MathPuppPage";
import NotFoundPage from "./NotFoundPage";
import PhysicsPage from "./PhysicsPage";
import MathNmpp8Page from "./MathNmpp8Page";
import ChemPage from "./ChemPage";
import LietPage from "./LietPage";
import MockExamPage from "./MockExamPage";

export type Route = {
  path: string;
  title: string;
  filepath: string;
  element: any;
};

export const routes: Route[] = [
  {
    path: "/",
    title: "Matematikos VBE",
    filepath: "/MainPage",
    element: MainPage,
  },
  {
    path: "/mockexam",
    title: "Testai",
    filepath: "/MockExamPage",
    element: MockExamPage,
  },
  {
    path: "/physics",
    title: "Fizikos VBE",
    filepath: "/PhysicsPage",
    element: PhysicsPage,
  },
  {
    path: "/bio",
    title: "Biologijos VBE",
    filepath: "/BioPage",
    element: BioPage,
  },
  {
    path: "/hist",
    title: "Istorijos VBE",
    filepath: "/HistPage",
    element: HistPage,
  },
  {
    path: "/math-pupp",
    title: "Matematikos PUPP",
    filepath: "/MathPuppPage",
    element: MathPuppPage,
  },
  {
    path: "/math-nmpp8",
    title: "Matematikos NMPP 8 kl.",
    filepath: "/MathNmpp8Page",
    element: MathNmpp8Page,
  },
  {
    path: "/chem",
    title: "Chemijos VBE",
    filepath: "/ChemPage",
    element: ChemPage,
  },
  {
    path: "/liet",
    title: "Lietuvių kalbos VBE",
    filepath: "/LietPage",
    element: LietPage,
  },
  {
    path: "/list",
    title: "ATRINKTOS",
    filepath: "/ListPage",
    element: ListPage,
  },

  {
    path: "/about",
    title: "Apie",
    filepath: "/AboutPage",
    element: AboutPage,
  },
  {
    path: "/contribute",
    title: "Prisidėk",
    filepath: "/ContributePage",
    element: ContributePage,
  },
  {
    path: "*",
    title: "404",
    filepath: "/NotFoundPage",
    element: NotFoundPage,
  },
];
