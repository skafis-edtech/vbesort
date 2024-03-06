import { Alert } from "react-bootstrap";

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
        <li>Revolut pavedimas: Naglis Šuliokas LT943250092929077836</li>
        <li>
          PayPal donation (PayPal mokesčiai):{" "}
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
