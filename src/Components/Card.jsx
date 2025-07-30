import React from 'react'

const Card = ({job}) => {

    const {category_name,jobs_available,icon}=job;



  return (
    <div className='border'>
        <div className="card bg-base-100 card-xs shadow-sm">
        <div className="card-body">
            <h2 className="card-title">{category_name}</h2>
            <p>{jobs_available}</p>
            <img className='w-[60%]' src={icon} alt="" />
            <div className="justify-end card-actions">
            <button className="btn btn-primary">Applay</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Card