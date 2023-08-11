const { Schema, default: mongoose } = require("mongoose");

const workSchema = new Schema({
  work_name: {
    type: String,
    require: true,
  },
  worker_name: {
    type: String,
    require: true,
  },
});

export default mongoose.models.Works || mongoose.model("Works", workSchema);

// const Works = mongoose.model("Work", workSchema);

// module.exports = Works;

// module.exports = mongoose.model("Work", workSchema);
//export const Works = mongoose.model("work", workSchema);
