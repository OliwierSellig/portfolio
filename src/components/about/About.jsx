import CustomGrid from "../global/CustomGrid";
import SectionHeading from "../global/SectionHeading";
import Cover from "./Cover";
import Description from "./Description";
import TechnologiesList from "./TechnologiesList";

function About() {
  return (
    <CustomGrid columns={2} marginBottom={4.2}>
      <Cover />
      <Description />
      <SectionHeading justify="center">My Techstack</SectionHeading>
      <TechnologiesList />
    </CustomGrid>
  );
}

export default About;
