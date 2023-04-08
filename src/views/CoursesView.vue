<template>
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
    };
  },
  async created() {
    const response = await fetch("http://localhost:3000/courses");
    this.courses = await response.json();
    console.log(this.courses);
  },
};
</script>
