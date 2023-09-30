import { Col, Row } from "antd";

export const Stages = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Row
        gutter={[18]}
        style={{ maxWidth: "1200px", width: "100%", textAlign: "center" }}
      >
        <Col
          sm={24}
          xs={24}
          md={8}
          style={{ backgroundColor: "salmon", height: "95vh" }}
        >
          <div>
            <p>
              <strong>{"Train"}</strong>
            </p>
            <br></br>
            <ul>
              <p>Core Course</p>
              <li>Intro to Coding</li>
              <li>Fullstack Developmemt</li>
            </ul>
            <br></br>
            <ul>
              <p>Further Learning</p>
              <li>AI</li>
              <li>Machine Learning</li>
              <li>Blockchain</li>
              <li>Augmented Reality</li>
            </ul>
          </div>
        </Col>
        <Col
          sm={24}
          xs={24}
          md={8}
          style={{ backgroundColor: "lime", height: "95vh" }}
        >
          <div>
            <p>
              <strong>{"Employee"}</strong>
            </p>
            <br></br>
            <ul>
              <p>Hiring Partners</p>
              <li>Sri Lankan Hiring Partners</li>
              <li>Oversea Hiring PArtners</li>
            </ul>
            <br></br>
            <ul>
              <p>App / Project / Open Source</p>
              <li>techTalent.lk</li>
              <li>Pages.lk</li>
              <li>cyberSunil.com</li>
              <li>Avatar.lk</li>
            </ul>
          </div>
        </Col>
        <Col
          sm={24}
          xs={24}
          md={8}
          style={{ backgroundColor: "yellow", height: "95vh" }}
        >
          <div>
            <p>
              <strong>{"Entrepreunrship"}</strong>
            </p>
            <br></br>
            <ul>
              <p>Building own digital agency</p>
              <li>lanidng pages</li>
              <li>corporate pages</li>
              <li>Google SEO</li>
              <li>Social Media</li>
            </ul>
            <br></br>
            <ul>
              <p>Build your own idea</p>
              <li>Test in Sri Lanka</li>
              <li>Launch Overseas</li>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
};
