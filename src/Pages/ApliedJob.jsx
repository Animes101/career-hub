import React, { useEffect, useState } from 'react'
import { getStoreJobApplication } from '../Utilit/localStorage';

const ApliedJob = () => {
  const [futureJob, setFutureJob] = useState(null);
  const [originalAppliedJob, setOriginalAppliedJob] = useState([]); // 🔹 আসল data
  const [appliedJob, setAppliedJob] = useState([]); // 🔹 ফিল্টারড data
  const [shortData, setSortData] = useState('');

  useEffect(() => {
    fetch('futureBd.json')
      .then(res => res.json())
      .then(data => setFutureJob(data))
  }, []);

  useEffect(() => {
    const storeJobId = getStoreJobApplication();

    if (futureJob && storeJobId.length > 0) {
      const applied = futureJob.filter((item) => storeJobId.includes(item.id));
      setOriginalAppliedJob(applied); // 🔹 আসল লিস্ট
      setAppliedJob(applied);         // 🔹 একসাথে সেট
    }
  }, [futureJob]);

  const handleChange = (e) => {
    setSortData(e.target.value);
  }

  useEffect(() => {
    if (shortData === '') {
      setAppliedJob(originalAppliedJob); // 🔁 reset করলে সব দেখাবে
    } else {
      const filtered = originalAppliedJob.filter((item) =>
        item.company_name.toLowerCase() === shortData.toLowerCase()
      );
      setAppliedJob(filtered);
    }
  }, [shortData, originalAppliedJob]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className='text-center font-bold text-3xl mb-6'>🎯 Filter by Company Name</h1>

      <div className="mb-8 text-center">
        <select onChange={handleChange} defaultValue="" className="select select-success w-full max-w-xs">
          <option disabled value="">Pick a Company</option>
          <option value="facebook">Facebook</option>
          <option value="linkedin">LinkedIn</option>
          <option value="netlify">Netlify</option>
        </select>
      </div>

      <ul className='list-disc pl-6'>
        {appliedJob?.map((item) => (
          <li key={item.id} className='mb-2 text-lg'>
            {item.company_name}
          </li>
        ))}
        {appliedJob?.length === 0 && (
          <p className='text-red-500 font-semibold'>No jobs found for this company.</p>
        )}
      </ul>
    </div>
  );
};

export default ApliedJob;