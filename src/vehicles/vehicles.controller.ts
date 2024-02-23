// vehicles/controllers/vehicles.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body, UsePipes,UseGuards } from '@nestjs/common';
import { VehiclesService } from './services/vehicles.service';
import { Vehicle } from './entities/vehicle.entity';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { ValidationPipe } from './pipes/validation.pipe';
import { AuthGuard } from '@nestjs/passport';
import { StatusVehicleDto } from './dto/status.vechicle.dto';
import { AssignDriverDto } from './dto/assign-driver.dto';

@UseGuards(AuthGuard('jwt'))
@Controller('vehicle')
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  @Get()
  async findAll(): Promise<Vehicle[]> {
    return this.vehiclesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Vehicle> {
    return this.vehiclesService.findOne(id);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() createVehicleDto: CreateVehicleDto): Promise<Vehicle> {
    return this.vehiclesService.create(createVehicleDto);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  async update(@Param('id') id: string, @Body() updateVehicleDto: UpdateVehicleDto): Promise<Vehicle> {
    return this.vehiclesService.update(id, updateVehicleDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Vehicle> {
    return this.vehiclesService.remove(id);
  }

  @Put(':id/status')
  @UsePipes(new ValidationPipe())
  async markVehicleStatus(@Param('id') id: string, @Body() statusVehicleDto: StatusVehicleDto): Promise<Vehicle> {
    return this.vehiclesService.markVehicleStatus(id, statusVehicleDto.status);
  }

  @Put(':id/assign-driver')
  @UsePipes(new ValidationPipe())
  async assignDriver(@Param('id') id: string, @Body() assignDriverDto: AssignDriverDto): Promise<Vehicle> {
    return this.vehiclesService.assignDriver(id, assignDriverDto.driverID);
  }

  @Put(':id/add-maintenance-task')
  @UsePipes(new ValidationPipe())
  async addMaintenanceTask(@Param('id') id: string, @Body('taskId') taskId: string): Promise<Vehicle> {
    return this.vehiclesService.addMaintenanceTask(id, taskId);
  }
}
