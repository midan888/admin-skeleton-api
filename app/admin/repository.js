import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
}, { virtuals: true });

export const Admin = mongoose.model('Admin', schema);

class Repository {
  static make() {
    return new Repository(new Admin());
  }

  constructor(adminModel) {
    this.adminModel = adminModel;
  }

  findByEmail(email) {
    return this.adminModel.findOne({ email });
  }
}

export const saveAdmin = (adminModel, {
  firstName,
  lastName,
  email,
  password,
}) => {
  adminModel.firstName = firstName;
  adminModel.lastName = lastName;
  adminModel.email = email;
  adminModel.password = password;

  adminModel.save();

  return adminModel;
};

export const findByEmail = email => Admin.findOne({ email });

export const findAll = () => Admin.find();

export const findById = _id => Admin.findOne({ _id });