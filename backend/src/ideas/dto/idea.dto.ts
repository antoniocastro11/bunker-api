import {  IsOptional, IsString } from "class-validator";
import { IdeaType, Status } from "generated/prisma";
export class IdeaDto {
    @IsString()
    title: string;

    @IsString()
    description: string;

    @IsOptional()
    status?: Status;

    @IsOptional()
    ideaType?: IdeaType;

    userId: number;

}