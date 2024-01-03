import { Alert, Card } from "react-bootstrap";

export default function Support() {
  return (
    <Alert variant="info" style={{ marginBottom: "15px" }}>
      <h4>
        <strong>
          Piniginis parėmimas padėkai bei tolimesniam puslapio tobulinimui:
        </strong>
      </h4>
      <p
        style={{
          paddingTop: "10px",
          paddingLeft: "30px",
        }}
      >
        <li>
          PayPal donation – gan daug mokesčių PayPal pasiima:{" "}
          <a
            href="https://www.paypal.com/donate/?hosted_button_id=86R4K9Y6BLSXA"
            target="_blank"
            rel="noreferrer"
          >
            donation linkas
          </a>
        </li>
        <li>Revolut pavedimu: Naglis Šuliokas LT943250092929077836</li>
      </p>
    </Alert>
  );
}
