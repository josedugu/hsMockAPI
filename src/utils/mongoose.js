const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://jose:hE9uhKqIGCuIbpt8@heyspanish.cey5cym.mongodb.net/student_results",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));
