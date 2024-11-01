import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MasterCommunityService } from './master-community.service';
import { CreateMasterCommunityDto } from './dto/create-master-community.dto';
import { UpdateMasterCommunityDto } from './dto/update-master-community.dto';

@Controller({
  path: 'master-community',
  version: '1',
})
export class MasterCommunityController {
  constructor(
    private readonly masterCommunityService: MasterCommunityService,
  ) {}

  @Post()
  create(@Body() createMasterCommunityDto: CreateMasterCommunityDto) {
    return this.masterCommunityService.create(createMasterCommunityDto);
  }

  @Get()
  findAll() {
    return this.masterCommunityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.masterCommunityService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMasterCommunityDto: UpdateMasterCommunityDto,
  ) {
    return this.masterCommunityService.update(+id, updateMasterCommunityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.masterCommunityService.remove(+id);
  }
}
