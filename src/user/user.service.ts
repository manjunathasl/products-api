import { Injectable, ConflictException } from '@nestjs/common';
import { User } from './user';
import * as fs from 'fs';
@Injectable()
export class UserService {
  async findOne(username: string): Promise<User | undefined> {
    const users = await this.getUsers();
    return users.find((user) => user.userName === username);
  }

  async saveUser(user: User): Promise<User | undefined> {
    const users = await this.getUsers();
    if (users.some((u) => u.userName === user.userName)) {
      throw new ConflictException('Username already exists');
    }

    const userList = [...users, user];
    try {
      await fs.writeFileSync('users.store.json', JSON.stringify(userList), {
        encoding: 'utf8',
      });
    } catch (error) {
      console.log(`There is an issue in writing file - ${error.message}`);
    }

    return user;
  }

  async getUsers() {
    let jsonStr: string = null;
    try {
      jsonStr = await fs.readFileSync('users.store.json', 'utf8');
    } catch (error) {
      console.log(`Error in reading user json file - ${error.message}`);
    }
    const users: [User] = JSON.parse(jsonStr);
    return users || [];
  }
}
