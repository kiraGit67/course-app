<template>
  <h1>Course Nr. {{ course.id }} Details</h1>
  <div class="course-wrapper">
    <div class="image-wrapper">
      <img :src="course.img_source" :alt="course.title" :title="course.title" />
    </div>

    <div class="details-wrapper">
      <h2>{{ course.title }}</h2>
      <p class="course-tags">
        <span>{{ course.type_props.label }}</span> |
        <span>{{ course.cat_props.label }}</span
        ><br />
        Anbieter <span>{{ course.vendor }}</span>
      </p>
      <p>{{ course.description }}</p>
      <div class="course-links">
        <a :href="course.product_url" target="_blank">Produkt-Seite</a>
        <a :href="course.order_url" target="_blank">Bestellseite</a>
      </div>
    </div>
  </div>
  <!--
  <p>{{ this.$route.params }}</p>
  <p>{{ course }}</p>
  -->
</template>

<script>
export default {
  name: "CourseDetailsView",
  data() {
    return {
      course: {},
    };
  },
  created() {
    this.getCourse();
  },
  methods: {
    async getCourse() {
      const response = await fetch(
        "http://localhost:3000/courses/" + this.$route.params.id
      );
      this.course = await response.json();
    },
  },
};
</script>

<style scoped>
h1,
h2 {
  color: #00c;
  font-weight: 500;
}

.image-wrapper img {
  max-width: 100%;
}

p {
  font-size: 1.2rem;
}

p.course-tags {
  font-size: 1.25rem;
  color: #000033;
}

p.course-tags > span {
  font-weight: 600;
  color: #000099;
}

.course-links {
  display: flex;
  gap: 1rem;
}

.course-links a {
  text-decoration: none;
  font-size: 1.25rem;
  color: #000099;
  background-color: transparent;
  padding: 0.35rem 0.5rem;
  border: 2px solid #009;
}

.course-links a:hover {
  background-color: #ff6600;
  border-color: #ff6600;
  color: white;
}

@media screen and (min-width: 768px) {
  .course-wrapper {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 2rem;
    align-items: center;
  }
}

@media screen and (min-width: 1280px) {
  .course-wrapper {
    grid-template-columns: 1fr 3fr;
  }
}
</style>
