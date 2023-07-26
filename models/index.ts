import { Puerto } from "./Puertos";
import { getModelForClass } from "@typegoose/typegoose";

export const MODEL = getModelForClass(Puerto);

const PuertoModel = MODEL || getModelForClass(Puerto);

export default PuertoModel;
