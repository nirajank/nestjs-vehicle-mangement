// vehicles/entities/vehicle.entity.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type VehicleDocument = Vehicle & Document;

@Schema()
export class Vehicle {
  @Prop({ required: true })
  make: string;

  @Prop({ required: true })
  model: string;

  @Prop({ required: true })
  year: number;

  @Prop({ required: true })
  registrationNumber: string;

  @Prop({ required: true, enum: ['active', 'maintenance', 'retired'] })
  status: string;

  @Prop()
  location: string;

  @Prop()
  assignedDriver: string; // ID of the assigned driver

  @Prop()
  maintenanceTasks: string[]; // Array of maintenance task IDs
}

export const VehicleSchema = SchemaFactory.createForClass(Vehicle);
