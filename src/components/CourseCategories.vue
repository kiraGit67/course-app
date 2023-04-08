<template>
  <h1>{{ headline }}</h1>
  <div class="cat-container">
    <article
      v-for="(
        { id, title, slug, visible_div, hidden_divs, icon }, index
      ) of courseCategoriesList"
      :key="id"
      :id="slug"
      :data-visible-div="visible_div"
      :data-hidden-divs="hidden_divs"
      @click="handleShowSlug(index, slug), $emit('filter-by-category')"
    >
      <i :class="icon"></i>
      <h4>{{ title }}</h4>
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
  methods: {
    handleShowSlug(index, slug) {
      console.log(index, slug);
    },
    emit() {
      this.$emit("filter-by-category");
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

.cat-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

article {
  text-align: center;
}

h4 {
  color: #000066;
  font-weight: 500;
  font-size: 1.1rem;
}

i {
  font-size: 2.5rem;
  color: #0000cc;
}

i:hover,
h4:hover {
  color: #dd6600;
}

@media screen and (min-width: 768px) {
  .cat-container {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
