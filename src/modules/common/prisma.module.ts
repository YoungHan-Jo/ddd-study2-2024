import { Module } from '@nestjs/common';
import { PrismaClientService } from './prismaClient.service';

@Module({
  providers: [PrismaClientService],
  exports: [PrismaClientService],
})
export class PrismaModule { }
