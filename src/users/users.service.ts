import { Injectable } from '@nestjs/common';
import { NewUserInput } from './dto/new-user.input';
import { User } from './models/user.model';
import { UsersArgs } from './dto/users.args';

const usersDummy: User[] = [
  {
    _id: '1',
    username: 'thanhliem',
    password: '123123123',
  }
]

@Injectable()
export class UsersService {

  async create(data: NewUserInput): Promise<User> {
    const newUser:User = {
      ...data,
      _id: new Date().getTime().toString()
    } 

    usersDummy.push(newUser)
    return newUser;
  }

  async findOneById(id: string): Promise<User> {
    return usersDummy.find((user) => user._id === id);
  }

  async findAll(UsersArgs: UsersArgs): Promise<User[]> {
    return usersDummy;
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
