import { Args, Mutation, Resolver, Query, } from '@nestjs/graphql';

import { UsersService } from '../services/users.service';
import { UserInput } from '../schemas/user.interface'

@Resolver('User')
export class UsersResolver {
    constructor(private usersService: UsersService) { }

    @Query('user')
    user(@Args('id') id: string) {
        return this.usersService.getById(id);
    }

    @Query('login')
    jwt(@Args('email') email: string, @Args('password') password: string) {
        return this.usersService.login(email, password);
    }

    @Mutation('register')
    register(
        @Args('user') user: UserInput 
    ) {
        return this.usersService.register(user);
    }

}
