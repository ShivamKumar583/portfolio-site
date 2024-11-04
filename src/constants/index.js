import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma, 
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    connectsu,
    peertopeer,
    eduverse
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Project",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
      id: "resume",
      title: "Resume",
    },
    
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Problem Solver",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "ConnectsU",
      company_name: "Full Stack Project",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Chat Application",
      points: [
        "Technologies used: ExpressJs , ReactJs , TailwindCSS , MongoDB , WebRTC, Socket.IO , JWT.",
        "Developed a real-time chat app with user authentication using JWT.",
        "Integrated real-time one-to-one video calling functionality using WebRTC and Simple-Peer,enhancing user interaction.",
        "Added real-time reactions to messages, allowing users to respond instantly to messages with emojis",
        "Built a real-time unseen message count feature, giving users clear notification of new messages across chats.",
        "Implemented online/offline status, search by name/email, media sharing, profile picture uploads, and secure session management with cookies, resulting in a 30% increase in user retention.",
        "Achieved a 10-20 ms improvement in message delivery time.",
        "Reduced upload errors by 15-25% through optimizations."
      ],
    },
    {
      title: "EduVerse",
      company_name: "Full Stack Project",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Edtech Platform",
      points: [
        "Technologies used: ExpressJs , ReactJs , TailwindCSS , MongoDB , WebRTC , JWT.",
        "Designed and structured the backend using ExpressJs ,efficiently handling RESTful APIs and server-side operations to ensure robust performance and scalability.",
        "Crafted the frontend with ReactJs, delivering a highly responsive interface,enhancing user experience",
        "Incorporated and integrated crucial features such as User Authentication, Course Management,Payment Integration, User Profiles, Responsive Design and One-on-One Video Conferencing.",
        "Enhanced performance by optimizing loading times, successfully reducing latency by 20-30%",
      ],
    },
    {
      title: "PeerToPeer",
      company_name: "Full Stack Project",
      icon: shopify,
      iconBg: "#383E56",
      date: "Video Chat Application",
      points: [
        "Technologies: PeerJS, WebRTC, WebSocket, Express, Next.js , TailwindCSS",
        " Built a real-time one-to-one video call feature with WebRTC and WebSocket.",
        "Developed backend with Express for signaling; frontend with Next.js for responsive UI.",
        "Key Features: Mute/Unmute, Start/Stop video, End call, and shareable invite link.",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "ConnectsU",
      description:
        "Created a chat application using the MERN stack and Socket.IO for real-time messaging. Features include real-time messaging and video calling, online/offline status, media sharing, profile picture upload, emoji reactions, unread message count, and secure login with JWT.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "expressjs",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
      ],
      image: connectsu,
      source_code_link: "https://github.com/ShivamKumar583/ConnectsU-frontend",
      live_link:"https://connectsufrontend.vercel.app/login"
    },
    {
      name: "EduVerse",
      description:
        " Developed a comprehensive online learning platform with a React frontend and Express backend, offering an intuitive course enrollment system and scheduling features. Users can check instructor availability in real-time, book sessions, and join live meetings via shared links sent through email. The platform focuses on a seamless user experience for both students and instructors, enhancing online learning interactions.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "expressjs",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
      ],
      image: eduverse,
      source_code_link: "https://github.com/ShivamKumar583/EduVerse-Hosting",
      live_link:"https://edu-verse-hosting.vercel.app/"
    },
    {
      name: "PeerToPeer",
      description:
        "Developed a real-time video calling app using PeerJS, WebRTC, and WebSocket for seamless connectivity. Users can start/end calls, mute/unmute audio, and invite others by sharing a unique call code.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "expressjs",
          color: "green-text-gradient",
        },
        {
          name: "webrtc",
          color: "pink-text-gradient",
        },
        
      ],
      image: peertopeer,
      source_code_link: "https://github.com/ShivamKumar583/peer-to-peer-frontend",
      live_link:"https://peer-to-peer-frontend-ten.vercel.app/"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };