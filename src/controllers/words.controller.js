const Words = require("../models/words.model");
const hsData = require("../request/hsAPI");
const { getData } = require("../request/datoCms");
const mockStudent = require("../request/mockStudentData");

const postWords = async (request, reply) => {
  const newResult = new Words(request.body);
  await newResult.save();
  reply.send("SUCCESS");
};

const getWords = async (req, reply) => {
  const studentKey = req.params.studentKey;
  const studentData = await mockStudent();
  //console.log("studentData",studentData);
  const studentLessons = studentData.lessons.map((lesson) => lesson.course);
  const set = new Set(studentLessons);
  const lessonsArr = [...set];
  const arrString = lessonsArr.map((value) => `"${value}"`).join(", ");
  const studentWords = await Words.find({ studentKey: studentKey });
  const data = await getData(arrString);
  const allCourses = studentData.lessons.map((studentLesson) =>
    data.data.allCourses.flatMap((course) => {
      if (studentLesson.course === course.title) {
        return course.lessons
          .filter(
            (courseLesson) => courseLesson.lessonNumber === studentLesson.lesson
          )
          .map((lesson) => ({
            ...lesson,
            courseTitle: course.title,
          }));
      }
      return [];
    })
  );
  const wordsWithoutScore = allCourses
    .map((course) =>
      course[0].words.map((word) => ({
        ...word,
        lessonNumber: course[0].lessonNumber,
        courseTitle: course[0].courseTitle,
      }))
    )
    .flat();
  const words = wordsWithoutScore.map((word) => {
    const studentWord = studentWords[0].words.find(
      (studentWord) => studentWord.name === word.name
    );

    if (studentWord) {
      word.score = studentWord.score;
    } else {
      word.score = ["unknown"];
    }

    return word;
  });
  reply.header("Access-Control-Allow-Origin", "*");
  reply.header("Access-Control-Allow-Methods", "GET");
  console.log(words);
  if (words && studentWords[0].gameLevel) {
    reply.send({ gameLevel: studentWords[0].gameLevel, words });
  } else {
    reply.send("server error");
  }
};

module.exports = {
  postWords,
  getWords,
};
