import styled from "styled-components";

const ChartContainer = styled.div`
  padding: 80px 0 0px 0;
  min-height: 800px;
  width: 900px;
  display: flex;
  flex: 1;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  flex-direction: column;
  margin-bottom: 150px;
  @media (max-width: 900px) {
    width: 700px;
  }
  @media (max-width: 700px) {
    width: 95%;
  }
`;

const ChartLines = styled.div`
position: relative;
display: flex;
justify-content: space-around;
height: 70px;
width: 80%;
background: rgba(219,100,0, 0.4);
}
@media (max-width: 545px ) {
    width: 100%;
   
}

`;

const ChartExperience = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #051e3e;
  position: absolute;
  left: 0;
  height: 100%;
  padding: 0 0px 0 40px;
  color: white;
  @media (max-width: 545px) {
    padding: 0 0px 0 10px;
  }
`;

const ChartBorder = styled.div`
  border-top: 35px solid transparent;
  border-bottom: 35px solid transparent;
  border-left: 35px solid #051e3e;
  position: relative;
  left: 35px;
`;

const ExperiencePercentage = styled.div`
  position: absolute;
  right: 10px;
  display: flex;
  align-items: center;
  @media (max-width: 545px) {
    right: 0px;
  }
`;

const ChartHeadline = styled.h2`
  align-items: center;
  text-align: center;
  font-size: 28px;
  color: white;
  font-weight: 400;
  margin-bottom: 20px;
  font-family: "Roboto", sans-serif;
`;

function Chart() {
  const experience = [
    { tech: "HTML/CSS", percentage: 80 },
    { tech: "JavaScript", percentage: 70 },
    { tech: "React", percentage: 65 },
    { tech: "Node.js", percentage: 45 },
    { tech: "Go", percentage: 25 },
    { tech: "Git", percentage: 60 },
    { tech: "Figma", percentage: 80 },
  ];

  return (
    <ChartContainer>
      <ChartHeadline>Experience</ChartHeadline>
      <>
        <ChartLines>
          <ChartExperience
            style={{ width: experience[0].percentage - 10 + "%" }}
          >
            <div>{experience[0].tech}</div>{" "}
            <ExperiencePercentage>
              {experience[0].percentage} %
            </ExperiencePercentage>{" "}
            <ChartBorder></ChartBorder>
          </ChartExperience>
        </ChartLines>
        <ChartLines>
          <ChartExperience
            style={{ width: experience[1].percentage - 10 + "%" }}
          >
            <div>{experience[1].tech}</div>{" "}
            <ExperiencePercentage>
              {experience[1].percentage} %
            </ExperiencePercentage>{" "}
            <ChartBorder></ChartBorder>
          </ChartExperience>
        </ChartLines>
        <ChartLines>
          <ChartExperience
            style={{ width: experience[2].percentage - 10 + "%" }}
          >
            <div>{experience[2].tech}</div>{" "}
            <ExperiencePercentage>
              {experience[2].percentage} %
            </ExperiencePercentage>{" "}
            <ChartBorder></ChartBorder>
          </ChartExperience>
        </ChartLines>
        <ChartLines>
          <ChartExperience
            style={{ width: experience[3].percentage - 10 + "%" }}
          >
            <div>{experience[3].tech}</div>{" "}
            <ExperiencePercentage>
              {experience[3].percentage} %
            </ExperiencePercentage>{" "}
            <ChartBorder></ChartBorder>
          </ChartExperience>
        </ChartLines>
        <ChartLines>
          <ChartExperience
            style={{ width: experience[4].percentage + 5 + "%" }}
          >
            <div>{experience[4].tech}</div>{" "}
            <ExperiencePercentage>
              {experience[4].percentage} %
            </ExperiencePercentage>{" "}
            <ChartBorder></ChartBorder>
          </ChartExperience>
        </ChartLines>
        <ChartLines>
          <ChartExperience
            style={{ width: experience[5].percentage - 10 + "%" }}
          >
            <div>{experience[5].tech}</div>{" "}
            <ExperiencePercentage>
              {experience[5].percentage} %
            </ExperiencePercentage>{" "}
            <ChartBorder></ChartBorder>
          </ChartExperience>
        </ChartLines>
        <ChartLines>
          <ChartExperience
            style={{ width: experience[6].percentage - 10 + "%" }}
          >
            <div>{experience[6].tech}</div>{" "}
            <ExperiencePercentage>
              {experience[6].percentage} %
            </ExperiencePercentage>{" "}
            <ChartBorder></ChartBorder>
          </ChartExperience>
        </ChartLines>
      </>
    </ChartContainer>
  );
}

export default Chart;
