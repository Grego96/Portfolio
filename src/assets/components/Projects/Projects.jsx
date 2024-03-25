import React from "react";
import Project from "../project/project";
import "./projects.css";

function projects() {
  let projects = [
    {
      name: "hola",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac tristique nibh. Proin aliquam sem eget faucibus lobortis. Pellentesque ultricies dui vitae finibus consequat. Vivamus.",
      img: "https://picsum.photos/1024/600",
    },
    {
      name: "hola",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac tristique nibh. Proin aliquam sem eget faucibus lobortis. Pellentesque ultricies dui vitae finibus consequat. Vivamus.",
      img: "https://picsum.photos/1024/600",
    },
    {
      name: "hola",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac tristique nibh. Proin aliquam sem eget faucibus lobortis. Pellentesque ultricies dui vitae finibus consequat. Vivamus.",
      img: "https://picsum.photos/1024/600",
    },
    {
      name: "hola",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac tristique nibh. Proin aliquam sem eget faucibus lobortis. Pellentesque ultricies dui vitae finibus consequat. Vivamus.",
      img: "https://picsum.photos/1024/600",
    },
  ];

  return (
    <div>
      {projects.map((project) => {
        return <Project project={project} />;
      })}
    </div>
  );
}

export default projects;
