export const handleLogin = (e, email, password, role) => {
  e.preventDefault();
  try {
    if(!role || !email || !password){
        return alert('Please Provide all Fields')
    }
    console.log("login", e, email, password, role);
  } catch (error) {
    console.log(error);
  }
};

export const handleRegister = (
  e,
  name,
  role,
  email,
  password,
  organisationName,
  phone,
  hospitalName,
  website,
  address
) => {
  e.preventDefault();
  try {
    console.log(
      "Register => ",
      name,
      role,
      email,
      password,
      organisationName,
      phone,
      hospitalName,
      website,
      address
    );
  } catch (error) {
    console.log(error);
  }
};
