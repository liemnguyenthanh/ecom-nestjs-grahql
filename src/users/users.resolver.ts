import { Args, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './models/user.model';
import { NotFoundException } from '@nestjs/common';

@Resolver(of => User)
export class UsersResolver {
  constructor(private readonly userService: UsersService) { }

  @Query(returns => User)
  async user(@Args('id') id: string): Promise<User> {
    const user = this.userService.findOneById(id)

    if (!user) {
      throw new NotFoundException(id);
    }

    return user
  }

  // @Subscription(returns => Recipe)
  // recipeAdded(@Context('pubsub') pubSub: PubSub) {
  //   return pubSub.subscribe('recipeAdded');
  // }
}
