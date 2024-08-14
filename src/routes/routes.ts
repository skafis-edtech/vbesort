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

export const routes = [
  {
    path: "/",
    title: "Matematikos VBE",
    element: MainPage,
  },

  {
    path: "/physics",
    title: "Fizikos VBE",
    element: PhysicsPage,
  },
  {
    path: "/bio",
    title: "Biologijos VBE",
    element: BioPage,
  },
  {
    path: "/hist",
    title: "Istorijos VBE",
    element: HistPage,
  },
  {
    path: "/math-pupp",
    title: "Matematikos PUPP",
    element: MathPuppPage,
  },
  {
    path: "/math-nmpp8",
    title: "Matematikos NMPP 8 kl.",
    element: MathNmpp8Page,
  },
  {
    path: "/chem",
    title: "Chemijos VBE",
    element: ChemPage,
  },
  {
    path: "/liet",
    title: "Lietuvių kalbos VBE",
    element: LietPage,
  },
  {
    path: "/list",
    title: "ATRINKTOS",
    element: ListPage,
  },
  {
    path: "/about",
    title: "Apie",
    element: AboutPage,
  },
  {
    path: "/contribute",
    title: "Prisidėk",
    element: ContributePage,
  },

  {
    path: "*",
    title: "404",
    element: NotFoundPage,
  },
];
