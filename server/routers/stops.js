import { Router } from "express";
import Stop from "../models/Stop.js";

const router = Router();

// Create a new stop route
router.post("/", async (request, response) => {
  try {
    const newStop = new Stop(request.body);

    const data = await newStop.save();

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});

// Get distinct values for a given field within a collection
router.get("/values/:field", async (request, response) => {
  try {
    const field = request.params.field;
    const query = Stop.distinct(field, {
      [field]: { $nin: ["", null] }
    }).sort();

    const data = await query.exec();

    response.json(data ? data : []);
  } catch (error) {
    response.status(500).json(error.message);
  }
});

// Get all stops route
router.get("/", async (request, response) => {
  try {
    // Store the query parameters into a JavaScript object
    const query = request.query; //Defaults to an empty object {} ? size=large request.query - {size: "large"}

    const data = await Stop.find(query);

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);
    return response.status(500).json(error.errors);
  }
});

// Get a single stop by ID
router.get("/:id", async (request, response) => {
  try {
    const data = await Stop.findById(request.params.id);

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// Delete a stop by ID
router.delete("/:id", async (request, response) => {
  try {
    const data = await Stop.findByIdAndDelete(request.params.id, {});

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// Update a stop by ID
router.put("/:id", async (request, response) => {
  try {
    const body = request.body;

    const data = await Stop.findByIdAndUpdate(
      request.params.id,
      {
        $set: {
          name: body.name,
          state: body.state,
          highway: body.highway,
          nearby: body.nearby,
          direction: body.direction,
          mileMarker: body.mileMarker,
          type: body.type,
          spaces: body.spaces,
          amenities: body.amenities
        }
      },
      { new: true, runValidators: true }
    );

    response.json(data);
  } catch (error) {
    console.log(error);
    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);
    return response.status(500).json(error.errors);
  }
});
export default router;
