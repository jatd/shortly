import api from '@/services/api';

export default {
  getOne(listId) {
    return api().get(`lists/${listId}`);
  },

  findAll(params) {
    return api().get('lists', { params });
  },
  create(list) {
    return api().post('lists', list);
  },
};
