"use client";

import { SetStateAction, useRef, useState} from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
 
type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  points,
  liveLink,
  gitHub
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);


    const [size, setSize] =useState(null);

    const handleOpen = (value: string | SetStateAction<null>) => setSize(value);


  return (
    <>
      <motion.div
        ref={ref}
        style={{
          scale: scaleProgess,
          opacity: opacityProgess,
        }}
        className="group mb-3 sm:mb-8 last:mb-0"
      >
        <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative  hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20 ">
          <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
              {description}
            </p>
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
              {tags.map((tag, index) => (
                <li
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
            <div className="my-4">
              <Button onClick={() => handleOpen("xl")} variant="gradient">
                View Details
              </Button>
            </div>
          </div>

          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
            className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
          transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2
        
        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2
        
        group-even:right-[initial] group-even:-left-40"
          />
        </section>
      </motion.div>
      <Dialog
        open={
          size === "xs" ||
          size === "sm" ||
          size === "md" ||
          size === "lg" ||
          size === "xl" ||
          size === "xxl"
        }
        size={"lg"}
        handler={handleOpen}
      >
        <DialogHeader>{title}</DialogHeader>
        <DialogBody>
          <ul className="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-40">
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </DialogBody>
        <DialogFooter>
          {liveLink && (
            <Button variant="gradient" color="green" className="mr-1">
              <span className="text-[1rem]">
                <Link href={liveLink} legacyBehavior>
                  <a className="flex" target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt />
                    <span className="mx-2">Demo</span>
                  </a>
                </Link>
              </span>
            </Button>
          )}
          {gitHub && (
            <Button variant="gradient" color="black" className="mr-1">
              <span className="text-[1rem]">
                <Link href={gitHub} legacyBehavior>
                  <a className="flex" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                    <span className="mx-2">GitHub</span>
                  </a>
                </Link>
              </span>
            </Button>
          )}
          <Button
            variant="gradient"
            color="green"
            onClick={() => handleOpen(null)}
          >
            <span>Close</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
