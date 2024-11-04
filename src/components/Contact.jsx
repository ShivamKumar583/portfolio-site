import React, { useRef, useState } from 'react'
import {motion} from 'framer-motion'
import { slideIn } from '../utils/motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import {EarthCanvas} from './canvas'
const Contact = () => {
  const formRef = useRef()
  const [form ,setForm] = useState({
    name:'',
    email:'',
    message:'',
  })

  const [loading,setLoading] = useState(false);

  const handleChange = (e) =>{
    const {name ,value} = e.target;

    setForm({...form,[name] : value})
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
  }

  return (
    <div className=' xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left' ,'tween' , 0.2,1)} className=' flex-[0.75] p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <p>Email Address: shivamkmr583@gmail.com</p>
      </motion.div>
      <motion.div variants={slideIn('right' ,'tween' , 0.2,1)} className=' xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas/>

      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,'contact')