import { Card, Col, Row } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";

export const ProjectCards = () => {
  const projectDetails = [
    {
      projectName: "ringsAndFlow.com",
      projectDescription: "Yoga Retreat",
      projectImage:
        "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-rings-and-flow/beach-rings-main.jpg",
      alt: "website",
      url: "https://ringsandflow.com",
    },
    {
      projectName: "techTalent",
      projectDescription: "Tech Recruitment",
      projectImage:
        "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-tech-for-good/tech-taent-thumbnail.png",
      alt: "website",
      url: "https://techTalent.lk",
    },
    {
      projectName: "Marriott Weligama Bay",
      projectDescription: "case study",
      projectImage:
        "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-tech-for-good/marriott-case-study-thumbnail.png",
      alt: "website",
      url: "https://app-marriott.netlify.app/",
    },
    {
      projectName: "storage.lk",
      projectDescription: "self storage",
      projectImage:
        "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-tech-for-good/storage-thumbnail.png",
      alt: "website",
      url: "https://storage.lk",
    },
  ];

  const listProjects = projectDetails.map((data, index) => {
    return (
      <Col xs={24} sm={24} md={6}>
        <Card
          bordered={true}
          key={index}
          style={{ boxShadow: " 10px 10px 1px #000" }}
        >
          <a
            href={data.url}
            target={"_blank"}
            rel={"noreferrer"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Row gutter={18}>
              <Col span={24}>
                <img
                  style={{ width: "100%" }}
                  src={data.projectImage}
                  alt={data.alt}
                />
              </Col>
              <Col span={18} style={{ textAlign: "left" }}>
                <span>{data.projectName}</span>
                <p style={{ color: "grey" }}>{data.projectDescription}</p>
              </Col>
              <Col
                span={6}
                style={{
                  justifyContent: "center",
                  textAlign: "right",
                  margin: "auto",
                  width: "50%",
                }}
              >
                <PlayCircleOutlined style={{ fontSize: "2.5rem" }} />
              </Col>
            </Row>
          </a>
        </Card>
      </Col>
    );
  });

  return (
    <div
      style={{
        background: "rgb(225, 225, 219)",
        textAlign: "center",
        backgroundImage: `url(https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-tech-for-good/projects-hero-image.jpg)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        maxWidth: "1200px",
        width: "100%",
        minHeight: "420px",

        padding: "25px",
      }}
      id="projects"
    >
      <div
        style={{
          color: "white",
          fontWeight: "700",
          fontSize: "1.5rem",
          textAlign: "left",
        }}
      >
        <span style={{ background: "black", padding: "5px" }}>
          Our Projects
        </span>
      </div>
      <br></br>
      <Row gutter={[18, 18]} style={{ margin: "0px 10px" }}>
        {listProjects}
      </Row>
    </div>
  );
};
