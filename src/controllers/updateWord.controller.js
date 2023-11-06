const Words=require('../models/words.model')

const updateWord=async(req, reply)=>{
    const {studentKey, words}=req.body;
    Words.findOneAndUpdate(
        { studentKey: studentKey }, // Filtra por el campo studentKey
        { $push: { words: { $each: words } } }, // Agrega nuevos objetos al array 'words'
        { new: true }, // Devuelve el documento actualizado
        (err, updatedDocument) => {
          if (err) {
            console.error("Error al actualizar el documento:", err);
            // Manejo de errores
          } else {
            console.log("Documento actualizado:", updatedDocument);
            // Hacer algo con el documento actualizado
          }
        }
      );
      reply.header("Access-Control-Allow-Origin", "*");
      reply.header("Access-Control-Allow-Methods", "POST");
      reply.code(200);
      reply.send('SUCCESS')
}

module.exports={updateWord}