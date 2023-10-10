const readToken = "1abe31571ce7ca01a72822298ec4c2";
///cambiar eq por in y pasar un array de todas las lecciones
const getData = async (arr) => {
  const query = `
  query A {
    allCourses(filter: {title: {in: [${arr}]}}) {
      title
      lessons {
        lessonNumber
        words {
          name
          image {
            url
          }
        }
      }
    }
  }
`;
  const api = "https://graphql.datocms.com/";
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/vnd.api+json",
      // Si la API GraphQL requiere autenticación, agrega el token de autenticación aquí
      Authorization: `Bearer ${readToken}`,
      "X-Api-Version": "3",
    },
    body: JSON.stringify({ query }),
  };
  try {
    const response = await fetch(api, requestOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getData,
};
