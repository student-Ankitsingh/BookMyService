import Service from "../Model/Service.js";

// Add Service
export const addService = async (req, res) => {
    try {
        const { title, description, price } = req.body;

        // Uploaded Image
        const image = req.file.filename;

        // create service 
        const service = await Service.create({
            title,
            description,
            price,
            image,
            provider: req.user.id,   
        });

        res.status(200).json({
            message: "Service Added Successfully",
            service,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}; 

// GET ALL SERVICES
export const getAllServices = async (req, res) => {
  try {

    const services = await Service.find()
      .populate("provider", "name email");

    res.status(200).json(services);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};