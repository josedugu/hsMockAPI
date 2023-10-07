const hsData = async ({ studentKey }) => {
    console.log(studentKey);
  try {
    const result = await fetch(`http://127.0.0.1:3000/${studentKey}/level`);
    if (!result.ok) {
      return false;
    }
    const data = await result.json();
    return data;
  } catch (error) {
    console.log(error);
    return;
  }
};

module.exports=hsData
