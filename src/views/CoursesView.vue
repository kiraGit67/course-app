<template>
  <form>
    <div class="search-wrapper">
      <div class="form-wrapper">
        <label for="search">Suchen nach...</label>
        <input
          type="text"
          name="search"
          id="search"
          v-model="searchTerm"
          @input="getSearchedCourses()"
        />
      </div>
      <div class="form-wrapper">
        <label for="vendor-search">Anbieter</label>
        <input
          type="text"
          name="vendor-search"
          id="vendor-search"
          v-model="vendorSearch"
          @input="getSearchedCourses('vendor')"
        />
      </div>
    </div>
    <div class="radio-container types-container">
      <div
        class="radio-wrapper"
        v-for="{ id, title, slug, icon } of courseTypes"
        :key="id"
      >
        <input
          type="radio"
          name="course-type"
          :value="slug"
          :id="slug"
          v-model="typeSearch"
          @change="getSearchedCourses('type')"
        />

        <label :for="slug"
          ><i :class="icon"></i><br />
          {{ title }}</label
        >
      </div>
    </div>
    <div class="radio-container cat-container">
      <div
        class="radio-wrapper"
        v-for="{ id, title, slug, icon } of courseCategories"
        :key="id"
      >
        <input
          type="radio"
          name="category"
          :value="slug"
          :id="slug"
          v-model="catSearch"
          @change="getSearchedCourses('category')"
        />
        <label :for="slug"
          ><i :class="icon"></i><br />
          {{ title }}</label
        >
      </div>
    </div>
  </form>
  <course-items :headline="headline" :courseList="courses" />
</template>

<script>
import CourseItems from "@/components/CourseItems.vue";

export default {
  name: "CoursesView",
  components: {
    CourseItems,
  },
  data() {
    return {
      headline: "Übersicht über alle Kurse",
      courses: [],
      courseCategories: [],
      courseTypes: [],
      filterState: "",
      searchTerm: "",
      vendorSearch: "",
      typeSearch: "",
      catSearch: "",
    };
  },
  async created() {
    this.getCourses();
    this.getCategories();
    this.getCourseTypes();
    /*
    const response = await fetch("http://localhost:3000/courses?course_type=Tools");
    this.courses = await response.json();
    console.log(this.courses);
    */
  },
  methods: {
    async getCourses() {
      const response = await fetch(
        "http://localhost:3000/courses" + this.filterState
      );
      this.courses = await response.json();
      console.log(this.courses);
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
    getSearchedCourses(searchParam) {
      if (searchParam === "vendor") {
        this.filterState = "?vendor_like=" + this.vendorSearch;
      } else if (searchParam === "type") {
        this.filterState = "?type_props.slug=" + this.typeSearch;
      } else if (searchParam === "category") {
        this.filterState = "?cat_props.slug=" + this.catSearch;
      } else {
        this.filterState = "?q=" + this.searchTerm;
      }

      this.getCourses();
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
  gap: 1rem;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 51, 0.15);
}

.radio-container.types-container {
  grid-template-columns: repeat(3, 1fr);
}

.radio-container.cat-container {
  grid-template-columns: repeat(2, 1fr);
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

.form-wrapper {
  display: grid;
  grid-template-columns: 1fr;
  margin-bottom: 0.75rem;
}

.form-wrapper > label {
  text-align: left;
  font-size: 1.25rem;
}

.form-wrapper > input[type="text"] {
  padding: 0.25rem 0.35rem;
  border: 1px solid lightgray;
  border-radius: 0;
  font-size: 1.35rem;
}

.form-wrapper > input[type="text"]:focus-within {
  outline: 2px solid rgba(255, 102, 0, 0.65);
}

@media screen and (min-width: 768px) {
  .form-wrapper {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 0.5rem;
    margin-bottom: 0.75rem;
  }

  .radio-container.types-container,
  .radio-container.cat-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }
}

@media screen and (min-width: 1024px) {
  .radio-container.types-container {
    grid-template-columns: repeat(6, 1fr);
  }

  .search-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}
</style>
