const { model, Schema } = require("mongoose");
///almacenar level, no lo retorna apiHS
///alamcenar todas las palabras que el estudiante va aprendiendo en un array dentro del modelo
//guardar estado de la palabra, si el estudiante ya se la sabe gold-silver, pero se le olvda, guardar un subestado(gold-silver-unkw) desconocida, 
//para que el front la repita
const wordsSchema = new Schema(
  {
    studentKey: {
      type:Number,
      unique:true
    },
    words: Array,
    gameLevel:Number,
    score:Array
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Words", wordsSchema);
