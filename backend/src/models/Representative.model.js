import mongoose from "mongoose";

const RepresentativeSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      enum: ["br2" , "br3", "br4", "mentor"],
      required: true,
    },
    department: { type: String },
    year: { type: Number },
    region: { type: String },
    name_and_no: { type: String, required: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Representative = mongoose.model("Representative", RepresentativeSchema);

export default Representative;
