const getStoreJobApplication=()=>{
    const getjobApplation=localStorage.getItem('applayJob');

    if(getjobApplation){
       return  JSON.parse(getjobApplation)
    }

    return [];
}



const saveApplayJobs=(id)=>{


    const storeJobApplication=getStoreJobApplication();

    console.log(storeJobApplication)


    const exist=storeJobApplication.find((item)=> item === id);

    if(!exist){

        storeJobApplication.push(id);

        localStorage.setItem('applayJob', JSON.stringify(storeJobApplication));
    }

}

export {getStoreJobApplication,saveApplayJobs}