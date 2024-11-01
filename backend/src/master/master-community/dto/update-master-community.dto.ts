import { PartialType } from '@nestjs/mapped-types';
import { CreateMasterCommunityDto } from './create-master-community.dto';

export class UpdateMasterCommunityDto extends PartialType(CreateMasterCommunityDto) {}
