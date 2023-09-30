import { Col, Row, Card } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

// import heroImage from "../../images/web-app-hero.svg";
// import { WhatsAppOutlined } from "@ant-design/icons";

export const Mission = () => {
  return (
    <Row
      style={{
        alignItems: "center",
        justifyContent: "center",
        background: "rgb(225, 225, 219)",
        paddingTop: "15px",
        textAlign: "center",
        backgroundImage: `url(https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-tech-for-good/talent-hero-image.jpg)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
        minHeight: "90vh",
        maxWidth: "1600px",
        margin: "0px auto",
      }}
    >
      <Col xs={24} sm={24} md={12}>
        <div
          style={{
            color: "white",
            fontWeight: "700",
            textAlign: "left",
            margin: "10px 10%",
          }}
          className="hero-title"
        >
          <span style={{ background: "black", padding: "5px" }}>
            Our Mission:
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
          <span>CHANGING LIVES FOR THE BETTER</span>
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
              We build digital platforms with global organizations and movements
              to make change happen.
            </span>
          </div>
        </Card>
        <br></br>
        <Link to="/mission">
          <Card
            bordered={true}
            style={{
              margin: "10px 10%",
              background: "white",
              color: "black",
              fontWeight: "700",
              fontSize: "100%",
              textAlign: "left",
              boxShadow: " 10px 10px 1px #000",
            }}
          >
            <span>How did we change lives in 2022</span>
            <span style={{ float: "right" }}>
              <PlayCircleOutlined style={{ verticalAlign: "text-bottom" }} />
            </span>
          </Card>
        </Link>
      </Col>
    </Row>
  );
};
