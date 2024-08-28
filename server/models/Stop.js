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
    type: "Point",
    coordinates: {
      type: [Number],
      required: true
    }
  },
  highway: {
    type: String,
    required: true
  },
  nearby: {
    type: String,
    required: true
  },
  direction: {
    type: String,
    required: true
  },
  mileMarker: {
    type: Number,
    required: true
  },
  type: [String],
  spaces: {
    type: Number,
    required: true
  },
  amenities: [String]
});

const Stop = mongoose.model("Stop", stopSchema);

export default Stop;
