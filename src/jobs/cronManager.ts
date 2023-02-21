import { CronJob } from 'cron';
import BadgesJob from './badges.jobs';
import BaseJob from './base.job';
import DefaultJob from './default.job';

//  
export class CronManager {
    public jobs: any;

    private static instance: CronManager;

    private constructor() {
        this.jobs = {};
    }
    
    // get single of the practical job
    public static getInstance(): CronManager {
        if (!CronManager.instance) {
            CronManager.instance = new CronManager();
        }
        return CronManager.instance;
    }

    // add new job to object clone using default job
    public addNewJob(name: any, periodText: any, fn: any) {
        this.jobs[name] = new DefaultJob(name, periodText, fn);
    };

    // add new job to object
    public addJob(argJob: BaseJob) {
        if (!argJob) {
            throw Error("Pleae make sure that Job is initialized properly before passing it to the CronManager..");
        }
        if (!argJob.cronJob) {
            throw Error("Pleae make sure that Job is initialized properly before passing it to the CronManager..");
        }
        this.jobs[argJob.name] = argJob;
    };

    // stop the job
    public stopJob(name: any) {
        this.jobs[name].stop();
    }
    
    // delete the job from the stack
    public deleteJob(name: any) {
        delete this.jobs[name];
    }
    
    // stop all the running job
    public stopAll() {
        for (let name in this.jobs) {
            this.jobs[name].stop()
        }
    }
    
    // get the list of jobs
    public listJobs() {
        return this.jobs;
    }

    // get job details @param: String job name
    public getJob(name: any) {
        for (let name in this.jobs) {
            const activeJob = this.jobs[name];
            if (activeJob.name === name) {
                return activeJob;
            };
        };
    };

    // start the practical job @param: String job name
    public startJob(name: any) {
        for (let name in this.jobs) {
            const activeJob = this.jobs[name];
            if (activeJob.name === name) {
                activeJob.cronJob.start();
            }
        }
    };

    // start all the job in the stack
    public startAll() {
        for (let name in this.jobs) {
            console.log("starting cron job "+name)
            this.jobs[name].start()
        }
    }

    // get the job running status 
    public runningJob(name: any) {
        return this.jobs[name].cronJob.running;
    }

    //get the job's last date
    public jobLastDate(name: any) {
        return this.jobs[name].cronJob.lastDate();
    }

    //get next dates
    public jobNextDates(name: any) {
        return this.jobs[name].cronJob.nextDates();
    }
}