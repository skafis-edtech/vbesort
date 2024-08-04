import { Link } from "react-router-dom";
import { Components } from "../../types";

const NotFoundPage: React.FC<Components.PageProps> = () => {
  return (
    <h1 style={{ textAlign: "center" }}>
      <br />
      Ups... 404. <br />
      <Link to="/">Į PRADŽIĄ</Link>
    </h1>
  );
};

export default NotFoundPage;
