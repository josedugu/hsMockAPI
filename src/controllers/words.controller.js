const Words = require("../models/words.model");
const hsData = require("../request/hsAPI");
const {getData}=require('../request/datoCms');


const postWords = async (request, reply) => {
  const newResult = new Words(request.body);
  await newResult.save();
  reply.send("SUCCESS");
};
const getWords = async (req, reply) => {
  console.log(req.params);
  const student = await hsData({studentKey:req.params.studentKey});
  const data=JSON.parse(student.body)
  //console.log(data.student.lesson.id);
  const wordsQuery = `
  query MyQuery {
    allWords(filter: { lesson: { eq: ${data.student.lesson.id}} }) {
      image {
        url
      }
      name
    }
  }
`;
  const words = await getData(wordsQuery)
  if (student) {
    reply.send({student:data.student,words});
  } else {
    reply.send("server error");
  }
};

module.exports = {
  postWords,
  getWords,
};
