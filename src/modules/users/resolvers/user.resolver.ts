import { Args, Mutation, Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';

import { UsersService } from '../services/users.service';
import { UserInput } from '../schemas/user.interface'

@Resolver('User')
export class UsersResolver {
    constructor(private usersService: UsersService) { }

    @Query('user')
    user(@Args('id') id: string) {
        return this.usersService.getById(id);
    }

    @Query('jwt')
    jwt(@Args('email') email: string, @Args('password') password: string) {
        return this.usersService.jwt(email, password);
    }

    @Mutation('register')
    register(
        @Args('user') user: UserInput 
    ) {
        return this.usersService.register(user);
    }

    @ResolveField()
    async id(@Parent() user): Promise<string> {
        return user._id;
    }
}
