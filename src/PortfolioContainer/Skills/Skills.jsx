
import "./Skills.css";
import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
    };

    const skills = [
        { name: "HTML", percentage: 100 },
        { name: "CSS", percentage: 100 },
        { name: "JavaScript", percentage: 80 },
        { name: "React.js", percentage: 89 }
    ];

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx expanded">
                            <h2>My Skills</h2>
                            <p>Mastering the art of web development with passion and dedication.</p>
                            <Carousel responsive={responsive} infinite={true} className="skills-slider">
                                {skills.map((skill, index) => (
                                    <div className="item" key={index}>
                                        <div className="progress-circle">
                                            <svg width="120" height="120">
                                                <circle cx="60" cy="60" r="50" stroke="#222" strokeWidth="10" fill="none" />
                                                <circle cx="60" cy="60" r="50" stroke="orange" strokeWidth="10" fill="none" 
                                                    strokeDasharray={`${2 * Math.PI * 50}`} 
                                                    strokeDashoffset={`${2 * Math.PI * 50 * (1 - skill.percentage / 100)}`} 
                                                    strokeLinecap="round"
                                                />
                                                <text x="50%" y="50%" textAnchor="middle" dy=".35em" fill="white" fontSize="18px">{skill.percentage}%</text>
                                            </svg>
                                        </div>
                                        <h5>{skill.name}</h5>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
