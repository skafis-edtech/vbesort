import { Accordion, Alert, Card, Form } from "react-bootstrap";
import { Components } from "../../types";
import ShuffleBar from "../../components/layout/ShuffleBar";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import { useState } from "react";
import contentfile from "./data/content.json";
import "./styles.css";
import { getLongType, getSearchNeutralText } from "../../misc";

const LietPage: React.FC<Components.PageProps> = (props) => {
  const [editorValue, setEditorValue] = useState<string>("");
  const [filterValue, setFilterValue] = useState<string>("");

  const modules = {
    toolbar: [
      [{ indent: "-1" }, { indent: "+1" }], // Indent buttons
      [{ header: [1, 2, 3, false] }], // Header levels
      ["bold", "italic", "underline", "strike"], // Basic text styles
      [{ list: "ordered" }, { list: "bullet" }], // Lists
      ["blockquote", "code-block"], // Blockquote and code block
      ["link", "image"], // Links and images
      [{ align: [] }], // Align text
      ["clean", "subscript", "superscript"], // Remove formatting button
    ],
  };

  // Define the formats that Quill will recognize
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "align",
  ];

  return (
    <>
      <ShuffleBar />
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          margin: "fit-content",
        }}
      >
        <h1 className="vbesort-title">vbesort.lt</h1>
        <em style={{ position: "absolute", right: "30%", bottom: 0 }}>
          by <a href="https://www.skafis.lt">Skafis</a>
        </em>
      </div>
      <p className="vbesort-description">
        Surūšiuotos VBE bei kitų egzaminų užduotys
      </p>
      <h1 className="title">Lietuvių kalbos VBE</h1>
      <Alert variant="warning">
        Dalinkitės gerais lietuvių rašiniais! Rašykite{" "}
        <a href="mailto:info@skafis.lt">info@skafis.lt</a>
      </Alert>
      <Alert variant="info">
        Čia pateikti oficialūs naujos programos pavyzdžiai (
        <a href="https://www.nsa.smm.lt/wp-content/uploads/2024/09/Aukstesniojo-lygio-probleminio-klausimo-darbu-pavyzdziai-ir-vertinimas.pdf">
          Probleminio klausimo svarstymas
        </a>
        {", "}
        <a href="https://www.nsa.smm.lt/wp-content/uploads/2024/09/GROZINIO-TEKSTO-INTERPRETAVIMAS.Auksteniojo-lygio-darbu-pavyzdziai-ir-ju-vertinimas.pdf">
          Grožinio kūrinio interpretavimas
        </a>
        ) ir neoficialūs senų VBE rašinių pavyzdžiai, pasidalinti buvusių
        moksleivių.
      </Alert>
      <Alert variant="info">
        Naujos programos pavyzdžiai žymimi{" "}
        <strong>Probleminis klausimas</strong> bei{" "}
        <strong>Teksto interpretacija</strong> žymėmis, senos programos
        pavyzdžiai žymimi <strong>Samprotavimo rašinys</strong> bei{" "}
        <strong>Literatūrinis rašinys</strong> žymėmis.
      </Alert>
      <Form.Control
        size="lg"
        type="text"
        placeholder="Filtruoti pagal bet ką..."
        value={filterValue}
        onChange={(e) => setFilterValue(e.target.value)}
      />
      <br />
      {contentfile
        .filter(
          (item) =>
            getSearchNeutralText(item.question).includes(
              getSearchNeutralText(filterValue)
            ) ||
            getSearchNeutralText(item.content).includes(
              getSearchNeutralText(filterValue)
            ) ||
            item.answers.some((ans) =>
              getSearchNeutralText(ans.text).includes(
                getSearchNeutralText(filterValue)
              )
            ) ||
            item.answers.some((ans) =>
              getSearchNeutralText(ans.points).includes(
                getSearchNeutralText(filterValue)
              )
            ) ||
            getSearchNeutralText(getLongType(item.type)).includes(
              getSearchNeutralText(filterValue)
            ) ||
            getSearchNeutralText(item.type).includes(
              getSearchNeutralText(filterValue)
            )
        )
        .map((item, id) => (
          <Card key={id} className="p-2 my-2">
            <div className="m-2" style={{ fontSize: "20px" }}>
              <strong>{item.question}</strong>{" "}
              <em>({getLongType(item.type)})</em>
            </div>
            <div style={{ marginLeft: "40px", marginTop: "20px" }}>
              <Accordion style={{ marginBottom: "4px" }}>
                <Accordion.Item eventKey="content">
                  <Accordion.Header>Remtis...</Accordion.Header>
                  <Accordion.Body>
                    <ReactQuill
                      value={item.content}
                      readOnly={true}
                      theme="snow"
                      modules={{ toolbar: false }}
                    />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Accordion>
                {item.answers?.map((ans, id) => (
                  <Accordion.Item eventKey={"answer" + id} key={id}>
                    <Accordion.Header>
                      Rašinio pavyzdys su įvertinimu {ans.points}
                    </Accordion.Header>
                    <Accordion.Body>
                      <ReactQuill
                        value={ans.text}
                        readOnly={true}
                        theme="snow"
                        modules={{ toolbar: false }}
                      />
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </Card>
        ))}
      <br /> <hr />
      <ReactQuill
        value={editorValue}
        onChange={setEditorValue}
        theme="snow"
        modules={modules}
        formats={formats}
      />{" "}
      <button
        className="btn btn-primary"
        onClick={() => console.log(editorValue)}
      >
        Log rich text
      </button>
    </>
  );
};

export default LietPage;
