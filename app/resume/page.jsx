"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut totam voluptas sapiente sit nesciunt enim.",

  info: [
    {
      fileName: "Name",
      filevalue: "Muhammad Rabbi",
    },
    {
      fileName: "Phone",
      filevalue: "+880 01928412750",
    },
    {
      fileName: "Experiance",
      filevalue: "12+ Years",
    },
    {
      fileName: "Skype",
      filevalue: "Rabbi.01",
    },
    {
      fileName: "Nationality",
      filevalue: "Bangladesh",
    },
    {
      fileName: "Email",
      filevalue: "naimulislamrabbi157@gmail.com",
    },
    {
      fileName: "Freelaner",
      filevalue: "Availlable",
    },
    {
      fileName: "Languages",
      filevalue: "English, Bangla",
    },
  ],
};

const experiens = {
  icons: "/public/resume/badge.svg",
  title: "My Experience",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex iste minima incidunt assumenda temporibus reprehenderit Vitae eos.",

  item: [
    {
      company: "Tech Solution Inc",
      position: "Full Satak Developer",
      duration: "2022 - Present",
    },
    {
      company: "Web Design Studio",
      position: "Front-End Developer",
      duration: "2022 - Present",
    },
    {
      company: "Create Corporate Bylaws",
      position: "Full Satak Developer",
      duration: "2022 - Present",
    },
    {
      company: "Issue Stoc",
      position: "Full Satak Developer",
      duration: "2022 - Present",
    },
    {
      company: "Apple Inc",
      position: "Full Satak Developer",
      duration: "2022 - Present",
    },
    {
      company: "Microsoft Corporation",
      position: "Full Satak Developer",
      duration: "2018 - 2020",
    },
  ],
};

const education = {
  icons: "/public/resume/cap.svg",
  title: "My Education",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex iste minima incidunt assumenda temporibus reprehenderit Vitae eos.",

  item: [
    {
      institution: "Tech Solution Inc",
      degree: "Full Satak Developer Bootcamp",
      duration: "2023",
    },
    {
      institution: "Cadecodemy",
      degree: "Front-End Track",
      duration: "2022 ",
    },

    {
      institution: "Online Course",
      degree: "Programing Course",
      duration: "2020 - 2021",
    },
    {
      institution: "Online Course",
      degree: "Programing Course",
      duration: "2020 - 2021",
    },
    {
      institution: "Online Course",
      degree: "Programing Course",
      duration: "2020 - 2021",
    },
    {
      institution: "Online Course",
      degree: "Programing Course",
      duration: "2020 - 2021",
    },
  ],
};

const skill = {
  title: "My Skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic blanditiis optio necessitatibus similique quod eum.",

  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascipt",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 "
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experieans</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skill">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experiens.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experiens.description}
                </p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experiens.item.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start"
                        >
                          <span className="text-accent-DFFAULT">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center xl:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* df */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent-DFFAULT"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.item.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start"
                        >
                          <span className="text-accent-DFFAULT">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center xl:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* df */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent-DFFAULT"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skill */}
            <TabsContent value="skill" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skill.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skill.description}
                  </p>
                </div>

                <ul className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                  {
                    skill.skillList.map((item, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent-DFFAULT transition-all duration-300">
                                  {item.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{item.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </TabsContent>

            {/* experience */}
            <TabsContent value="about" className='w-full text-center xl:text-left'>
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>

                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {
                    about.info.map((item, index) => {
                      return(
                        <li className="flex items-center justify-center xl:justify-start gap-4" key={index}>
                          <span className="text-white/60">{item.fileName}</span>
                          <span className="text-xl">{item.filevalue}</span>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
