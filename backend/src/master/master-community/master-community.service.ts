import { Injectable } from '@nestjs/common';
import { CreateMasterCommunityDto } from './dto/create-master-community.dto';
import { UpdateMasterCommunityDto } from './dto/update-master-community.dto';

@Injectable()
export class MasterCommunityService {
  create(createMasterCommunityDto: CreateMasterCommunityDto) {
    return 'This action adds a new masterCommunity';
  }

  findAll() {
    return `This action returns all masterCommunity`;
  }

  findOne(id: number) {
    return `This action returns a #${id} masterCommunity`;
  }

  update(id: number, updateMasterCommunityDto: UpdateMasterCommunityDto) {
    return `This action updates a #${id} masterCommunity`;
  }

  remove(id: number) {
    return `This action removes a #${id} masterCommunity`;
  }
}
