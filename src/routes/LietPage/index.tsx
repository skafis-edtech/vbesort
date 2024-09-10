import { Accordion, Alert, Card, Form } from "react-bootstrap";
import { Components } from "../../types";
import ShuffleBar from "../../components/layout/ShuffleBar";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import { useState } from "react";
import contentfile from "./data/content.json";
import "./styles.css";

const LietPage: React.FC<Components.PageProps> = (props) => {
  const [editorValue, setEditorValue] = useState<string>("");

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
      <h1 className="vbesort-title">vbesort.lt</h1>
      <p className="vbesort-description">
        Surūšiuotos VBE bei kitų egzaminų užduotys
      </p>
      <Alert variant="danger">
        Labai reikia, kad pasidalintumėte gerais lietuvių rašiniais! Rašykite{" "}
        <a href="mailto:info@skafis.lt">info@skafis.lt</a>
      </Alert>
      <h1 className="title">Lietuvių kalbos VBE</h1>
      <Form.Control size="lg" type="text" placeholder="Filtruoti..." />
      <br />
      <br />
      <Alert variant="info">
        Oficialūs naujos programos pavyzdžiai:{" "}
        <a href="https://www.nsa.smm.lt/wp-content/uploads/2024/09/Aukstesniojo-lygio-probleminio-klausimo-darbu-pavyzdziai-ir-vertinimas.pdf">
          Probleminio klausimo svarstymas
        </a>
      </Alert>
      {contentfile.map((item, id) => (
        <Card key={id} className="p-2">
          <div className="m-2">
            <strong>{item.question}</strong>
          </div>
          <Accordion>
            <Accordion.Item eventKey="content">
              <Accordion.Header>Kūrinys rėmimuisi</Accordion.Header>
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
                  {" "}
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
        </Card>
      ))}
      <br />
      <br />
      <Alert variant="info">
        Oficialūs naujos programos pavyzdžiai:
        <a href="https://www.nsa.smm.lt/wp-content/uploads/2024/09/GROZINIO-TEKSTO-INTERPRETAVIMAS.Auksteniojo-lygio-darbu-pavyzdziai-ir-ju-vertinimas.pdf">
          Grožinio kūrinio interpretavimas
        </a>
      </Alert>
      <ReactQuill
        value="Hello World!"
        readOnly={true}
        theme="snow"
        modules={{ toolbar: false }}
      />{" "}
      <br />
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
