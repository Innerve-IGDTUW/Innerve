const { Schema } = mongoose = require('mongoose');

const clientSchema = new Schema({
  name: String,
  emailid: String,
  contactno: String,
  event: String
});

module.exports = mongoose.model('Client', clientSchema);
