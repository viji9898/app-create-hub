import { Col, Row, Card } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";
// import heroImage from "../../images/web-app-hero.svg";
// import { WhatsAppOutlined } from "@ant-design/icons";

export const Hero = () => {
  return (
    <Row
      style={{
        alignItems: "center",
        justifyContent: "center",
        background: "rgb(225, 225, 219)",
        paddingTop: "15px",
        textAlign: "center",
        backgroundImage: `url(https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-tech-for-good/hero-image-abstract.jpg)`,
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
            maxWidth: "520px",
            textAlign: "left",
            margin: "10px 10%",
          }}
          className="hero-title"
        >
          <span style={{ background: "black", padding: "5px" }}>
            TECH FOR GOOD IS AN APP DEVELOPMENT AND DIGITAL PRODUCT COMPANY
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
          <span>WE MAKE TECH FOR GOOD</span>
        </Card>
        <br></br>
        <a href="#projects">
          <Card
            bordered={true}
            style={{
              fontWeight: "700",

              margin: "10px 10%",
              background: "white",
              color: "black",
              textAlign: "left",
              boxShadow: " 10px 10px 1px #000",
              display: "block",
            }}
            className="hero-link"
          >
            <div>
              <span>View Projects</span>
              <span style={{ float: "right" }}>
                <PlayCircleOutlined style={{ verticalAlign: "text-bottom" }} />
              </span>
            </div>
          </Card>
        </a>
      </Col>
    </Row>
  );
};
