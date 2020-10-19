export interface Profile {

        readonly area:string;
        readonly city:string;
        readonly state:string;
        readonly pincode:string;
        readonly contact_no:string;
        readonly image:string;
        readonly registered_shops:Map<string,string>
}