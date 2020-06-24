import http from "./httpService";
import jwtDecode from "jwt-decode";

const apiEndPoint = `/auth`;
const tokenKey = "token";

http.setJwt(getJwt());

export async function login(user) {
  const { data: jwt } = await http.post(`${apiEndPoint}`, {
    email: user.username,
    password: user.password,
  });

  console.log(jwt);
  localStorage.setItem(tokenKey, jwt);
}

export async function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    const user = jwtDecode(jwt);
    console.log(user);
    return user;
  } catch (ex) {
    return null;
  }
}

export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt,
};
