import React from 'react'
import "./Resume.css"

export default function Job({ title, company, date, responsibilites }) {
  return (
    <div className="job">
          <p className="job-title">{title}</p>
          <p className="job-company">{company} | {date}</p>
          <ul className="responsibilities">
              {responsibilites.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
          </ul>
        </div>

  )
}
