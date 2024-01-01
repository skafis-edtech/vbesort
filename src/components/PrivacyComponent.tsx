import { Accordion } from "react-bootstrap";

export default function PrivacyComponent() {
  return (
    <div>
      <Accordion defaultActiveKey="0" style={{ fontSize: "small" }}>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Šis puslapis naudoja Google Analytics, kad galima būtų sekti
            tinklapio gyvybingumą. Naudodamiesi šiuo tinklapiu Jūs sutinkate su
            Google Analytics nuostatais (išskleisti dėl daugiau informacijos)
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                <strong>Google Analytics Privacy Overview</strong>:{" "}
                <a href="https://policies.google.com/technologies/partner-sites">
                  https://policies.google.com/technologies/partner-sites
                </a>
              </li>
              <li>
                <strong>Google Analytics Terms of Service</strong>:{" "}
                <a href="https://marketingplatform.google.com/about/analytics/terms/">
                  https://marketingplatform.google.com/about/analytics/terms/
                </a>
              </li>
              <li>
                <strong>Google's Privacy Policy</strong>:{" "}
                <a href="https://policies.google.com/privacy">
                  https://policies.google.com/privacy
                </a>
              </li>
              <li>
                <strong>Google Analytics Opt-out Browser Add-on</strong>:{" "}
                <a href="https://tools.google.com/dlpage/gaoptout">
                  https://tools.google.com/dlpage/gaoptout
                </a>
              </li>
              <li>
                <strong>Google Analytics Help Center</strong>:{" "}
                <a href="https://support.google.com/analytics">
                  https://support.google.com/analytics
                </a>
              </li>
              <li>
                <strong>Google Analytics Cookie Usage</strong>:{" "}
                <a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage">
                  https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage
                </a>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
