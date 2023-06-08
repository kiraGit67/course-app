<template>
  <h1>{{ headline }}</h1>
  <div class="course-list">
    <article v-for="course of courseList" :key="course.id">
      <div class="content-box">
        <div class="img-box"><img :src="course.img_source" alt="" /></div>
        <div class="text-box">
          <h2>{{ course.title }}</h2>
          <p>{{ course.description }}</p>
          <p>
            <strong>Kurs-Typ:</strong> {{ course.type_props.label }}<br />
            <strong>Kategorie:</strong> {{ course.cat_props.label }}<br />
            <strong>Anbieter:</strong> {{ course.vendor }}
          </p>
        </div>
      </div>
      <div class="link-box">
        <a :href="course.product_url" target="_blank">Produkt-Seite</a>
        <a :href="course.order_url" target="_blank">Bestell-Seite</a>
        <router-link :to="{ name: 'course-details', params: { id: course.id } }"
          >Details</router-link
        >
        <router-link :to="{ name: 'update-course', params: { id: course.id } }"
          >Bearbeiten</router-link
        >
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
h1 {
  color: #000066;
  font-weight: 500;
  text-align: center;
  margin-top: 3rem;
}

strong {
  color: #000033;
  font-weight: 500;
}

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
  box-shadow: 2px 2px 0 #efefef;
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

article > .content-box > .text-box > h2 {
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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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

article > .link-box > a:hover {
  color: #dd6600;
  border-color: #dd6600;
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

@media screen and (min-width: 1400px) {
  .course-list {
    grid-template-columns: repeat(6, 1fr);
  }
}
</style>
