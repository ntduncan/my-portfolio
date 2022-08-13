import React from "react";
import Construction from "../../components/Construction";
import "./Resume.css";
import Job from "./Job";

const jobs = [
  {
    title: "Software Developer/Project Manager",
    company: "BYU-I Support Center",
    date: "Oct 2020 - Present",
    responsibilites: [
      "Modified existing programs to correct errors or improve functionality using Java and Springboot",
      "Supervise projects and daily workflow of developers on reports and systems team",
      "Consult with coordinators and project managers from other departments to develop and review project proposals weekly",
      "Review dozens of applications, conduct interviews, and coordinate training of new hires",
      "Conduct weekly team meetings and participate in daily huddles",
      "Built and maintained reports and forms in university CRM",
    ],
  },
  {
    title: "Software Developer Intern",
    company: "BYU-I Support Center",
    date: "Apr 2021 - Jul 2021",
    responsibilites: [
      "Collaborated with the Quality Assurance team to produce quality assurance GUI in NodeJS/Express for daily work ",
      "Consulted with coordinators on project status, proposals, or technical issues for over 60 different processes",
    ],
  },
  {
    title: "Electrical Engineering Intern",
    company: "Electrical Consultants Inc.",
    date: "Apr 2020 - Aug 2020",
    responsibilites: [
      "Produced schematics and mockups using Auto CAD for project manager",
      "Inspected industrial project sites to collect wiring and hardware specs on 3 major projects",
      "Created an excel spreadsheet used for calculating reliability projections based on component specifications",
      "Wrote project proposals for at least 5 potential clients including T-Mobile and Marathon Oil",
    ],
  },
];

export default function Resume() {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("NateDuncan_Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "NateDuncan_Resume.pdf";
        alink.click();
      });
    });
  };

  return (
    <div className="resume">
      <h1>Resume</h1>
      <button className="download-btn" onClick={onButtonClick}>
        Download PDF
      </button>
      <br /> <br /> <hr /> <br />
      <div className="job-list">
        {jobs.map((job, index) => (
          <Job key={index} {...job} />
        ))}
      </div>
      <hr />
      <div className="education">
        <h1>Education</h1>

        <h2>Brigham Young University - Idaho</h2>
        <p>Bachelor of Science, Software Engineering, Dec 2022</p>
        <ul className="responsibilities">
          <li>Received the Thomas E. Ricks Academic Scholarship (Full-Ride)</li>
          <li>Completed a certificate for full stack web development</li>
          <li>
            Acted as a project manager in the Data Science Society on a project
            for International Reality | Fall Semester of 2021
          </li>
        </ul>
      </div>
      <div className="work-skills">
        <h1>Work Skills</h1>
        <ul className="responsibilities">
          <li>Software Development (JavaScript, Java, C#, and Python)</li>
          <li>Frontend Web Development (React, Angular, and BootStrap)</li>
          <li>Backend Web Development (NodeJS, Spring, and ASP.NET)</li>
          <li>Data Querying (NoSQL and SQL)</li>
          <li>GitHub</li>
          <li>REST API Development</li>
          <li>Project Management</li>
          <li>Technical Communication</li>
        </ul>
      </div>
      <hr />
    </div>
  );
}
