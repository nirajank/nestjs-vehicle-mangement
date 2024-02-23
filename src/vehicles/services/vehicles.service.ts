// vehicles/services/vehicles.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Vehicle, VehicleDocument } from '../entities/vehicle.entity';

@Injectable()
export class VehiclesService {
  constructor(@InjectModel(Vehicle.name) private vehicleModel: Model<VehicleDocument>) {}

  async findAll(): Promise<Vehicle[]> {
    return this.vehicleModel.find().exec();
  }

  async findOne(id: string): Promise<Vehicle> {
    return this.vehicleModel.findById(id).exec();
  }

  async create(createVehicleDto: any): Promise<Vehicle> {
    const createdVehicle = new this.vehicleModel(createVehicleDto);
    return createdVehicle.save();
  }

  async update(id: string, updateVehicleDto: any): Promise<Vehicle> {
    return this.vehicleModel.findByIdAndUpdate(id, updateVehicleDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Vehicle> {
    return this.vehicleModel.findByIdAndDelete(id).exec();
  }

  async markVehicleStatus(id: string, status: string): Promise<Vehicle> {
    return this.vehicleModel.findByIdAndUpdate(id, { status }, { new: true }).exec();
  }

  async assignDriver(id: string, driverId: string): Promise<Vehicle> {
    return this.vehicleModel.findByIdAndUpdate(id, { assignedDriver: driverId }, { new: true }).exec();
  }

  async addMaintenanceTask(id: string, taskId: string): Promise<Vehicle> {
    return this.vehicleModel.findByIdAndUpdate(id, { $push: { maintenanceTasks: taskId } }, { new: true }).exec();
  }
}
