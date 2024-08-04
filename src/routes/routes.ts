import AboutPage from "./AboutPage";
import BioPage from "./BioPage";
import ContributePage from "./ContributePage";
import HistPage from "./HistPage";
import ListPage from "./ListPage";
import MainPage from "./MainPage";
import MathPuppPage from "./MathPuppPage";
import NotFoundPage from "./NotFoundPage";
import PhysicsPage from "./PhysicsPage";

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
    path: "/list",
    title: "Atrinktos",
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
