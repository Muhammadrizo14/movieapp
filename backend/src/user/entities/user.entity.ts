import {IsNotEmpty} from "class-validator";

export class UserEntity {class
    id: number;
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    password: string;
    createdAt: Date;
    updatedAt: Date
}
