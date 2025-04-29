import bcrypt from "bcrypt";

const getPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashedpass = await bcrypt.hash(password, salt);
  return hashedpass;
};

export default getPassword;
