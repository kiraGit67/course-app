<template>
  <h1>{{ headline }}</h1>
  <div class="container">
    <article
      v-for="courseCategoriesItem of courseCategoriesList"
      :key="courseCategoriesItem.id"
    >
      <h4>{{ courseCategoriesItem.title }}</h4>
    </article>
  </div>
</template>

<script>
export default {
  name: "CourseCategories",
  props: {
    headline: String,
    courseCategoriesList: Array,
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  font-weight: 500;
  color: #000066;
}

.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

article {
  text-align: center;
}

h4 {
  color: #000099;
  font-weight: 500;
  font-size: 1.1rem;
}

@media screen and (min-width: 768px) {
  .container {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
