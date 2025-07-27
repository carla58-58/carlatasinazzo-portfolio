export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "References", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I focus on learning and continuous improvement. Teamwork and open communication are essential for success.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/computer.avif",
    spareImg: "",
  },
  {
    id: 2,
    title: "I am available to work remotely in different time zones.",
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
    description: "I am continually learning to improve my:",
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
    title: "Currently building a full-stack React Native Uber Clone Application",
    description: "What's new?",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.png",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Let's connect and collaborate on exciting projects together!",
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
    title: "Wine Route Mendoza",
    des: "Explore the variety of wine tours in Mendoza with this MERN Website.",
    img: "/project1.png",
    iconLists: ["/javascript.png", "/re.svg", "/nodejs.png","/expressjs.png", "/mongodb.png"],
    link: "https://1drv.ms/v/c/45999e192e8647ef/Ea5JNzi2TYtCkVStAcymU3MBqFcm9s8o4dzNHh4YXLprvg?e=HghKIR/",
  },
  {
    id: 2,
    title: "Animated Apple Iphone Clone",
    des: "React Recreation of Apple iPhone 15 Pro website.",
    img: "/project2.png",
    iconLists: ["/re.svg", "/tail.svg", "/three.svg", "/gsap.svg", "/javascript.png"],
    link: "https://apple-website-carla.vercel.app/",
  },
  {
    id: 3,
    title: "Library Management System",
    des: "Django Library Management System App with a SQLite Database.",
    img: "/project3.png",
    iconLists: ["/python.png", "/django.png", "/sqlite.png", "/bootstrap.png", "html.png"],
    link: "https://library-management-system-2hyr.onrender.com/",
  },
  {
    id: 4,
    title: "Weather App",
    des: "Spring Boot Dynamic weather App that fetches real-time weather data.",
    img: "/project4.png",
    iconLists: ["/springboot.png", "/java.png"],
    link: "https://weather-app-v5tu.onrender.com/",
  },
  {
    id: 5,
    title: "Finance App",
    des: "ASP.NET Core MVC Finance App with a SQLite Database.",
    img: "/project5.png",
    iconLists: ["/csharp.jpg", "/netcore.png", "/sqlite.png", "/chartjs.jpg", "docker.png"],
    link: "https://financeapp-nzxh.onrender.com",
  },
  {
    id: 6,
    title: "Zizi soda landing page",
    des: "Next.js animated page, use of interactive 3D graphs and Prismic.",
    img: "/project6.png",
    iconLists: ["/nextjs.jpg", "/re.svg", "/three.svg", "/prismic.png", "/gsap.svg"],
    link: "https://zizi-six.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Working alongside Carla has always been inspiring. She bring a unique blend of creativity and precision to every project, and her willingness to take on new challenges is truly admirable. Even in high-pressure situations, Carla remained calm, communicated clearly, and supported the team. I am excited to see her pursue a career in software development. I am confident that her strong work ethic and passion for learning will lead to great success in this new field. Anyone would be fortunate to have Carla on their team.",
    name: "Nicolas Schiaffino",
    title: "Project and Construction engineer",
    img: "/profile1.jpg", 
  },
  {
    quote:
      "I've had the pleasure of working with Carla on several civil engineering projects, and I can confidently say that her analytical thinking and dedication to problem-solving are second to none. Carla consistently demonstrated a strong ability to learn new concepts quickly and adapt to changing project requirements. I have no doubt that these qualities, combined with their collaborative spirit and attention to detail, will make her an excellent software developer. I wholeheartedly support her transition into the tech industry.",
    name: "Sandra Albiol",
    title: "Project and Construction engineer",
    img: "/profile2.jpg", 
  },
  {
    quote:
      "I have had the privilege of working with Carla on multiple projects throughout college, always with a very good disposition and discipline, providing innovative solutions to different projects. Carla consistently demonstrated strong leadership skills and a collaborative spirit, making her an invaluable member of any team. Her attention to detail and ability to adapt to new challenges ensured the success of our projects, even under tight deadlines. I am confident that she will continue to excel and make significant contributions in her future endeavors.",
    name: "Sebastian Virdo",
    title: "Project and Construction engineer",
    img: "/profile3.jpg", 
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Higher Diploma in Science in Computing",
    desc: "National College of Ireland, Dublin, Ireland",
    className: "md:col-span-2",
    thumbnail: "/exp1.png",
  },
  {
    id: 2,
    title: "The Odin Project Bootcamp",
    desc: "Self-directed online learning",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.png",
  },
  {
    id: 3,
    title: "Specialization in Management Engineering",
    desc: "National Technological University, Mendoza, Argentina",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.png",
  },
  {
    id: 4,
    title: "Bachelor of Civil Engineering",
    desc: "National University of Cuyo, Mendoza, Argentina",
    className: "md:col-span-2",
    thumbnail: "/exp4.png",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/carla58-58?tab=repositories",
  },
  {
    id: 2,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/carla-brenda-tasinazzo-albiol-147783169/",
  },
];
