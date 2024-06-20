"use client";

import React  from 'react'
import SectionHeading from '@/components/section-heading';
import {motion} from "framer-motion";
import { useSectionInView } from '@/lib/hooks';


export default function About() {
 const { ref } = useSectionInView("About");


  return (
    <motion.section 
    ref={ref}
    initial={{
      opacity:0,y:100
    }}
    animate={{opacity:1,y:0}}
    transition={{delay:0.175}}
    className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
    id='about'
    >
   <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        As a seasoned software developer with a knack for problem-solving and a passion for technology. I've embarked on an exciting 
        journey to pivot my career towards data analysis. My journey began with a degree in{" "}
        <span className="font-medium">Computer Science</span>, where I honed my skills in logical thinking and analytical problem solving.
        Eager to expand my horizons, I've transitioned into the realm of data analysis,
        leveraging my proficiency in {" "}
         {" "}
        <span className="font-medium">
          Tableau, PowerBi, SQL, and Excel
        </span>
        , coupled with a strong coding background. With a keen eye for details and a penchat for uncovering insights, 
        I thrive on turning raw data into actionable strategies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a data 
        analyst.
      </p>
      <p>
        <span className="italic">Beyond my professional pursuits</span>, I find joy in reading, 
        cinema, games, and culinary adventures. I also enjoy{" "}
         I'm actively seeking opportunities to apply my 
        expertise in data analysis and contribute to innovative projects. {" "}
        Let's collaborate to unlock the potential 
        of data-driven solutions.
      </p>
    </motion.section>
  );
}
