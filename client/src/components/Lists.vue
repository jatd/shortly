<template>
  <div class="container">
    <section v-if="errored">
      <p>
        We're sorry, we're not able to retrieve this information at the moment,
        please try back later
      </p>
    </section>
    <section
      v-else
      class="wrapperSection"
    >
      <Loader v-if="loading" />
      <section
        v-else
        class="wrapperSection"
      >
        <Modal
          v-show="isModalOpen"
          @close="closeModal"
        >
          <CreateList
            ref="createList"
            @addList="addList"
          />
        </Modal>
        <section
          v-for="list in sortLists"
          :key="list.id"
          class="list"
        >
          <a @click="viewList(list.id)">
            <Card
              class="card"
              :hover="true"
            >
              <p>{{ list.name }}</p>
            </Card>
          </a>
        </section>
      </section>
      <Button
        v-show="!loading"
        @click="openModal"
      >
        Add New List
      </Button>
    </section>
  </div>
</template>

<script>
import router from '@/router';
import entitiesService from '@/services/entities';
import Loader from './atomic/Loader';
import Card from './atomic/Card';
import CreateList from './CreateList';
import Modal from './atomic/Modal';
import Button from './atomic/Button';

export default {

  components: {
    Card,
    CreateList,
    Loader,
    Modal,
    Button,
  },
  data() {
    return {
      lists: [],
      loading: false,
      errored: false,
      isModalOpen: false,
    };
  },

  computed: {
    sortLists() {
      return this.lists
        .slice()
        .sort((a, b) => b.name.toLowerCase() - a.name.toLowerCase());
    },
  },

  async mounted() {
    this.loading = true;
    const userId = this.$store.getters['auth/getUserId'];

    setTimeout(async () => {
      const fetchedLists = await entitiesService.findAll('lists', { userId });
      this.lists = fetchedLists.data;
      this.loading = false;
    }, 500);
  },

  methods: {
    viewList(id) {
      router.push(`/list/${id}`);
    },

    closeModal() {
      this.isModalOpen = false;
    },

    openModal() {
      this.isModalOpen = true;
      console.log(this.$refs.createList.$el.querySelector('input'));
    },

    addList(list) {
      this.lists = this.lists.concat([list]);
      this.closeModal();
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/globals.scss';

p {
  color: black;
  font-weight: 700;
}

.container {
  width: 100%;
}

.wrapperSection {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  align-items: center;
  max-width: $max-width;
  margin: 0 auto;
  position: relative;
  margin-bottom: 20px;
}

.list {
  flex-grow: 1;
  font-size: 18px;
  .card.cardActive {
    margin: 5px;
    min-width: 250px;
  }
}
</style>
