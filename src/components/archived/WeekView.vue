<template>
  <div class="week-view">
    <div class="week-container">
      <DayColumn
        class="day-column"
        @setSelectedDay="setSelectedDay"
        v-for="(day, index) in days"
        :key="day"
        :dayIndex="index"
        :day="day"
        :items="items"
      />

      <div class="create-event-modal">
        <div class="create-event-text">Create an event for this {{selectedDay}}:</div>
        <input name="title" v-model="title" placeholder="Title" />
        <button @click="createEvent">Create Event</button>
      </div>
    </div>
  </div>
</template>
 
<script>
import moment from "moment";
import DayColumn from "./DayColumn";

export default {
  props: ["items"],
  data() {
    return {
      selectedDay: null,
      selectedDayIndex: -1,
      selectedTime: null,
      title: null,
      days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      options: [
        { value: "0", label: "12:00 am" },
        { value: "1", label: "1:00 am" },
        { value: "2", label: "2:00 am" },
        { value: "3", label: "3:00 am" },
        { value: "4", label: "4:00 am" },
        { value: "5", label: "5:00 am" },
        { value: "6", label: "6:00 am" },
        { value: "7", label: "7:00 am" },
        { value: "8", label: "8:00 am" },
        { value: "9", label: "9:00 am" },
        { value: "10", label: "10:00 am" },
        { value: "11", label: "11:00 am" },
        { value: "12", label: "12:00 pm" },
        { value: "13", label: "1:00 pm" },
        { value: "14", label: "2:00 pm" },
        { value: "15", label: "3:00 pm" },
        { value: "16", label: "4:00 pm" },
        { value: "17", label: "5:00 pm" },
        { value: "18", label: "6:00 pm" },
        { value: "19", label: "7:00 pm" },
        { value: "20", label: "8:00 pm" },
        { value: "21", label: "9:00 pm" },
        { value: "22", label: "10:00 pm" },
        { value: "23", label: "11:00 pm" }
      ]
    };
  },

  methods: {
    setSelectedDay(selectedDay) {
      this.selectedDay = selectedDay.day;
      this.selectedDayIndex = selectedDay.dayIndex;
    },

    createEvent() {
      if (
        this.selectedDayIndex > -1 &&
        this.selectedTime &&
        this.selectedTime.value &&
        this.title
      ) {
        const eventDate = moment()
          .startOf("week")
          .add(this.selectedDayIndex, "days")
          .set({ hour: this.selectedTime.value });
        this.$emit("createEvent", {
          title: this.title,
          date: eventDate.toISOString()
        });
      }
    }
  },

  components: {
    DayColumn
  },

  mounted() {
    console.log(this.items);
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/globals";

.week-view {
  flex: 1;
}
.week-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 100%;
}

.day-column {
  flex: 1;
  border: 1px dashed $primary-color;
  border-right: none;
  text-align: center;
  min-width: 150px;

  &:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  &:last-child {
    border-right: 1px dashed $primary-color;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
}

.create-event-modal {
  padding: 20px;
}

.create-event-text {
  color: $primary-color;
  padding-bottom: 15px;
}

.dayText {
  text-transform: uppercase;
  color: black;
  font-weight: 700;
  padding-top: 2px;
}
</style>
