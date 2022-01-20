import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UserService {
  private readonly users = [
    {
      userId: 1,
      username: 'aaa@bbb.com',
      firstName: 'AAA',
      lastName: 'BBB',
      password: 'password',
    },
    {
      userId: 2,
      username: 'ccc@eee.com',
      firstName: 'CCC',
      lastName: 'BEEEE',
      password: 'password',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
