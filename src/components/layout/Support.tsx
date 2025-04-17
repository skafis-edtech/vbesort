import { Alert } from "react-bootstrap";
import CopyIcon from "../icons/copy.svg?react";
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
    <Alert variant="info" style={{ padding: "5px" }}>
      <h5 style={{ textAlign: "center" }}>
        Hmm, matai? Nėra reklamų! Tegu taip ir išlieka ;)
      </h5>
      <div>
        <em>Pervedimo paskirtis:</em> vbesort.lt tinklapio savanoriška parama{" "}
        <em>+ Jūsų norima žinutė</em>{" "}
        <CopyButton text="vbesort.lt tinklapio savanoriška parama. ..." />
      </div>
      <div>
        <em>Gavėjas:</em> MB SKAFIS <CopyButton text="MB SKAFIS" />
      </div>
      <div>
        <em>Sąskaitos nr.:</em> LT737300010188621353{" "}
        <CopyButton text="LT737300010188621353" />
      </div>
      <div>Susisiekite el. paštu dėl sąskaitos faktūros.</div>
    </Alert>
  );
}
