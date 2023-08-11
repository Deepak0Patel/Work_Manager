import { httpAxios } from "@/helper/httphelper";

export async function signUp(user) {
  const result = await httpAxios
    .post("api/users", user)
    .then((response) => response.data);
  return result;
}
export async function login(LoginData) {
  const result = await httpAxios
    .post("api/login", LoginData)
    .then((response) => response.data);
  return result;
}
