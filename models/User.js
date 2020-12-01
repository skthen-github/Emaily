const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
});

// first arg is the name of the collection
// second arg is the schema created above
// two args in mongoose.model means we are trying to load into mongoose
mongoose.model("users", userSchema);
