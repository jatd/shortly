<template>
  <div class="container">
    <section v-if="errored">
      <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
    </section>
    <section v-else class="wrapperSection">
      <Loader v-if="loading" />
      <section v-else class="wrapperSection">
        <Modal v-show="isModalOpen" @close="closeModal">
          <CreateBox @addBox="addBox" />
        </Modal>
        <section class="box" v-for="box in sortBoxes" :key="box.id">
          <a href="#" @click="viewBox(box.id)">
            <Card :hover="true">
              <p>{{box.name}}</p>
            </Card>
          </a>
        </section>
      </section>
      <button class="createButton" @click="openModal" v-show="!loading">Add New Todo List</button>
    </section>
  </div>
</template>

<script>
import router from "@/router";
import entitiesService from "@/services/entities";
import Loader from "./atomic/Loader";
import Card from "./atomic/Card";
import CreateBox from "./CreateBox";
import Modal from "./atomic/Modal";

export default {
  data() {
    return {
      boxes: [],
      loading: false,
      errored: false,
      isModalOpen: false
    };
  },

  methods: {
    viewBox(id) {
      router.push(`/box/${id}`);
    },

    closeModal() {
      this.isModalOpen = false;
    },

    openModal() {
      this.isModalOpen = true;
    },

    addBox(box) {
      this.boxes = this.boxes.concat([box]);
      this.closeModal();
    }
  },

  computed: {
    sortBoxes() {
      return this.boxes
        .slice()
        .sort((a, b) => b.name.toLowerCase() - a.name.toLowerCase());
    }
  },

  components: {
    Card,
    CreateBox,
    Loader,
    Modal
  },

  async mounted() {
    this.loading = true;
    const userId = this.$store.getters["auth/getUserId"];

    setTimeout(async () => {
      const boxes = await entitiesService.findAll("boxes", { userId });
      this.boxes = boxes.data;
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

.box {
  flex-grow: 1;
  .card.cardActive {
    margin: 5px;
  }
}
</style>
