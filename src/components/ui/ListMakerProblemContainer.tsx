import { useEffect, useState } from "react";
import { FormCheck } from "react-bootstrap";
import { appendToMakerListUrl, removeFromListUrl } from "../../misc";
import { useDarkMode } from "../layout/DarkModeContext";
import { Link } from "react-router-dom";

type ProblemSelectContainerProps = {
  filename: string;
  children: React.ReactNode;
};

const ListMakerProblemContainer: React.FC<ProblemSelectContainerProps> = ({
  filename,
  children,
}) => {
  const { listUrl, setListUrl } = useDarkMode();

  const [isAdded, setIsAdded] = useState(
    listUrl.includes(filename.slice(0, -4)) || false
  );

  useEffect(() => {
    if (isAdded) {
      setListUrl(
        appendToMakerListUrl(filename.slice(0, -4), listUrl ? listUrl : "")
      );
    } else {
      setListUrl(
        removeFromListUrl(filename.slice(0, -4), listUrl ? listUrl : "")
      );
    }
  }, [isAdded, listUrl, setListUrl, filename]);
  return (
    <div style={{ position: "relative" }}>
      {children}
      <div
        style={{
          position: "absolute",
          right: "16px",
          bottom: "50px",
          display: "flex",
          flexDirection: "row",
          gap: "15px",
        }}
      >
        <FormCheck
          style={{ transform: "scale(1.5)" }}
          type="checkbox"
          checked={isAdded}
          onChange={() => setIsAdded(!isAdded)}
        />
        <em>
          Pridėt{isAdded ? "a" : "i"} prie <Link to="/list">ATRINKTŲ</Link>
        </em>
      </div>
    </div>
  );
};
export default ListMakerProblemContainer;
