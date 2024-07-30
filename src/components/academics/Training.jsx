import { motion } from "framer-motion";
import Card from "./Card";

function Training() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="mt-6 lgl:mt-20 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <Card
            title="Full Stack Development With MERN"
            subTitle="LPU | Phagwara, Punjab"
            result="Jun 2024 - Jul 2024"
            des="During the 4-week training period, proficiency was acquired in advanced React concepts such as hooks, 
                state management, and authentication, utilizing APIs. Knowledge was gained in Node Js, Express Js, and MongoDB, while 
                developing projects including a  todo list and a Internship website."
          />
          <Card
            title="Frontend Development with React.js"
            subTitle="CipherSchools | Chandigarh, Punjab"
            result="Jan 2024 - Feb 2024"
            des="Acquired proficiency in advanced React concepts such as hooks, state management, and authentication 
during a 4-week training period. Developed a Food Ordering website and a Smart Task Board like Trello or Notion, utilizing 
React for diverse functionalities to enhance skills."
          />
          <Card
            title="Frontend Development"
            subTitle="Board Infinity | Hoshiarpur, Punjab"
            result="Jul 2023 - Jun 2023"
            des="During the 4-week training period, Developed a responsive mobile website using HTML, CSS, and Bootstrap, created a comprehensive 
product description for a mobile device, and conducted thorough testing to ensure a polished and user-friendly experience."
          />
        </div>
      </div>
    </motion.div>
  );
}
export default Training;
