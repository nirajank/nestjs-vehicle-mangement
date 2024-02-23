// vehicles/dto/create-vehicle.dto.ts
import { IsNotEmpty, IsString, IsInt, IsEnum, IsOptional } from 'class-validator';

export class AssignDriverDto {

    @IsNotEmpty({ message: 'Driver is required' })
    @IsString({ message: 'Assigned driver must be a string' })
    readonly driverID?: string;


}
