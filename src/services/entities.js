import api from "@/services/api";

export default {
  getOne(entity, id) {
    return api().get(`${entity}/${id}`);
  },

  findAll(entity, params) {
    return api().get(entity, { params });
  },
  create(entity, box) {
    return api().post(entity, box);
  }
};
