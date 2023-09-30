import { Col, Row, Card, Avatar, Divider } from "antd";
// import { PlayCircleOutlined } from "@ant-design/icons";
import { Footer } from "../navigation/footer";

// import heroImage from "../../images/web-app-hero.svg";
// import { WhatsAppOutlined } from "@ant-design/icons";

export const DetailsMission = () => {
  return (
    <div>
      <Row
        style={{
          alignItems: "center",
          justifyContent: "center",
          background: "rgb(225, 225, 219)",
          paddingTop: "15px",
          textAlign: "center",
          backgroundImage: `url(https://happydecay.com.au/wp-content/uploads/colourful-people.jpg)`,
          backgroundSize: "contain",
          width: "100%",
          minHeight: "520px",
        }}
      >
        <Col xs={24} sm={24} md={12}>
          <div
            style={{
              color: "white",
              fontWeight: "700",
              fontSize: "1.5rem",
              textAlign: "left",
              margin: "10px 5%",
            }}
          >
            <span style={{ background: "black", padding: "5px" }}>
              {" "}
              Changing Lives
            </span>
          </div>
          <Card
            bordered={true}
            style={{
              fontSize: "3.25rem",
              lineHeight: "1",
              letterSpacing: ".56px",
              margin: "10px 5%",
              boxShadow: " 10px 10px 1px #000",
            }}
          >
            <span>Sri Lanka's Future as a Tech Hub</span>
            <br></br>
            <div
              style={{
                color: "black",
                fontWeight: "700",
                fontSize: "1.5rem",
                textAlign: "left",
                marginTop: "15px",
              }}
            >
              <span>
                Our aims is to teach and reposition people into a career in tech
              </span>
            </div>
          </Card>
          <br></br>
        </Col>
      </Row>
      <Divider style={{ borderStyle: "dashed solid" }} />
      <Row gutter={[24, 18]} style={{ margin: "0px 5px" }}>
        <Col xs={12} sm={12} md={6}>
          <Card
            bordered={true}
            style={{
              fontSize: "2.25rem",
              lineHeight: "1",
              letterSpacing: ".56px",
              margin: "10px 0px",
              boxShadow: " 10px 10px 1px #000",
              textAlign: "center",
            }}
          >
            <span>Students</span>
            <br></br>
            <div
              style={{
                color: "black",
                fontWeight: "700",
                fontSize: "1.5rem",
                textAlign: "center",
                marginTop: "15px",
              }}
            >
              <span>100+</span>
            </div>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={6}>
          <Card
            bordered={true}
            style={{
              fontSize: "2.25rem",
              lineHeight: "1",
              letterSpacing: ".56px",
              margin: "10px 0px",
              boxShadow: " 10px 10px 1px #000",
              textAlign: "center",
            }}
          >
            <span>Courses</span>
            <br></br>
            <div
              style={{
                color: "black",
                fontWeight: "700",
                fontSize: "1.5rem",
                textAlign: "center",
                marginTop: "15px",
              }}
            >
              <span>3</span>
            </div>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={6}>
          <Card
            bordered={true}
            style={{
              fontSize: "2.25rem",
              lineHeight: "1",
              letterSpacing: ".56px",
              margin: "10px 0px",
              boxShadow: " 10px 10px 1px #000",
              textAlign: "center",
            }}
          >
            <span>Jobs</span>
            <br></br>
            <div
              style={{
                color: "black",
                fontWeight: "700",
                fontSize: "1.5rem",
                textAlign: "center",
                marginTop: "15px",
              }}
            >
              <span>34</span>
            </div>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={6}>
          <Card
            bordered={true}
            style={{
              fontSize: "2.25rem",
              lineHeight: "1",
              letterSpacing: ".56px",
              margin: "10px 0px",
              boxShadow: " 10px 10px 1px #000",
              textAlign: "center",
            }}
          >
            <span>Companies</span>
            <br></br>
            <div
              style={{
                color: "black",
                fontWeight: "700",
                fontSize: "1.5rem",
                textAlign: "center",
                marginTop: "15px",
              }}
            >
              <span>12</span>
            </div>
          </Card>
        </Col>
      </Row>
      <Divider style={{ borderStyle: "dashed solid" }} />
      <Row>
        {/* Details about the class  */}
        <Col md={6} style={{ backgroundColor: "#FFFF" }}></Col>
        <Col md={12}>
          <div
            style={{
              color: "black",
              fontWeight: "700",
              fontSize: "1.5rem",
              textAlign: "left",
              margin: "15px",
            }}
          >
            <span>
              In partnership with the foundation of goodness we run weekly
              coding classes.
            </span>
          </div>
          <Row
            style={{
              margin: "20px",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Col span={12} width="100%">
              <Avatar
                style={{ width: "100%", height: "100%" }}
                size={"100%"}
                src="https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-tech-for-good/fog-class.JPG"
              />
            </Col>
            <Col span={12}>
              <div
                style={{
                  color: "black",
                  fontWeight: "500",
                  fontSize: "1rem",
                  textAlign: "left",
                  margin: "15px",
                }}
              >
                <span>
                  {
                    "Teching students basis html , ccs and javascript over 12 week. "
                  }
                </span>
              </div>
            </Col>
          </Row>
        </Col>
        <Col md={6} style={{ backgroundColor: "#FFFF" }}></Col>
        <Col span={24}>
          <Divider style={{ borderStyle: "dashed solid" }} />
        </Col>
        {/* Video of Dulanika talking */}
        <Col md={6} style={{ backgroundColor: "#FFFF" }}></Col>
        <Col md={12}>
          <div
            style={{
              color: "black",
              fontWeight: "700",
              fontSize: "1.5rem",
              textAlign: "left",
              margin: "15px",
            }}
          >
            <span>Hear from Dulanika one of our students</span>
          </div>
          <Row
            style={{
              margin: "5px",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Col span={24}>
              <div style={{ padding: "55% 0 0 0", position: "relative" }}>
                <iframe
                  src="https://player.vimeo.com/video/781534793?h=5d6cae3fca&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  frameborder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowfullscreen
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    width: "100%",
                    height: "100%",
                  }}
                  title="dulanika"
                ></iframe>
              </div>
              <script src="https://player.vimeo.com/api/player.js"></script>
            </Col>
          </Row>
        </Col>
        <Col md={6} style={{ backgroundColor: "#FFFF" }}></Col>
        <Col span={24}>
          <Divider style={{ borderStyle: "dashed solid" }} />
        </Col>
        {/* Details about the class  */}
        <Col md={6} style={{ backgroundColor: "#FFFF" }}></Col>
        <Col md={12}>
          <div
            style={{
              color: "black",
              fontWeight: "700",
              fontSize: "1.5rem",
              textAlign: "left",
              margin: "15px",
            }}
          >
            <span>Our aim is to reposition them into a career</span>
          </div>
          <Row
            style={{
              margin: "20px",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Col span={12}>
              <div
                style={{
                  color: "black",
                  fontWeight: "500",
                  fontSize: "1rem",
                  textAlign: "left",
                  margin: "15px",
                }}
              >
                <span>
                  The basis training enables them to understand computer logic
                  and being able to pick other languages.
                </span>
              </div>
            </Col>
            <Col span={12}>
              <Avatar
                style={{ width: "100%", height: "auto" }}
                src="https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-tech-for-good/fog-class-01.JPG"
              />
            </Col>
          </Row>
        </Col>
        <Col md={6} style={{ backgroundColor: "#FFFF" }}></Col>
        <Col span={24}>
          <Divider style={{ borderStyle: "dashed solid" }} />
        </Col>
      </Row>
      {/* <Row
        style={{
          alignItems: "center",
          justifyContent: "center",
          background: "rgb(225, 225, 219)",
          padding: "15px",
          textAlign: "center",
          backgroundImage: `url(https://happydecay.com.au/wp-content/uploads/colourful-people.jpg)`,
          backgroundSize: "contain",
          width: "100%",
        }}
      >
        <Col span={12} justifyContent={"center"}>
          <a href="https://techtalent.lk" target={"_blank"} rel={"noreferrer"}>
            <Card
              bordered={true}
              style={{
                margin: "10px 0px",
                background: "white",
                color: "black",
                fontWeight: "700",
                fontSize: "1.1rem",
                textAlign: "left",
                boxShadow: " 10px 10px 1px #000",
              }}
            >
              <span>techTalent.lk</span>
              <span style={{ float: "right" }}>
                <PlayCircleOutlined style={{ verticalAlign: "text-bottom" }} />
              </span>
            </Card>
          </a>
        </Col>
      </Row> */}
      <Footer />
    </div>
  );
};
