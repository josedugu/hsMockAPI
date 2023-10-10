const mockStudent = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = {
          studentKey: "12345",
          lessons: [
            { course: "4-6 TPR", lesson: 1 },
            { course: "4-6 TPR", lesson: 2 },
            { course: "4-6 TPR", lesson: 3 },
          ],
          gameLevel: 2,
          createdAt: 1696817831022,
          updatedAt: 1696817831022,
        };
        resolve(data);
      }, 300);
    });
  };
module.exports=mockStudent