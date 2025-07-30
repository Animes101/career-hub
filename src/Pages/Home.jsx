
import { useEffect, useState } from 'react'
import user from '../assets/images/user.png'
import Card from '../Components/Card'
import FutureCard from '../Components/FutureCard';


const Home = () => {

  const [jonCatagory, setJobCatagory]=useState();
  const [futureJob, setFutureJob]=useState();

  useEffect(()=>{

    fetch('jobBd.json')
    .then(res=> res.json())
    .then(data=> setJobCatagory(data))


  },[]);

  useEffect(()=>{

    fetch('futureBd.json')
    .then(res=> res.json())
    .then(data=> setFutureJob(data))

  },[])


  return (
    <div className='space-y-7'>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={user}
            className="max-w-md rounded-lg "
          />
          <div>
            <h1 className="text-5xl font-bold">One Step Closer To Your</h1>
            <h1 className="text-5xl font-bold">Dream Job</h1>
            <p className="py-6">
              Explore thousands of job opportunities with all the information you need.
               Its your future. Come find it. Manage all your job application from start to finish.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>


      {/* Job Category List */}

      <div className='container mx-auto space-y-6'>
        <h1 className='text-center font-bold text-4xl text-white'>Job Category List</h1>
        <p className='text-center font-lg font-bold my-3'>Explore thousands of job opportunities with all 
          the information you need. Its your future</p>

          <div className='md:grid sm:grid sm:grid-cols-2 md:grid-cols-5  gap-3 justify-between'>
            {jonCatagory?.map((item)=> <Card key={item.id} job={item} />)}
          </div>
      </div>


      {/* Featured Jobs */}
      <div>
        <h1 className='text-center text-white text-4xl font-bold my-5'>Featured Jobs</h1>
        <p className='text-center text-white text-xl font-bold my-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
        <div className='md:grid md:grid-cols-2 gap-5 lg:grid-cols-3 container mx-auto'>
          {futureJob?.map((item)=><FutureCard key={item.id} futureData={item} />)}

        </div>
      </div>
    </div>
  )
}

export default Home