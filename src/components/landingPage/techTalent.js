import { Col, Row, Card } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

// import heroImage from "../../images/web-app-hero.svg";
// import { WhatsAppOutlined } from "@ant-design/icons";

export const TechTalent = () => {
  return (
    <Row
      style={{
        alignItems: "center",
        justifyContent: "center",
        background: "rgb(225, 225, 219)",
        paddingTop: "15px",
        textAlign: "center",
        backgroundImage: `url(https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-tech-for-good/talent-image-hero.jpg)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
        minHeight: "90vh",
        maxWidth: "1200px",
        margin: "0px auto",
      }}
    >
      <Col xs={24} sm={24} md={12}>
        <div
          style={{
            color: "white",
            fontWeight: "700",
            maxWidth: "520px",
            textAlign: "left",
            margin: "10px 10%",
          }}
          className="hero-title"
        >
          <span style={{ background: "black", padding: "5px" }}>
            {" "}
            A platform for Tech Talent
          </span>
        </div>
        <Card
          bordered={true}
          style={{
            lineHeight: "1",
            letterSpacing: ".56px",
            margin: "10px 10%",
            boxShadow: " 10px 10px 1px #000",
          }}
          className="hero-description"
        >
          <span>Connecting Sri Lankan Tech Talent to the World</span>
          <br></br>
          <div
            style={{
              color: "black",
              fontWeight: "700",
              textAlign: "left",
              marginTop: "15px",
            }}
            className="hero-title"
          >
            <span>
              techTalent is a platform that aims to connect Sri Lankan tech
              talent with tech companies both locally and globally.
            </span>
          </div>
        </Card>
        <br></br>
        <Link to="tech-talent">
          <Card
            bordered={true}
            style={{
              margin: "10px 10%",
              background: "white",
              color: "black",
              fontWeight: "700",
              textAlign: "left",
              boxShadow: " 10px 10px 1px #000",
            }}
            className="hero-link"
          >
            <span>techTalent.lk</span>
            <span style={{ float: "right" }}>
              <PlayCircleOutlined style={{ verticalAlign: "text-bottom" }} />
            </span>
          </Card>
        </Link>
      </Col>
    </Row>
  );
};
