import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import {motion} from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css';
import {styles} from '../styles'
import {experiences} from '../constants'
import {SectionWrapper} from '../hoc'
import { textVariant } from '../utils/motion';

const ExperienceCard = ({experience}) => (
  <VerticalTimelineElement contentStyle={{
    background:'#1d1836' , color:'#fff'
  }}
  contentArrowStyle={{borderRight:'7px solid #232631'}}
  date={experience.date}
  iconStyle={{background:experience.iconBg}}
 
  >
  <div>
    <h3 className=' text-white text-[24px] font-bold'>{experience.title}</h3>
    <p className=' text-secondary text-[16px] font-semibold'>{experience.company_name}</p>
  </div>

  <ul className=' mt-5 list-disc ml-5 space-y-2'>
    {experience.points.map((point,index) => (
      <li key={`experience-point-${index}`} className=' text-white-100 text-[14px] pl-1 tracking-wider' >
      {point}
      </li>
    ))}

  </ul>
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Projects Overview.</h2>

        <p className=" mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
        Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described. It reflex my ability
          to solve complex problems,work with different technologies, and manage
          projects effectively.
        </p>

      </motion.div>

      <div className=' mt-20 flex flex-col'>
        <VerticalTimeline>
          {
            experiences.map((experience,index) => (
              <ExperienceCard key={index} experience={experience} />
            ))
          }
        </VerticalTimeline>

      </div>

    </>
  )
}

export default SectionWrapper(Experience , 'work')