import { useEffect, useState } from "react";
import { FormCheck, OverlayTrigger, Tooltip } from "react-bootstrap";
import { appendToMakerListUrl, removeFromListUrl } from "../../misc";
import { useDarkMode } from "../layout/DarkModeContext";

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
        }}
      >
        <OverlayTrigger
          placement="top"
          delay={{ show: 700, hide: 100 }}
          overlay={<Tooltip id="checkbox-tooltip">Pridėti į sąrašą</Tooltip>}
        >
          <FormCheck
            style={{ transform: "scale(1.5)" }}
            type="checkbox"
            checked={isAdded}
            onChange={() => setIsAdded(!isAdded)}
          />
        </OverlayTrigger>
      </div>
    </div>
  );
};
export default ListMakerProblemContainer;
