import ProjectItem from "./ProjectItem";
import CustomGrid from "../global/CustomGrid";
import styled from "styled-components";

const projects = [
  {
    name: " GameSpace",
    cover: "/img/wbs.png",
    stack: ["/svg/js.svg", "/svg/react.svg", "/svg/sass.svg"],
  },
  {
    name: " GameSpace",
    cover: "/img/wbs.png",
    stack: ["/svg/js.svg", "/svg/react.svg", "/svg/sass.svg"],
  },
  {
    name: " GameSpace",
    cover: "/img/wbs.png",
    stack: ["/svg/js.svg", "/svg/react.svg", "/svg/sass.svg"],
  },
  {
    name: " GameSpace",
    cover: "/img/wbs.png",
    stack: ["/svg/js.svg", "/svg/react.svg", "/svg/sass.svg"],
  },
  {
    name: " GameSpace",
    cover: "/img/wbs.png",
    stack: ["/svg/js.svg", "/svg/react.svg", "/svg/sass.svg"],
  },
];

function ProjectList() {
  return (
    <CustomGrid as="ul" columns={2}>
      {projects.map((p, i) => (
        <ProjectItem key={i} project={p} />
      ))}
    </CustomGrid>
  );
}

export default ProjectList;
