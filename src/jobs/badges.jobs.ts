import { CronJob } from "cron";
import BaseJobs from "./base.job";

export default class BadgesJob extends BaseJobs {

    // initialize job
    protected init() {
        this.name = 'BadgesJob';
        this.period = "* * * * * *"
    };

    // invoking the execute job
    public async executeJob() {
        super.executeJob();
    }
}