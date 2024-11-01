import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findOneByUsername(username: string) {
    const user = await this.userRepository.findOne({ where: { username } });
    if (user) {
      return user;
    }
    return null;
  }

  async findOne(id: number) {
    return this.userRepository.findOneBy({ id });
  }
}
