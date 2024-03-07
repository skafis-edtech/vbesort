import { Alert } from "react-bootstrap";
import { ReactComponent as CopyIcon } from "./copy.svg";
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
      <p
        style={{
          paddingTop: "10px",
          paddingLeft: "30px",
        }}
      >
        <li>
          Revolut pavedimas: Naglis Šuliokas LT943250092929077836{" "}
          <CopyButton text="Naglis Šuliokas LT943250092929077836" />{" "}
        </li>
        <li>
          PayPal donation (su PayPal mokesčiais):{" "}
          <a
            href="https://www.paypal.com/donate/?hosted_button_id=86R4K9Y6BLSXA"
            target="_blank"
            rel="noreferrer"
          >
            donation link'as
          </a>
        </li>
      </p>
    </Alert>
  );
}
