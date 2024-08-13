import { Alert } from "react-bootstrap";
import { ReactComponent as CopyIcon } from "../icons/copy.svg";
import { useState } from "react";
import { useDarkMode } from "./DarkModeContext";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const { isDarkMode } = useDarkMode();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <>
      <button
        onClick={copyToClipboard}
        style={{
          background: "none",
          border: "none",
          color: `${isDarkMode ? "rgb(119, 169, 255)" : "rgb(47, 112, 255)"}`,
          textDecoration: "underline",
          cursor: "pointer",
        }}
        onMouseOver={(e) =>
          (e.currentTarget.style.color = `${
            isDarkMode ? "rgb(146, 186, 255)" : "rgb(36, 89, 205)"
          }`)
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.color = `${
            isDarkMode ? "rgb(119, 169, 255)" : "rgb(47, 112, 255)"
          }`)
        }
      >
        <CopyIcon />
      </button>
      {copied ? <em>Nukopijuota!</em> : ""}
    </>
  );
}

export default function Support() {
  return (
    <Alert variant="info" style={{ marginBottom: "20px", marginTop: "20px" }}>
      <h4>
        <strong>Hmm, matai? Nėra reklamų! Tegu taip ir išlieka ;)</strong>
      </h4>
      <p>Būčiau labai dėkingas už piniginę paramą, už įdėtą darbą.</p>
      <p
        style={{
          paddingLeft: "15px",
        }}
      >
        <li>
          Pavedimu (Pervedimo paskirtis: Vbesort tinklapio parama + Jūsų norima
          žinutė): Naglis Šuliokas LT943250092929077836{" "}
          <CopyButton text="Naglis Šuliokas LT943250092929077836" />{" "}
        </li>
      </p>
    </Alert>
  );
}
