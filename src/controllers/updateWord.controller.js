const Words = require("../models/words.model");

const updateWord = async (req, reply) => {
  reply.header("Access-Control-Allow-Origin", "*");
  reply.header("Access-Control-Allow-Methods", "POST");
  const { studentKey, addWords } = req.body;
  console.log(req.body);
  try {
    const studentWords=await Words.findOneAndUpdate(
      { studentKey: studentKey }, 
      { $push: { words: { $each: addWords } } }, 
      { returnNewDocument: true } 
    );
    console.log(studentWords);
    reply.code(200);
    reply.send("SUCCESS");
    console.log("PETICION COMPLETADA");
  } catch (error) {
    console.log(error);
    reply.code(400);
  }
};

module.exports = { updateWord };
