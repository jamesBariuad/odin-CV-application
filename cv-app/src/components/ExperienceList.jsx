import React from 'react'

const ExperienceList = ({data}) => {
  return (
    <>
    {data.experience.map((entry, index)=>
        (<div key={index}>
            <div>{entry.companyName}</div>
            <div>{entry.dateActive}</div>
            <div>{entry.positionTitle}</div>
            <div>{entry.responsibilities}</div>
        </div>)
    )}
    </>
  )
}

export default ExperienceList