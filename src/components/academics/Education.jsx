import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="mt-6 lgl:mt-20 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <Card
            title="B-Tech in Computer Science and Engineering"
            subTitle="Lovely Professional University, Phagwara, Punjab ( 2021 - 2025 )"
            result="CGPA: 8.11/10"
            des="The rigorous training at Lovely Professional University equips students with the skills and knowledge 
                to thrive in diverse sectors of the economy, cultural fields, and advanced technology."
          />
          <Card
            title="Intermediate Education in Science"
            subTitle="Prince Academy of Higher Education, Sikar Rajasthan ( 2019 - 2021 )"
            result="Grade: 8.8/10"
            des="Intermediate education is tertiary education that leads to the award of an academic degree. The comprehensive 
                curriculum at Prince Academy of Higher Education prepares students for academic and professional excellence in various fields."
          />
          <Card
            title="Matriculation"
            subTitle="Swami Vivekanand Govt Model School, Banswara Rajasthan ( 2017 - 2019 )"
            result="Grade: 7.38/10"
            des="Matriculation also referred to as post-primary education, covers two distinct phases within the 
                classification of education. It serves as a crucial foundation for students as they prepare to enter higher 
                levels of learning or vocational training."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
