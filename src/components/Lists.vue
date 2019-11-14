<template>
  <div class="container">
    <section v-if="errored">
      <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
    </section>
    <section v-else class="wrapperSection">
      <Loader v-if="loading" />
      <section v-else class="wrapperSection">
        <Modal v-show="isModalOpen" @close="closeModal">
          <CreateList @addList="addList" />
        </Modal>
        <section class="list" v-for="list in sortLists" :key="list.id">
          <a @click="viewList(list.id)">
            <Card class="card" :hover="true">
              <p>{{list.name}}</p>
            </Card>
          </a>
        </section>
      </section>
      <Button @click="openModal" v-show="!loading">Add New Todo List</Button>
    </section>
  </div>
</template>

<script>
import router from "@/router";
import entitiesService from "@/services/entities";
import Loader from "./atomic/Loader";
import Card from "./atomic/Card";
import CreateList from "./CreateList";
import Modal from "./atomic/Modal";
import Button from "./atomic/Button";

export default {
  data() {
    return {
      lists: [],
      loading: false,
      errored: false,
      isModalOpen: false
    };
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
    },

    addList(list) {
      this.lists = this.lists.concat([list]);
      this.closeModal();
    }
  },

  computed: {
    sortLists() {
      return this.lists
        .slice()
        .sort((a, b) => b.name.toLowerCase() - a.name.toLowerCase());
    }
  },

  components: {
    Card,
    CreateList,
    Loader,
    Modal,
    Button
  },

  async mounted() {
    this.loading = true;
    const userId = this.$store.getters["auth/getUserId"];

    setTimeout(async () => {
      const fetchedLists = await entitiesService.findAll("boxes", { userId });
      this.lists = fetchedLists.data;
      this.loading = false;
    }, 500);
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/globals.scss";

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
