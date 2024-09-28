const database = require("./database");
const service = require("./service");

const handlePost = (req, res, next) => {
  try {
    const { name, price } = req.body;

    if (!name || !price)
      return next(service.createError("Missing field!", 400));

    database.addItem(name, price);
    return res.status(201).json({ success: true, message: "Saved!" });
  } catch (error) {
    return next(error);
  }
};

const handleGet = (_req, res, next) => {
  try {
    const items = database.getItems();
    return res.status(200).json({ success: true, data: items });
  } catch (error) {
    return next(error);
  }
};

const handlePut = (req, res, next) => {
  try {
    let { id } = req.params;
    const { name, price } = req.body;
    id = Number(id);

    if (isNaN(id)) return next(service.createError("Invalid id!", 400));

    if (!name || !price)
      return next(service.createError("Missing field!", 400));

    const item = database.updateItem(id, name, price);

    if (item === null) return next(service.createError("Resource not found!", 404));
    else return res.status(200).json({ success: true, message: "Updated!" });
  } catch (error) {
    return next(error);
  }
};

const handleDelete = (req, res, next) => {
  try {
    let { id } = req.params;
    id = Number(id);

    if (isNaN(id)) return next(service.createError("Invalid id!", 400));

    const item = database.deleteItem(id);
    if (item === null) return next(service.createError("Data not found!", 404));
    else return res.status(204).json({ success: true, message: "Deleted!" });
  } catch (error) {
    return next(error);
  }
};

module.exports = { handlePost, handleGet, handlePut, handleDelete };
