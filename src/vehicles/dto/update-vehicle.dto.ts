// vehicles/dto/update-vehicle.dto.ts
import { IsString, IsInt, IsEnum, IsOptional } from 'class-validator';

export class UpdateVehicleDto {
  @IsString({ message: 'Make must be a string' })
  readonly make?: string;

  @IsString({ message: 'Model must be a string' })
  readonly model?: string;

  @IsInt({ message: 'Year must be an integer' })
  readonly year?: number;

  @IsString({ message: 'Registration number must be a string' })
  readonly registrationNumber?: string;

  @IsEnum(['active', 'maintenance', 'retired'], { message: 'Invalid status' })
  readonly status?: string;

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
