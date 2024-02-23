// vehicles/dto/create-vehicle.dto.ts
import { IsNotEmpty, IsString, IsInt, IsEnum, IsOptional } from 'class-validator';

export class CreateVehicleDto {
  @IsNotEmpty({ message: 'Make is required' })
  @IsString({ message: 'Make must be a string' })
  readonly make: string;

  @IsNotEmpty({ message: 'Model is required' })
  @IsString({ message: 'Model must be a string' })
  readonly model: string;

  @IsNotEmpty({ message: 'Year is required' })
  @IsInt({ message: 'Year must be an integer' })
  readonly year: number;

  @IsNotEmpty({ message: 'Registration number is required' })
  @IsString({ message: 'Registration number must be a string' })
  readonly registrationNumber: string;

  @IsNotEmpty({ message: 'Status is required' })
  @IsEnum(['active', 'maintenance', 'retired'], { message: 'Status must be one of: active, maintenance, retired' })
  readonly status: string;

  @IsOptional()
  @IsString({ message: 'Location must be a string' })
  readonly location?: string;

  @IsOptional()
  @IsString({ message: 'Assigned driver must be a string' })
  readonly assignedDriver?: string;

  @IsOptional()
  @IsString({ message: 'Maintenance tasks must be an array of strings' })
  readonly maintenanceTasks?: string[];
}
