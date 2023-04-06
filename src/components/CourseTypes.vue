<template>
  <h1>{{ headline }}</h1>
  <form>
    <div
      class="radio-wrapper"
      v-for="courseTypesItem of courseTypesList"
      :key="courseTypesItem.id"
    >
      <input
        type="radio"
        name="course-type"
        :value="courseTypesItem.slug"
        :id="courseTypesItem.slug"
      />
      <i :class="courseTypesItem.icon"></i>
      <label :for="courseTypesItem.slug"> {{ courseTypesItem.title }}</label>
    </div>
  </form>
</template>

<script>
export default {
  name: "CourseTypes",
  props: {
    headline: String,
    courseTypesList: Array,
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

form {
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
  form {
    grid-template-columns: repeat(6, 1fr);
  }
}
</style>
