import { Injectable } from '@nestjs/common';

interface User{
    id:number;
    name:string;
    email:string;
}




@Injectable()
export class UserService {
    private users:User[]=[
        {id:1,name:'eden ',email:'eden@2024.com'}
    ]
}
