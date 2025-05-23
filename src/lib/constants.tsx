import {
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiPython,
  SiGit,
  SiGithub,
  SiVercel,
  SiNetlify,
  // SiVscode,
  SiWordpress,
  SiFigma,
  SiCanva,
  SiShadcnui,
  SiFastapi,
  SiSupabase,
  SiClerk,
  SiStripe,
  SiSanity,
  SiFramer,
  SiAuth0,
  SiContentful,
} from "react-icons/si";
import Image from "next/image";
import { BiLogoFirebase } from "react-icons/bi";

export const navLinks = [
  {
    id: 1, // <-- Added back the unique ID
    name: "Home",
    link: `/`,
  },
  {
    id: 2,
    name: "About",
    link: `/about`,
  },
  {
    id: 3,
    name: "Services",
    link: `/services`,
  },
  {
    id: 4,
    name: "Work",
    link: `/my-work`,
  },
  {
    id: 5,
    name: "Testimonials",
    link: `/testimonials`,
  },
];


  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/TayyabCoders"
    },
    // {
    //   id: 2,
    //   img: "/twit.svg",
    // },
    {
      id: 2,
      img: "/link.svg",
      link: "https://www.linkedin.com/in/tayyab-faisal-b668992a9/"
    },
  ];

  export const skillGroups = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", icon: <SiHtml5 className="text-orange-600 w-8 h-8" /> }, // Corrected to official orange
        { name: "CSS", icon: <SiCss3 className="text-blue-600 w-8 h-8" /> }, // Corrected to official blue
        {
          name: "JavaScript",
          icon: <SiJavascript className="text-yellow-500 w-8 h-8" />, // Corrected to official yellow
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-blue-700 w-8 h-8" />, // Corrected to official TypeScript blue
        },
        {
          name: "Tailwind",
          icon: <SiTailwindcss className="text-teal-500 w-8 h-8" />, // Corrected to official teal
        },
        {
          name: "React Js",
          icon: <SiReact className="text-cyan-500 w-8 h-8" />, // Corrected to official cyan
        },
        {
          name: "Next Js",
          icon: <SiNextdotjs className="text-black w-8 h-8" />, // Corrected to official black
        },
        {
          name: "Zustand",
          icon: (
            <Image src="/icon/zustand.png" alt="Zustand" width={20} height={20} />
          ),
        },
        {
          name: "Redux",
          icon: <SiRedux className="text-purple-600 w-8 h-8" />, // Corrected to official purple
        },
        {
          name: "Shadcn UI",
          icon: <SiShadcnui className="text-gray-500 w-8 h-8" />, // Adjusted for a consistent UI
        },
        {
          name: "Material UI",
          icon: (
            <Image
              src="/icon/materialui.svg"
              alt="Material UI"
              width={20}
              height={20}
            />
          ),
        },
        {
          name: "Motion",
          icon: <SiFramer className="text-black w-8 h-8" />, // Corrected to official black
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          name: "Python",
          icon: <SiPython className="text-blue-500 w-8 h-8" />, // Corrected to official Python blue
        },
        {
          name: "Fast API",
          icon: <SiFastapi className="text-teal-600 w-8 h-8" />, // Corrected to official FastAPI teal
        },
        {
          name: "Next.Js API",
          icon: <SiNextdotjs className="text-black w-8 h-8" />, // Matches official black
        },
        {
          name: "MongoDB",
          icon: <SiMongodb className="text-green-500 w-8 h-8" />, // Corrected to official MongoDB green
        },
        {
          name: "Firebase",
          icon: <BiLogoFirebase className="text-yellow-500 w-8 h-8" />, // Corrected to official Firebase yellow
        },
        {
          name: "Supabase",
          icon: <SiSupabase className="text-green-500 w-8 h-8" />, // Corrected to official Supabase green
        },
        {
          name: "Neon",
          icon: (
            <Image src="/icon/neon.svg" alt="Neon DB" width={20} height={20} />
          ),
        },
        {
          name: "Stripe",
          icon: <SiStripe className="text-indigo-500 w-8 h-8" />, // Corrected to official Stripe indigo
        },
        {
          name: "Clerk",
          icon: <SiClerk className="text-blue-600 w-8 h-8" />, // Adjusted for consistency
        },
        {
          name: "Next Auth",
          icon: <SiAuth0 className="text-orange-600 w-8 h-8" />, // Adjusted for official Auth0 orange
        },
        {
          name: "SQL Model",
          icon: (
            <Image
              src="/icon/sqlmodel.png"
              alt="SQL Model"
              width={20}
              height={20}
            />
          ),
        },
      ],
    },
    {
      title: "Others",
      skills: [
        { name: "Git", icon: <SiGit className="text-orange-600 w-8 h-8" /> }, // Corrected to official Git orange
        {
          name: "GitHub",
          icon: <SiGithub className="text-black w-8 h-8" />, // Matches official black
        },
        { name: "Vercel", icon: <SiVercel className="text-black w-8 h-8" /> }, // Matches official black
        {
          name: "Netlify",
          icon: <SiNetlify className="text-teal-500 w-8 h-8" />, // Corrected to official teal
        },
        {
          name: "VS Code",
          icon: <SiWordpress className="text-blue-500 w-8 h-8" />, // Corrected to official VS Code blue
        },
        {
          name: "WordPress",
          icon: <SiWordpress className="text-blue-700 w-8 h-8" />, // Corrected to official WordPress blue
        },
        {
          name: "Sanity",
          icon: <SiSanity className="text-red-500 w-8 h-8" />, // Corrected to official Sanity red
        },
        {
          name: "Contentful",
          icon: <SiContentful className="text-red-500 w-8 h-8" />, // Corrected to official Sanity red
        },
        { name: "Figma", icon: <SiFigma className="text-pink-600 w-8 h-8" /> }, // Corrected to official Figma pink
        { name: "Canva", icon: <SiCanva className="text-blue-500 w-8 h-8" /> }, // Corrected to official Canva blue
      ],
    },
  ];
  
  export const experiences = [
    // {
    //   name: "EverDream Solution",
    //   role: "CEO & Founder",
    //   url: "https://linktr.ee/everdreamsolutions",
    //   start: "December 2024",
    //   end: "Present",
    //   shortDescription: [
    //     "Established and grew a company providing innovative Web Development, Digital Marketing, SEO & Graphic Designing services.",
    //     "Led a team of developers and designers to deliver high-quality software for clients worldwide.",
    //     "Focused on incorporating the latest technologies like AI and cloud computing into solutions.",
    //   ],
    // },
    {
      name: "Upwork",
      role: "Full Stack Developer",
      url: "https://www.upwork.com/freelancers/~01366e75e7b399839f",
      start: "May 2024",
      end: "Present",
      shortDescription: [
        "Provided full-stack development services, building web applications using technologies like React, Next.js, Node.js, and TypeScript.",
        "Collaborated with international clients to deliver scalable and efficient web development solutions.",
        "Delivered high-quality projects within deadlines, enhancing client satisfaction and trust.",
        "Offered technical support and consultation to team members and clients during development cycles.",
      ],
    },
    {
      name: "Techverse51",
      role: "Co-Founder",
      url: "https://www.linkedin.com/company/techverse51/",
      start: "March 2024",
      end: "August 2024",
      shortDescription: [
        "Co-founded an initiative focused on teaching Full Stack Development to aspiring developers.",
        "Taught Full Stack Development, covering modern web technologies and best practices.",
        "Managed the company's social media accounts to enhance online visibility and engagement.",
        "Played a key role in organizing and delivering educational programs for students.",
      ],
    },
    {
      name: "Icon Designs",
      role: "Sales & Lead Generation",
      url: "",
      start: "July 2022",
      end: "February 2022",
      shortDescription: [
        "Generated leads through various platforms, including social media, freelancing sites, and online communities.",
        "Created and managed strategies to identify and connect with potential clients effectively.",
        "Built a network of prospects, converting them into valuable customers through tailored proposals.",
        "Collaborated with the sales team to achieve and exceed monthly revenue targets.",
        "Conducted competitive analysis and market research to refine sales techniques and identify opportunities.",
      ],
    },
  ];

  export const testimonials = [
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
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

  export const counterItems = [
    { value: 2, suffix: "+", label: "Years of Experience" },
    { value: 10, suffix: "+", label: "Satisfied Clients" },
    { value: 15, suffix: "+", label: "Completed Projects" },
    { value: 90, suffix: "%", label: "Client Retention Rate" },
  ];