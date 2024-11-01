import { Module } from '@nestjs/common';
import { MasterCommunityService } from './master-community.service';
import { MasterCommunityController } from './master-community.controller';

@Module({
  controllers: [MasterCommunityController],
  providers: [MasterCommunityService],
})
export class MasterCommunityModule {}
