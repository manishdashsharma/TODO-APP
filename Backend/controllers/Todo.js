const TodoModel = require('../models/TodoModel');

module.exports.server = async (req, res) => {
  res.status(200).json({"Server status":"The API service is working ... "});
}

module.exports.getAllToDos = async (req,res) => {
  try {
    const data = await TodoModel.find();
    res.status(200).json({"iSucess": true , "data": data});
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
}

module.exports.saveAllToDos = async (req, res) => {
  const { text } = req.body;
  
  try {
    const data = await TodoModel.create({ text });
    console.log("Added Successfully...");
    res.status(201).json({"iSucess": true , "INFO":"Inserted Successfully" , "data": data});
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports.deleteToDos = async (req, res) => {
  const { _id} = req.body;
  try{
    const data = await TodoModel.findByIdAndDelete(_id);
    console.log(data);
    if (!data) {
      console.log(data)
      return res.status(404).json({"INFO": `Data not found with the ${data}`});
    }
    console.log("Deleted Successfully");
    res.status(204).json({"iSucess": true , "INFO": "Deleted Successfully" , "data": data});
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports.updateToDos = async (req, res) => {
  const { _id, text } = req.body;

  try {
    const data = await TodoModel.findByIdAndUpdate(_id, { text }, { new: true });
    if (!data) {
      return res.status(404).json({ "INFO": `Data not found with the ${_id}` });
    }
    console.log("Updated Successfully");
    res.status(200).json({ "iSuccess": true, "INFO": "Updated Successfully", "data": data });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
