import { Injectable } from '@nestjs/common';

interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable()
export class UserService {
  private users: User[] = [
    { id: 1, name: 'eden', email: 'eden@2024.com' },
    { id: 2, name: 'natty', email: 'natty@2024.com' },
  ];

  findAllUsers(name: string = ''): User[] {
    return this.users.filter((user) =>
      user.name.toLowerCase().includes(name.toLowerCase())
    );
  }
}