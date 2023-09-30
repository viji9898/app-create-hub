import { Col, Divider, Row } from "antd";
import { ContactUs } from "../landingPage/contactUs";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <Row gutter={[18, 18]} style={{ margin: "20px", maxWidth: "1200px" }}>
        <Divider></Divider>
        <Col xs={24} sm={24} md={8}>
          <p style={{ fontWeight: "900" }}>HQ - techForGood</p>
          <p style={{ fontSize: "14px" }}>
            {
              "Tech For Good Pvt Ltd. is a leading organization dedicated to empowering individuals and facilitating their transition into rewarding careers in the tech industry. "
            }
          </p>

          <p>
            <strong>{"Our mission "}</strong>
            {
              "is to bridge the gap between ambition and opportunity by offering free coding classes and bootcamps."
            }
          </p>
        </Col>
        <Col xs={12} sm={12} md={4}>
          <p style={{ fontWeight: "700" }}>Community</p>
          <ul style={{ listStyleType: "none", padding: "0px" }}>
            <li>
              <a
                style={{
                  fontSize: "14px",
                  textDecoration: "none",
                  color: "salmon",
                }}
                href={"https://www.linkedin.com/company/techforgood-lk"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </li>
            <br></br>
            <li>
              <a
                style={{
                  fontSize: "14px",
                  textDecoration: "none",
                  color: "salmon",
                }}
                href={
                  "https://join.slack.com/t/techforgood-corp/shared_invite/zt-1xrvl0x40-gIeFg2V6tNZnCwUF_oaidg"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                {"Join us on:"}
                <br></br>
                <img
                  style={{ maxWidth: "100px" }}
                  alt="slack logo"
                  src="https://techhq.lk/static/media/slack-logo.a2c1d410353d520038116b16f0d20022.svg"
                ></img>
              </a>
            </li>
          </ul>
        </Col>
        <Col xs={12} sm={12} md={4}>
          <ul style={{ listStyleType: "none", padding: "0px" }}>
            <li>
              <p
                style={{
                  fontWeight: "700",
                  paddingBottom: "0px",
                  marginBottom: "0px",
                }}
              >
                London
              </p>
              <a
                style={{
                  fontFamily: "AnnonymousPro,Helvetica,Arial,sans-serif",
                  fontSize: "0.75rem",
                  textDecoration: "none",
                  color: "grey",
                  marginBottom: "2px",
                }}
                href={"https://goo.gl/maps/ECoM1zTxRVaMKpL67"}
                target="_blank"
                rel="noopener noreferrer"
              >
                {"       Dandridge House, Lamb Street E1 6ED"}
              </a>
            </li>
            <li>
              <p
                style={{
                  fontWeight: "700",
                  paddingBottom: "0px",
                  marginBottom: "0px",
                }}
              >
                Colombo
              </p>
              <a
                style={{
                  fontFamily: "AnnonymousPro,Helvetica,Arial,sans-serif",
                  fontSize: "0.75rem",
                  textDecoration: "none",
                  color: "grey",
                  marginBottom: "5px",
                }}
                href={"https://goo.gl/maps/1pwTwt4i9wFC68eYA"}
                target="_blank"
                rel="noopener noreferrer"
              >
                {" #02 - 01 53 Dharmapala Mawatha Colombo 03, Sri Lanka"}
              </a>
            </li>
            <li>
              <p
                style={{
                  fontWeight: "700",
                  paddingBottom: "0px",
                  marginBottom: "0px",
                }}
              >
                Jeruselam
              </p>
              <a
                style={{
                  fontFamily: "AnnonymousPro,Helvetica,Arial,sans-serif",
                  fontSize: "0.75rem",
                  textDecoration: "none",
                  color: "grey",
                  marginBottom: "2px",
                }}
                href={"https://goo.gl/maps/6GV9KqmLLZMcqmc8A"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ikhwan e-Safa St 41
              </a>
            </li>
            <br></br>
            <li>
              <p style={{ fontWeight: "900" }}>
                <a
                  href="https://techhq.lk/discover/techhq"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  CAREERS
                </a>
              </p>
            </li>
          </ul>
        </Col>
        <Col xs={24} sm={24} md={8}>
          <ContactUs />
        </Col>
        <Divider></Divider>
      </Row>
      <Row justify="center">
        <Col span={24}>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "12px" }}>
              {"❤️ techForGood"} &copy; {year} {"❤️ "}
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};
