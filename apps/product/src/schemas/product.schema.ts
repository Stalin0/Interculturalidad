import { AbstractDocument } from "@app/common";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import exp from "constants";

@Schema({ versionKey: false })
export class Product extends AbstractDocument {
  @Prop()
  name: string;

  @Prop()
    price: number;

  @Prop()
  description: string;

}

export const ProductSchema = SchemaFactory.createForClass(Product);