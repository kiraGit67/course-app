<template>
  <h1>{{ headline }}</h1>
  <div class="radio-container">
    <div
      class="radio-wrapper"
      v-for="({ id, title, slug, icon }, index) of courseTypesList"
      :key="id"
    >
      <input
        type="radio"
        name="course-type"
        :value="slug"
        :id="slug"
        @change="showSlug(index, slug), $emit('filter-by-type')"
      />
      <i :class="icon"></i>
      <label :for="slug"> {{ title }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "CourseTypes",
  props: {
    headline: String,
    courseTypesList: Array,
  },
  methods: {
    showSlug(index, slug) {
      console.log(index, slug);
    },
    emit() {
      this.$emit("filter-by-type");
    },
  },
};
</script>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css");

h1 {
  text-align: center;
  font-weight: 500;
  color: #000066;
}

.radio-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}
.radio-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
}

input[type="radio"] {
  accent-color: #dd6600;
}

i {
  font-size: 2rem;
  color: #0000cc;
}

label {
  text-align: center;
  font-size: 0.85rem;
  color: #000066;
  font-weight: 500;
}

i:hover,
label:hover {
  color: #dd6600;
}

@media screen and (min-width: 1024px) {
  .radio-container {
    grid-template-columns: repeat(6, 1fr);
  }
}
</style>
