<template>
  <h2>Kurs Nr. {{ this.$route.params.id }} bearbeiten</h2>
  <form @submit.prevent="updateCourse()">
    <div class="form-row two-cols">
      <div class="input-wrapper">
        <label for="title">Titel</label>
        <input type="text" name="title" id="title" v-model="course.title" />
      </div>
      <div class="input-wrapper">
        <label for="vendor">Anbieter</label>
        <input type="text" name="vendor" id="vendor" v-model="course.vendor" />
      </div>
    </div>
    <div class="form-row two-cols">
      <div class="input-wrapper">
        <label for="course-type">Kurs-Typ</label>
        <div>
          <select
            name="course-type-label"
            id="course-type-label"
            v-model="course.type_props.label"
          >
            <option
              v-for="courseType in courseTypes"
              :key="courseType.id"
              :value="courseType.title"
            >
              {{ courseType.title }}
            </option>
          </select>
          <select
            name="course-type-slug"
            id="course-type-slug"
            v-model="course.type_props.slug"
          >
            <option
              v-for="courseType in courseTypes"
              :key="courseType.id"
              :value="courseType.slug"
            >
              {{ courseType.slug }}
            </option>
          </select>
        </div>
      </div>
      <div class="input-wrapper">
        <label for="category">Kategorie</label>
        <div>
          <select
            name="category-label"
            id="category-label"
            v-model="course.cat_props.label"
          >
            <option
              v-for="courseCategory in courseCategories"
              :key="courseCategory.id"
              :value="courseCategory.title"
            >
              {{ courseCategory.title }}
            </option>
          </select>
          <select name="category" id="category" v-model="course.cat_props.slug">
            <option
              v-for="courseCategory in courseCategories"
              :key="courseCategory.id"
              :value="courseCategory.slug"
            >
              {{ courseCategory.slug }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <div class="form-row two-cols">
      <div class="input-wrapper">
        <label for="product-url">ProduktURL</label>
        <input
          type="text"
          name="product-url"
          id="product-url"
          v-model="course.product_url"
        />
      </div>
      <div class="input-wrapper">
        <label for="order-url">BestellURL</label>
        <input
          type="text"
          name="order-url"
          id="order-url"
          v-model="course.order_url"
        />
      </div>
    </div>
    <div class="form-row two-cols">
      <div class="input-wrapper">
        <label for="description">Beschreibung</label>
        <textarea
          name="description"
          id="description"
          v-model="course.description"
        />
      </div>
      <div>
        <div class="input-wrapper">
          <label for="course-img">Bildquelle</label>
          <input
            type="text"
            name="course-img"
            id="course-img"
            v-model="course.img_source"
          />
        </div>
        <div class="input-wrapper">
          <label for="submit"></label>
          <button>Kurs bearbeiten</button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "CourseUpdateView",
  data() {
    return {
      course: {},
      courseCategories: [],
      courseTypes: [],
    };
  },
  created() {
    this.getCourse();
    this.getCategories();
    this.getCourseTypes();
  },
  methods: {
    async getCourse() {
      const response = await fetch(
        "http://localhost:3000/courses/" + this.$route.params.id
      );
      this.course = await response.json();
    },
    async getCategories() {
      const response = await fetch("http://localhost:3000/categories");
      this.courseCategories = await response.json();
      console.log(this.courseCategories);
    },
    async getCourseTypes() {
      const response = await fetch("http://localhost:3000/course_types");
      this.courseTypes = await response.json();
      console.log(this.courseTypes);
    },
    updateCourse() {
      const updatedCourse = {
        title: this.course.title,
        course_type: this.course.type_props.label,
        category: this.course.cat_props.label,
        type_props: {
          slug: this.course.type_props.slug,
          label: this.course.type_props.label,
        },
        cat_props: {
          slug: this.course.cat_props.slug,
          label: this.course.cat_props.label,
        },
        vendor: this.course.vendor,
        product_url: this.course.product_url,
        order_url: this.course.order_url,
        description: this.course.description,
        img_source: this.course.img_source,
      };
      console.log(updatedCourse);

      fetch("http://localhost:3000/courses/" + this.$route.params.id, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(updatedCourse),
      })
        .then((res) => res.json())
        .then((updatedCourseFromApi) => {
          this.course = updatedCourseFromApi;
        });
    },
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  font-weight: 500;
  padding-bottom: 1rem;
}

.input-wrapper {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.25rem;
  margin-bottom: 0.5rem;
}

.input-wrapper > div {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
}

label {
  font-size: 1.1rem;
  font-weight: 500;
  color: #006;
}

input,
select,
textarea {
  font-size: 1.1rem;
  color: #333;
  padding: 0.25rem 0.15rem;
  border: 1px solid #ccc;
}

textarea {
  height: 7.5rem;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

button {
  font-size: 1.15rem;
  font-weight: 600;
  padding: 0.25rem 0.35rem;
  text-align: center;
  background-color: transparent;
  color: #f60;
  border: 2px solid #f60;
  transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;
}

button:hover {
  background-color: #f60;
  color: white;
}

@media screen and (min-width: 768px) and (max-width: 991px) {
  .input-wrapper {
    grid-template-columns: 20% 80%;
  }
}

@media screen and (min-width: 992px) {
  .form-row.two-cols {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    align-items: start;
  }
}

@media screen and (min-width: 1280px) {
  .input-wrapper {
    grid-template-columns: 20% 80%;
  }
}
</style>
