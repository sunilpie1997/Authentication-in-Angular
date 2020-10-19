import { Profile } from 'src/app/classes/profile';

export interface User {

    readonly email:string;
    readonly first_name:string;
    readonly last_name:string;
    readonly is_admin:boolean;
    readonly last_login:Date;
    readonly profile:Profile;
}