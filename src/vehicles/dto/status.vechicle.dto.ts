// vehicles/dto/create-vehicle.dto.ts
import { IsNotEmpty, IsString, IsInt, IsEnum, IsOptional } from 'class-validator';

export class StatusVehicleDto {

  @IsNotEmpty({ message: 'Status is required' })
  @IsEnum(['active', 'maintenance', 'retired'], { message: 'Status must be one of: active, maintenance, retired' })
  readonly status: string;


}
