import {IsNotEmpty} from "class-validator";


export class MovieEntity {
    @IsNotEmpty()
    id: number;
    @IsNotEmpty()
    title: string;
    @IsNotEmpty()
    genre: string;
    @IsNotEmpty()
    premuere: string;
    @IsNotEmpty()
    slogan: string;
    @IsNotEmpty()
    image: string;
    @IsNotEmpty()
    country: string;
    @IsNotEmpty()
    ageRest: string;
    @IsNotEmpty()
    director: string;
    @IsNotEmpty()
    description: string;
    @IsNotEmpty()
    url: string;
    createdAt: Date;
    updatedAt: Date
}
