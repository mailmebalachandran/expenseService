const categoryService = require("../services/categoryService");

const getCategories = async (req, res) => {
  try {
    const getCategoryData = await categoryService.getCategories();
    return res.status(200).send(getCategoryData);
  } catch (err) {
    return res.status(500).send({ message: "Error in getting the categories" });
  }
};

module.exports = { getCategories };
