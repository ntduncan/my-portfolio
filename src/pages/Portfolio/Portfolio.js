import React from 'react'
import "./Portfolio.css"
import PortfolioProject from './PortfolioProject'

//images for projects
import pmware from "../../assets/images/pmware.png";
import contoso from "../../assets/images/contoso.png";
import qasite from "../../assets/images/qaSite.png";

const projects = [
  {
    title: "PMWare",
    description: "This is a React web application for tracking projects in team. It allows users to create accounts, login/logout and create projects. It has authentication and database setup through Google Firebase. It has protected routing and also ensures that only the creator of a project is able to delete a project or mark it as complete. Every project has a comments feature so cooworkers can provide updates on projects.",
    img: pmware,
    link: "https://the-dojo-c9893.web.app/",
  },
  {
    title: "Contoso University",
    description: `A classic from Microsoft, Contoso University is a university web application built on .NET 6 and SQLite. It features a multirealational database and tracks the students, instuctors, and class data for this fictional university. I took some liberties on a re-design. Check it out on my GitHub.`,
    img: contoso,
    link: "https://www.github.com/ntduncan/ContosoUniversity",
  },
  {
    title: "QA Site",
    description: "This site was built with NodeJS to interface with the SaaS for the university that I attended. The goal was to provide a UI that was easy for the QA agents to use when reviewing interactions between stuedent employees and callers in the university support center. I build it as an internship project for the support center and it is still in production and used daily. The url, agent names, and repo have been protected for anonymity.",
    img: qasite,
    link: "",
  }
  
]

export default function Portfolio() {

  return (
    <div className='portfolio'>
      <h1>Sample Projects</h1>
      
      {projects.map((project, index) => (
        <PortfolioProject key={index} title={project.title} img={project.img} description={project.description} link={project.link}/>
      ))}
        
    </div>
  )
}
