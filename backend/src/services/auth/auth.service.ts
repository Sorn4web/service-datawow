import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(username: string) {
    try {
      const user = await this.userService.findOneByUsername(username);

      if (!user) {
        throw new UnauthorizedException('Invalid username');
      }

      delete user.updated_at;
      delete user.deleted_at;

      const jwtPayload = { ...user, id: user.id };

      return {
        id: user.id,
        name: `${user.full_name}`,
        success: true,
        message: 'User logged in successfully',
        token: await this.jwtService.signAsync(jwtPayload),
      };
    } catch (error) {
      throw new UnauthorizedException(error.message);
    }
  }

  async getProfile(id: number) {
    try {
      const user = await this.userService.findOne(id);

      if (!user) {
        throw new UnauthorizedException('User not found');
      }

      delete user.updated_at;
      delete user.deleted_at;

      return {
        success: true,
        message: 'User profile fetched successfully',
        user,
      };
    } catch (error) {
      throw new UnauthorizedException(error.message);
    }
  }
}
