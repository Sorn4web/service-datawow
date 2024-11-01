import { Module } from '@nestjs/common';
import { MasterCommunityService } from './master-community.service';
import { MasterCommunityController } from './master-community.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MasterCommunity } from './entities/master-community.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MasterCommunity])],
  controllers: [MasterCommunityController],
  providers: [MasterCommunityService],
})
export class MasterCommunityModule {}
