import { Col, Row, Card, Avatar, Divider } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons"
import { Footer } from "../navigation/footer";

// import heroImage from "../../images/web-app-hero.svg";
// import { WhatsAppOutlined } from "@ant-design/icons";

export const Details = () => {
    return (
        <div>
            <Row
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgb(225, 225, 219)",
                    paddingTop: "15px",
                    textAlign: "center", backgroundImage: `url(https://happydecay.com.au/wp-content/uploads/colourful-people.jpg)`, backgroundSize: "contain",
                    width: "100%",
                    minHeight: "520px",
                }}
            >
                <Col xs={24} sm={24} md={12}>
                    <div style={{ color: "white", fontWeight: "700", fontSize: "1.5rem", textAlign: "left" }}>
                        <span style={{ background: "black", padding: "5px" }}> A platform for Tech Talent</span>
                    </div>
                    <Card bordered={true} style={{ fontSize: "3.25rem", lineHeight: "1", letterSpacing: ".56px", margin: "10px 0px", boxShadow: " 10px 10px 1px #000", }}>
                        <span>Connecting Sri Lankan Tech Talent to the World</span>
                        <br></br>
                        <div style={{ color: "black", fontWeight: "700", fontSize: "1.5rem", textAlign: "left", marginTop: "15px" }}>
                            <span>techTalent is a platform that aims to connect Sri Lankan tech talent with tech companies both locally and globally.</span>
                        </div>
                    </Card>
                    <br></br>
                </Col>
            </Row >
            <Divider style={{ borderStyle: "dashed solid" }} />
            <Row gutter={[24, 18]}>
                <Col xs={12} sm={12} md={6}>
                    <Card bordered={true} style={{ fontSize: "2.25rem", lineHeight: "1", letterSpacing: ".56px", margin: "10px 0px", boxShadow: " 10px 10px 1px #000", textAlign: "center" }}>
                        <span>USER</span>
                        <br></br>
                        <div style={{ color: "black", fontWeight: "700", fontSize: "1.5rem", textAlign: "center", marginTop: "15px", }}>
                            <span>10,000+</span>
                        </div>
                    </Card>
                </Col>
                <Col xs={12} sm={12} md={6}>
                    <Card bordered={true} style={{ fontSize: "2.25rem", lineHeight: "1", letterSpacing: ".56px", margin: "10px 0px", boxShadow: " 10px 10px 1px #000", textAlign: "center" }}>
                        <span>Companies</span>
                        <br></br>
                        <div style={{ color: "black", fontWeight: "700", fontSize: "1.5rem", textAlign: "center", marginTop: "15px", }}>
                            <span>200+</span>
                        </div>
                    </Card>
                </Col>
                <Col xs={12} sm={12} md={6}>
                    <Card bordered={true} style={{ fontSize: "2.25rem", lineHeight: "1", letterSpacing: ".56px", margin: "10px 0px", boxShadow: " 10px 10px 1px #000", textAlign: "center" }}>
                        <span>Jobs</span>
                        <br></br>
                        <div style={{ color: "black", fontWeight: "700", fontSize: "1.5rem", textAlign: "center", marginTop: "15px", }}>
                            <span>5000+</span>
                        </div>
                    </Card>
                </Col>
                <Col xs={12} sm={12} md={6}>
                    <Card bordered={true} style={{ fontSize: "2.25rem", lineHeight: "1", letterSpacing: ".56px", margin: "10px 0px", boxShadow: " 10px 10px 1px #000", textAlign: "center" }}>
                        <span>Clients</span>
                        <br></br>
                        <div style={{ color: "black", fontWeight: "700", fontSize: "1.5rem", textAlign: "center", marginTop: "15px", }}>
                            <span>50+</span>
                        </div>
                    </Card>
                </Col>
            </Row>
            <Divider style={{ borderStyle: "dashed solid" }} />
            <Row >
                <Col md={6} style={{ backgroundColor: "#FFFF" }}>
                </Col>
                <Col md={12}>
                    <div style={{ color: "black", fontWeight: "700", fontSize: "1.5rem", textAlign: "left", margin: "15px" }}>
                        <span>techTalent is a platform that aims to connect Sri Lankan tech talent</span>
                    </div>
                    <Row style={{
                        margin: "20px",
                        textAlign: "center", alignItems: "center",
                        justifyContent: "center",
                    }} >
                        <Col span={12} width="100%">
                            <Avatar style={{ width: "100%", height: "100%" }} size={"100%"} src="https://seaview.cubeapis.com/v1/generate?image=https%3A%2F%2Ftsc-website-production.s3.amazonaws.com%2Fuploads%2F2019%2F02%2FiOS-Feature-Block-2-Copy-e1551111974772.png&width=536" />
                        </Col>
                        <Col span={12}>
                            <div style={{ color: "black", fontWeight: "500", fontSize: "1rem", textAlign: "left", margin: "15px" }}>
                                <span>techTalent is a platform that aims to connect Sri Lankan tech talent with tech companies both locally and globally.</span>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col md={6} style={{ backgroundColor: "#FFFF" }}>
                </Col>
                <Col span={24}>
                    <Divider style={{ borderStyle: "dashed solid" }} />
                </Col>
                <Col md={6} style={{ backgroundColor: "#FFFF" }}>
                </Col>
                <Col md={12}>
                    <div style={{ color: "black", fontWeight: "700", fontSize: "1.5rem", textAlign: "left", margin: "15px" }}>
                        <span>techTalent is a platform that aims to connect Sri Lankan tech talent</span>
                    </div>
                    <Row style={{
                        margin: "20px",
                        textAlign: "center", alignItems: "center",
                        justifyContent: "center",
                    }} >
                        <Col span={12}>
                            <div style={{ color: "black", fontWeight: "500", fontSize: "1rem", textAlign: "left", margin: "15px" }}>
                                <span>techTalent is a platform that aims to connect Sri Lankan tech talent with tech companies both locally and globally.</span>
                            </div>
                        </Col>
                        <Col span={12} width="100%">
                            <Avatar style={{ width: "100%", height: "100%" }} size={"100%"} src="https://seaview.cubeapis.com/v1/generate?image=https%3A%2F%2Ftsc-website-production.s3.amazonaws.com%2Fuploads%2F2019%2F02%2FiOS-Feature-Block-1-Copy.png&width=536" />
                        </Col>
                    </Row>
                </Col>
                <Col md={6} style={{ backgroundColor: "#FFFF" }}>
                </Col>
                <Col span={24}>
                    <Divider style={{ borderStyle: "dashed solid" }} />
                </Col>

            </Row>
            <Row
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgb(225, 225, 219)",
                    padding: "15px",
                    textAlign: "center", backgroundImage: `url(https://happydecay.com.au/wp-content/uploads/colourful-people.jpg)`, backgroundSize: "contain",
                    width: "100%",

                }}
            >
                <Col span={12} justifyContent={"center"}>
                    <a href="https://techtalent.lk" target={"_blank"} rel={"noreferrer"}>
                        <Card bordered={true} style={{ margin: "10px 0px", background: "white", color: "black", fontWeight: "700", fontSize: "1.1rem", textAlign: "left", boxShadow: " 10px 10px 1px #000" }}>
                            <span>techTalent.lk</span>
                            <span style={{ float: "right" }}>
                                <PlayCircleOutlined style={{ verticalAlign: "text-bottom" }} />
                            </span>
                        </Card>
                    </a>
                </Col>
            </Row>
            <Footer />
        </div >
    );
};
