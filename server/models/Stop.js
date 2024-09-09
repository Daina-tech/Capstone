import mongoose from "mongoose";

const stopSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  location: {
    type: [Number],
    required: true
  },
  highway: {
    type: String,
    required: true
  },
  nearby: {
    type: String,
    required: true
  },
  direction: [String],
  mileMarker: {
    type: Number,
    required: true
  },
  amenities: [String]
});

const Stop = mongoose.model("Stop", stopSchema);

export default Stop;
