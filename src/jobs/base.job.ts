import { CronJob } from 'cron';

//cron job 
export default class BaseJob  {
    
    public name: string="";
    public period: any;
    public cronJob: any;

    constructor() {
        this.startInitialisation();
    };
    
    //start initialization job
    private startInitialisation(){
        this.init()
        this.initializeCronJob();
    }

    protected init(){
        
    };

    // initialize Cron
    protected initializeCronJob(){
        this.cronJob = new CronJob(this.period,this.handle.bind(this))
    };
    
    // console.log the progress and execute job
    public async handle() {
        console.log("/////////////////////////////////")
        console.log("starting execution JOB:"+this.name)
        console.log("---------------------------------")
        await this.executeJob();
        console.log("---------------------------------")
        console.log("stoping execution JOB:"+this.name)
        console.log("/////////////////////////////////")
    };

    //executeJob
    public async executeJob(){
        console.log("executing:"+this.name)
    }

    // Start executing the job
    public start() {
        // Start job
        if(!this.cronJob){
            return;
        }
        if (!this.cronJob.running) {
            this.cronJob.start();
        }
    }

    // Stop executing the job
    public stop() {
        // Start job
        if(!this.cronJob){
            return;
        }
        if (this.cronJob.running) {
            this.cronJob.stop();
        }
    }
}