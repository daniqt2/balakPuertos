import { Schema, model, models } from "mongoose";
const GeometrySchema = new Schema({
  type: { type: String },
  coordinates: { type: [] },
});

const PuertoSchema = new Schema({
  name: { type: String },
  id: { type: String },
  description: {
    type: String,
  },
  geometry: { type: GeometrySchema },
});

const Puerto = models?.Puerto || model("Puerto", PuertoSchema);

export default Puerto;
