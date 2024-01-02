export declare interface IJobs {}

export declare class Job implements IJobs {
    readonly contents : string;
    readonly name: string;
    readonly type: string;
    readonly short_name: string;
    readonly id: number;
    readonly locations: [{
        readonly name : string,
    }];
    readonly categories: [{
        readonly name : string,
    }];
    readonly levels: [{
        readonly name : string,
        readonly short_name : string,
    }];
    readonly company: {
        readonly id : number,
        readonly short_name : string,
        readonly name : string,
    };

}

export declare class JobsList implements IJobs {
    readonly results: [Job]
}







  