import Title from "../layouts/Title";
import SkillsInput from "./SkillsInput";

const Skills = () => {
  return (
    <div
      id="skills"
      className="wrapper w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="My Skills" />
      </div>
      <div className="flex gap-4 flex-wrap">
        <SkillsInput title="Java" link="https://dev.java/learn/" />
        <SkillsInput
          title="Javascript"
          link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        />
        <SkillsInput title="React.js" link="https://react.dev/" />
        <SkillsInput title="Node.js" link="https://nodejs.org/en" />

        <SkillsInput title="Express.js" link="https://expressjs.com/" />

        <SkillsInput title="MongoDB" link="https://www.mongodb.com/" />
        <SkillsInput title="MySQL" link="https://www.mysql.com/" />
        <SkillsInput title="Tailwindcss" link="https://tailwindcss.com/" />
        <SkillsInput
          title="HTML5"
          link="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
        />
        <SkillsInput
          title="CSS3"
          link="https://developer.mozilla.org/en-US/docs/Web/CSS"
        />
        <SkillsInput title="VS Code" link="https://code.visualstudio.com/" />

        <SkillsInput title="Git" link="https://git-scm.com/" />
        <SkillsInput title="Github" link="https://github.com/" />
        <SkillsInput title="Figma" link="https://www.figma.com/" />
        <SkillsInput title="Canva" link="https://www.canva.com/" />
        <SkillsInput title="Generative AI" link="https://chatgpt.com/" />

        <SkillsInput title="netlify" link="https://www.netlify.com/" />
        <SkillsInput title="render" link="https://www.render.com/" />
      </div>
    </div>
  );
};

export default Skills;
