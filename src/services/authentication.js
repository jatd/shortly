import api from "@/services/api";

export default {
  register(credentials) {
    return api().post("auth/register", credentials);
  },
  login(credentials) {
    return api().post("auth/login", credentials);
  }
};
