<template>
  <div class="home">
    <course-types
      :headline="headlineTextTypes"
      :courseTypesList="courseTypes"
    />
    <p>&nbsp;</p>
    <hr />
    <p>&nbsp;</p>
    <course-categories
      :headline="headlineTextCategories"
      :courseCategoriesList="courseCategories"
    />
    <!--
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    -->
  </div>
</template>

<script>
// @ is an alias to /src
import CourseTypes from "@/components/CourseTypes.vue";
import CourseCategories from "@/components/CourseCategories.vue";
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    CourseTypes,
    CourseCategories,
    //HelloWorld,
  },
  data() {
    return {
      headlineTextTypes: "Course Types",
      headlineTextCategories: "Course Categories",
      courseTypes: [],
      courseCategories: [],
    };
  },
  async created() {
    const resCourseTypes = await fetch("http://localhost:3000/course_types");
    this.courseTypes = await resCourseTypes.json();

    const resCourseCategories = await fetch("http://localhost:3000/categories");
    this.courseCategories = await resCourseCategories.json();
  },
};
</script>

<style scoped>
hr {
  color: #0000cc;
}
</style>
