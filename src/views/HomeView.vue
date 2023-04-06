<template>
  <div class="home">
    <course-types :headline="headlineText" :courseTypesList="courseTypes" />
    <!--
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    -->
  </div>
</template>

<script>
// @ is an alias to /src
import CourseTypes from "@/components/CourseTypes.vue";
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    CourseTypes,
    //HelloWorld,
  },
  data() {
    return {
      headlineText: "Course Types",
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
