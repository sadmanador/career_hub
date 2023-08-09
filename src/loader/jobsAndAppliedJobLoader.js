import { getStoredCard } from "../localStorage/localStorageSave";

export const jobsAndAppliedJobLoader =async () => {
    //get jobs data
    const jobsData = await fetch('/detailed_jobs_data.json');
    const jobs = await jobsData.json();

    const savedAppliedJobs = getStoredCard();
    const previousJobsData = [];
    
    for(const id in savedAppliedJobs){
        const addedJobs = jobs.find(job => job.id === id);
        if(addedJobs){
            const applied = savedAppliedJobs[id];
            addedJobs.applied = applied;
            previousJobsData.push(addedJobs);
        }
    }



    return {jobs, previousJobsData};
};