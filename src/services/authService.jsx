import { userLogin, userRegister } from "../redux/features/auth/authActions";
import store from "../redux/store";

export const handleLogin = (e, email, password, role) => {
  e.preventDefault();
  try {
    if (!role || !email || !password) {
      return alert("Please Provide all Fields");
    }
    store.dispatch(userLogin({ email, password, role }));
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
   store.dispatch(
     userRegister({
       name,
       role,
       email,
       password,
       organisationName,
       phone,
       hospitalName,
       website,
       address,
     })
   );
  } catch (error) {
    console.log(error);
  }
};
