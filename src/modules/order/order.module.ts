import { Module } from "@nestjs/common";
import { PrismaClientService } from "../common/prismaClient.service";

@Module({
    providers: [
        PrismaClientService
    ],
})
export class OrderModule { }