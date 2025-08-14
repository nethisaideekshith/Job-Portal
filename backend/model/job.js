class Job{
    constructor(obj){
        this.jobId=obj.jobId,
        this.title=obj.title,
        this.description=obj.description,
        this.location=obj.location,
        this.department=obj.department,
        this.skills=obj.skills,
        this.postedDate=obj.postedDate,
        this.lastDate=obj.lastDate,
        this.updatedAt=obj.updatedAt,
        this.isActive=obj.isActive,
        this.postedBy=obj.postedBy
    }
}

module.exports=Job;