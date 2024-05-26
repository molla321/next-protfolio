/* eslint-disable react/no-unescaped-entities */
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+880) 192 841 2750",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "naimulislamrabbi157@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: " Narayangonj, 15424",
  },
];

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
            {/* from */}
            <div className="xl:w-[54%] order-2 xl:order-none ">
                <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                <h3 className="text-4xl text-accent-DFFAULT">Let's work toggether</h3>
                <p className="text-white/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere adipisci eum assumenda impedit quas!</p>
                {/* input */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email" />
                <Input type="Phone" placeholder="Phone number" />
                </div>

                {/* select */}
                <Select>
                    <SelectTrigger className='w-full'>
                        <SelectValue placeholder="Select a services"/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Select a services</SelectLabel>
                            <SelectItem  value="est">Web Development</SelectItem>
                            <SelectItem  value="cst">UI/UX Design</SelectItem>
                            <SelectItem  value="mst">Logo Design</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>

                {/* textarea */}
                <Textarea className=' h-[200px]' placeholder='Type Your Message here'/>

                {/* button */}
                <Button size="md" className="max-w-48">
                  Send message
                </Button>
                </form>
            </div>

            {/* info */}
            <div className="flex flex-1 items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
              <ul className="flex flex-col gap-10">
                {info.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center gap-6">
                      <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent-DFFAULT rounded-md flex items-center justify-center">
                        <div className="text-[28px]">{item.icon}</div>
                      </div>
                      <div className="flex-1">
                        <p className="text-white/60">{item.title}</p>
                        <h3 className="text-xl">{item.description}</h3>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
