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
/* @import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"); */

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

label {
  text-align: center;
  font-size: 0.85rem;
  color: #000099;
  font-weight: 500;
}
</style>
