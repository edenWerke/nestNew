import { Controller ,Get, Query} from '@nestjs/common';

@Controller('user')
export class UserController {

@Get()
getUser(@Query('name')name:string){
    return [
        {id:1,name:name||'Eden'}
    ]
}


}
