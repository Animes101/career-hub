import React from 'react'
import { useNavigate } from 'react-router-dom';

const FutureCard = ({futureData}) => {

    const {id,company_name,job_title,logo,job_type}=futureData;

    //use navigate view Details page 

    const navigate=useNavigate();


  return (
    <div>

        <div className="card bg-base-100 shadow-sm border ">
            <figure>
                <img className='w-[50%]'
                src={logo}
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                {job_title}
                <div className="badge badge-secondary">{job_type}</div>
                </h2>
                <div className="card-actions justify-end">{company_name}</div>
                <button onClick={()=>navigate(`/future-details/${id}`)}  className="badge badge-outline">Details</button>
                </div>
            </div>     
    </div>
  )
}

export default FutureCard