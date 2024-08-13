import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
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
          right: "0",
          bottom: "0",
        }}
      >
        {!isAdded && (
          <Button variant="warning" onClick={() => setIsAdded(!isAdded)}>
            Pridėti į sąrašą
          </Button>
        )}
        {isAdded && (
          <div>
            <Button
              variant="outline-danger"
              onClick={() => setIsAdded(!isAdded)}
              style={{ marginRight: "10px" }}
            >
              Išimti iš sąrašo
            </Button>
            <Button variant="success" disabled>
              <strong>
                <em>Pridėta</em>
              </strong>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
export default ListMakerProblemContainer;
