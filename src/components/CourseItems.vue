<template>
  <h1>{{ headline }}</h1>
  <div class="course-list">
    <article v-for="course of courseList" :key="course.id">
      <div class="img-box"><img :src="course.img_source" alt="" /></div>
      <div class="text-box">
        <h2>{{ course.title }}</h2>
        <p>{{ course.description }}</p>
        <p>
          <strong>Kurs-Typ:</strong> {{ course.course_type }}<br />
          <strong>Kategorie:</strong> {{ course.category }}<br />
          <strong>Anbieter:</strong> {{ course.vendor }}
        </p>
      </div>
      <div class="link-box">
        <a :href="course.product_url">Produkt-Seite</a>
        <a :href="course.order_url">Bestell-Seite</a>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "CourseItems",
  props: {
    headline: String,
    courseList: Array,
  },
};
</script>

<style scoped>
.course-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

article {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.35rem;
  border: 1px solid lightgrey;
}

article .img-box {
  width: 100%;
  _height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}

article .text-box {
  width: 100%;
}

article > .text-box > h2 {
  font-size: 1.1rem;
  font-weight: 500;
  color: #000066;
}

img {
  _width: 100%;
  max-width: 100%;
  max-height: 100%;
}

article > .link-box {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;
}

article > .link-box > a {
  padding: 0.25rem 0.15rem;
  border: 2px solid #000099;
  text-decoration: none;
  color: #000066;
  flex-grow: 1;
  text-align: center;
}

@media screen and (min-width: 768px) {
  .course-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
}

@media screen and (min-width: 992px) {
  .course-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }
}
</style>
