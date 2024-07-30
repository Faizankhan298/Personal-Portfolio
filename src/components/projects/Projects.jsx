import React from "react";
import Title from "../layouts/Title";
import {
  UrlImg,
  orderfastImg,
  todoImg,
  diceImg,
  drum,
  internImg,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="URL Shortener"
          des="Node.js | Express.js | MongoDB | EJS"
          src={UrlImg}
          githubLink={"https://github.com/Faizankhan298/UrlShortener"}
          liveLink={"https://urlshortener-ngnj.onrender.com/"}
        />
        <ProjectsCard
          title="OrderFast Website (Food Ordering)"
          des="React.js | Node.js | Express.js | MongoDB "
          src={orderfastImg}
          githubLink={"https://github.com/Faizankhan298/orderfastBackend"}
          liveLink={"https://orderfastfrontend.onrender.com/"}
        />
        <ProjectsCard
          title="Internship Portal"
          des="React.js | Node.js | Express.js | MongoDB "
          src={internImg}
          githubLink={"https://github.com/Faizankhan298/internshipBackend"}
          liveLink={"https://internshipfrontend-po9g.onrender.com/ "}
        />
        <ProjectsCard
          title="Todo List Website"
          des="React.js | CSS"
          src={todoImg}
          githubLink={"https://github.com/Faizankhan298/ToDo-List"}
          liveLink={"https://todo-list-bxsq.onrender.com/"}
        />
        <ProjectsCard
          title="Random Dice Game"
          des="HTML | CSS | JavaScript"
          src={diceImg}
          githubLink={"https://github.com/Faizankhan298/Random_Dice"}
          liveLink={"https://faizankhan298.github.io/Random_Dice/ "}
        />
        <ProjectsCard
          title="Drum Kit Game"
          des="HTML | CSS | JavaScript"
          src={drum}
          githubLink={"https://github.com/Faizankhan298/Drum-Kit"}
          liveLink={"https://faizankhan298.github.io/Drum-Kit/ "}
        />
      </div>
    </section>
  );
};

export default Projects;
