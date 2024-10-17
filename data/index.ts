export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Proficient in building interactive UIs with React.js, developing RESTful APIs with Node.js and Express.js, and managing data with MongoDB ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with location and time zone",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently working",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Want to hire me?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Ajiledone Portfolio Website",
    des: "Providing clients with best-in-class IT services, specializes in SAP and Blockchain-based solutions",
    img: "/ajiledone.png",
    iconLists: ["/next.svg", "/tail.svg", "/host.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Ajile-ERP",
    des: "Integrated management of main business processes, in real time mediated by software and technology",
    img: "erp.png",
    iconLists: ["/re.svg", "/tail.svg", "/stream.svg", "/host.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "Speaker-ore",
    des: "Time is Precious, Opportunities vast. No more endless searchless, No more wasted time. Your Voice Matters: Amplify your influence, one gig at a time",
    img: "spekerore.png",
    iconLists: ["/re.svg", "/host.svg", "/stream.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Roadjets Website",
    des: "Engineered a full-stack website with backend integration, resolving bugs and implementing features for enhanced user engagement.",
    img: "RoadJets.png",
    iconLists: ["/next.svg", "/tail.svg", "/host.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Durgesh was a game-changer for our project. Their expertise in MERN stack development helped us launch our application ahead of schedule. The attention to detail and responsiveness to feedback were exceptional. We couldn’t have asked for a better collaborator!",
    name: "Nikhil Choudhary",
    title: "Founder of Speakerore",
  },
  
  {
    quote:
      "Durgesh delivered a top-notch web application that met all our needs. His skills and innovative approach resulted in a user-friendly and highly functional product. We have received positive feedback from our users and couldn't be happier with the outcome.",
    name: "Ritwik",
    title: "Founder of Roadjet",
  },
  {
    quote:
      "Working with Mr. Rajak on our web application was a transformative experience. His expertise in creating dynamic and user-friendly applications helped us streamline our operations and enhance user satisfaction. The project was delivered on time was on our expectations.",
    name: "Alex Mitchell",
    title: "CEO at Tech Innovators",
  },
  {
    quote:
      "Durgesh is an outstanding developer. His skills in MongoDB, Express, React, and Node.js are top-notch. They quickly understood our requirements and delivered a high-quality product that exceeded our expectations. Highly recommended!",
    name: "Mohit Roshan",
    title: "Director of AlphaStream Enterprises",
  },
  
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js and node.js enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Web Developer - Ajiledone Tech",
    desc: "Designed and developed fully responsive dynamic web applications using React and Node.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  // {
  //   id: 3,
  //   title: "Freelance node.js Project",
  //   desc: "Led the dev of a node.js backend projects for a client, from initial concept to deployment on digital ocean.",
  //   className: "md:col-span-2", // change to md:col-span-2
  //   thumbnail: "/exp3.svg",
  // },
  // {
  //   id: 4,
  //   title: "Lead MERN Stack Developer",
  //   desc: "Developed and maintained user-facing features using modern web technologies.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp4.svg",
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/durgesh-ajile"
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://linkedin.com/in/durgesh-rajak-4222b11a9"
  },
];
