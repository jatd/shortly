import api from '@/services/api';

export default {
  findAll(params) {
    return api().get('items', { params });
  },
  create(item) {
    return api().post('items', item);
  },
};
