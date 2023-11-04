import ProjectItem from "./ProjectItem";
import CustomGrid from "../global/CustomGrid";
import ComingSoon from "./ComingSoon";

const projects = [
  {
    name: "Charlie's",
    cover: "/img/charlies.png",
    stack: ["/svg/js.svg", "/svg/react.svg", "/svg/sass.svg"],
    url: "https://charlies-chocolate.netlify.app/",
  },
  {
    name: "GameSpace",
    cover: "/img/wbs.png",
    stack: ["/svg/js.svg", "/svg/react.svg", "/svg/sass.svg"],
    url: "https://gamespacelib.netlify.app/",
  },
  {
    name: "Portfolio",
    cover: "/img/portfolio.png",
    stack: ["/svg/js.svg", "/svg/react.svg", "/img/styled-components.png"],
    url: "https://charlies-chocolate.netlify.app/",
  },
  {
    name: "Deermood",
    cover: "/img/deermood.png",
    stack: ["/svg/html.svg", "/svg/css.svg", "/svg/js.svg"],
    url: "https://deermood.netlify.app/",
  },
];

function ProjectList() {
  return (
    <CustomGrid as="ul" columns={2}>
      {projects.map((p, i) => (
        <ProjectItem key={i} project={p} />
      ))}
      <ComingSoon />
    </CustomGrid>
  );
}

export default ProjectList;
