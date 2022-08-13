import React from 'react'
import "./Portfolio.css"
import PortfolioProject from './PortfolioProject'

//images for projects
import myMoney from "../../assets/images/myMoney.png";
import contoso from "../../assets/images/contoso.png";
import qasite from "../../assets/images/qaSite.png";

export default function Portfolio() {

  const [projects, setProjects] = React.useState([
    {
      title: "MyMoney",
      description: "This is a React web application for tracking personal transactions. It allows users to create accounts, login/logout and add transactions. It has authentication and database setup through Google Firebase.",
      img: myMoney,
      link: "",
    },
    {
      title: "Contoso University",
      description: "A classic from Microsoft, Contoso University is a university web application built on .NET 6 and SQLite. It features a multirealational database and tracks the students, instuctors, and class data for this fictional university. I took some liberties on a re-design.",
      img: contoso,
      link: "https://www.github.com/ntduncan/ContosoUniversity",
    },
    {
      title: "QA Site",
      description: "This site was built with NodeJS to interface with the SaaS for the university that I attended. The goal was to provide a UI that was easy for the QA agents to use when reviewing interactions between stuedent employees and callers in the university support center. I build it as an internship project for the support center and it is still in production and used daily. The url, agent names, and repo have been protected for anonymity.",
      img: qasite,
      link: "",
    }
    
  ]);

  return (
    <div className='portfolio'>
      <h1>Projects</h1>
      {projects.map((project, index) => (
        <PortfolioProject key={index} title={project.title} img={project.img} description={project.description} link={project.link}/>
      ))}
        
    </div>
  )
}
