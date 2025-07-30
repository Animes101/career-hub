import React,{useEffect, useState} from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom';

const Details = () => {

  const [detailsData, setDetailsData]=useState(null);



  const {id}=useParams();
  const navigate=useNavigate()


  useEffect(()=>{
  
      fetch('/futureBd.json')
      .then((res)=> res.json())
      .then((data)=> {
        const singleData=data.find((item)=> item.id == id);

         setDetailsData(singleData);
      })
      .catch((err)=> console.log(err));
  
    },[id])

    console.log(detailsData)

  return (
    <div className='container mx-auto my-10'>
      <div className="card lg:card-side bg-base-100 shadow-sm border">
        <figure>
          <img
            src={detailsData?.logo}
            alt="Album" />
        </figure>
        <div className="card-body space-y-10">
          <h2 className="card-title text-3xl text-green-500">{detailsData?.company_name}</h2>
          <h2 className="card-title text-xl"> <span className='text-green-500 text-3xl'>job_title: </span>{detailsData?.job_title}</h2>
          <h2 className="card-title text-xl"> <span className='text-green-500 text-3xl'>job_type: </span>{detailsData?.job_type}</h2>
          <h2 className="card-title text-xl"> <span className='text-green-500 text-3xl'>location: </span>{detailsData?.location}</h2>
          <h2 className="card-title text-xl"> <span className='text-green-500 text-3xl'>salary: </span> {detailsData?.salary}</h2>
          <p>{detailsData?.description}</p>
          <div className="card-actions justify-end">
            <button onClick={()=>navigate('/')} className="btn btn-primary">Go Back</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details