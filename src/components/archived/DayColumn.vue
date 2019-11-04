<template>
  <div @click="openModal">{{day}}</div>
</template>

<script>
import moment from "moment";

export default {
  props: ["dayIndex", "day", "items"],
  data() {
    return {
      events: []
    };
  },

  methods: {
    openModal() {
      this.$emit("setSelectedDay", { dayIndex: this.dayIndex, day: this.day });
      this.$modal.show("create-week-event");
    }
  },

  mounted() {
    this.events = this.items.filter(
      ({ date }) => moment(date).day() === this.dayIndex
    );
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/globals";
</style>
