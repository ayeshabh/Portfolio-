import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import dilka from "@/public/pizzav2.png"  //this is the pizza sales project 
import tarshes from "@/public/sfsalaries2.png" //the sf salaries picture
import dynamic from "@/public/covidproject2.png" //this is the covid project picture
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor of Computer Science",
    location: "Wilfrid Laurier University",
    description:
      "After completing my computer science degree, I ventured into the dynamic world of software development, eager to apply my newfound knowledge.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Software Developer",
    location: "IBM",
    description:
      "Provided client-facing technical support for DB2 database customers, specializing in diagnosing and resolving SQL syntax, performance, and installation issues.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "KPI Dashboard for Local Pizzeria",
    description:
      "Developed a dashboard providing a comprehensive overview of essential metrics, including sales performance, revenue, and market trends, with data available for days and months.",
    tags: ["POWERBI", "SQL SERVER", "EXCEL"],
    imageUrl: dilka,
  },
  {
    title: "COVID-19 Vaccinations",
    description:
      "Analyzed COVID-19 vaccination data, detailing global vaccination numbers and comparing rates across countries. Investigated how GDP influences vaccination efforts.",
    tags: ["EXCEL", "TABLEAU"],
    imageUrl: dynamic,
  },
  {
    title: "SF Salary Insights",
    description:
      "Investigated San Francisco salaries by cleaning and analyzing the data primarily using Python. Analysis provides insights into key salary trends and answered several pertinent questions regarding income distribution in the Bay Area.",
    tags: ["PYTHON", "HTML", "EXCEL"],
    imageUrl: tarshes,
  },
] as const;

export const skillsData = [
  "Data Manipulation",
  "Data Visualization",
  "Python",
  "Java",
  "DB2",
  "SQL",
  "Tableau",
  "Power BI Dashboards",
  "MS Excel",
  "MongoDB",
  "Statistical Analysis",
  "Agile Development",
  "PostgreSQL",
  "SQL Server",
] as const;