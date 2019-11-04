import api from "@/services/api";

export default {
  getOne(boxId) {
    return api().get(`boxes/${boxId}`);
  },

  findAll(params) {
    return api().get("boxes", { params });
  },
  create(box) {
    return api().post("boxes", box);
  }
};
