<template>
  <h2>Neuen Kurs hinzufügen</h2>
  <p class="error-message">{{ errorMessage }}</p>
  <p class="success-message">{{ successMessage }}</p>
  <form @submit.prevent="addNewCourse()">
    <div class="form-row two-cols">
      <div class="input-wrapper">
        <label for="title">Titel</label>
        <input type="text" name="title" id="title" v-model="courseTitle" />
      </div>
      <div class="input-wrapper">
        <label for="vendor">Anbieter</label>
        <input type="text" name="vendor" id="vendor" v-model="courseVendor" />
      </div>
    </div>
    <div class="form-row two-cols">
      <div class="input-wrapper">
        <label for="course-type">Kurs-Typ</label>
        <div>
          <select
            name="course-type-label"
            id="course-type-label"
            v-model="courseTypeLabel"
          >
            <option value=""></option>
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
            v-model="courseTypeSlug"
          >
            <option value=""></option>
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
            v-model="courseCategoryLabel"
          >
            <option value=""></option>
            <option
              v-for="courseCategory in courseCategories"
              :key="courseCategory.id"
              :value="courseCategory.title"
            >
              {{ courseCategory.title }}
            </option>
          </select>
          <select
            name="category-slug"
            id="category-slug"
            v-model="courseCategorySlug"
          >
            <option value=""></option>
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
          v-model="productURL"
        />
      </div>
      <div class="input-wrapper">
        <label for="order-url">BestellURL</label>
        <input type="text" name="order-url" id="order-url" v-model="orderURL" />
      </div>
    </div>
    <div class="form-row two-cols">
      <div class="input-wrapper">
        <label for="description">Beschreibung</label>
        <textarea
          name="description"
          id="description"
          v-model="courseDescription"
        />
      </div>
      <div>
        <div class="input-wrapper">
          <label for="course-img">Bildquelle</label>
          <input
            type="text"
            name="course-img"
            id="course-img"
            v-model="courseImage"
          />
        </div>
        <div class="input-wrapper">
          <label for="submit"></label>
          <button>Kurs speichern</button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      headline: "Neuen Kurs anlegen",
      courses: [],
      courseCategories: [],
      courseTypes: [],
      courseID: 0,
      courseTitle: "",
      courseVendor: "",
      courseTypeLabel: "",
      courseTypeSlug: "",
      courseCategoryLabel: "",
      courseCategorySlug: "",
      productURL: "",
      orderURL: "",
      courseDescription: "",
      courseImage: "",
      successMessage: "",
      errorMessage: "",
      errors: {
        title: "Es muss ein Titel angegeben werden.",
        vendor: "Es muss ein Anbieter angegeben werden.",
        product: "Es muss ein Produkt-Link angegeben werden.",
        order: "Es muss ein Bestell-Link angegeben werden.",
      },
    };
  },
  async created() {
    this.getCourses();
    this.getCategories();
    this.getCourseTypes();
  },
  methods: {
    async getCourses() {
      const response = await fetch("http://localhost:3000/courses");
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
    addNewCourse() {
      this.courseID = this.courses.length + 1;
      const newCourse = {
        id: this.courseID,
        title: this.courseTitle,
        course_type: this.courseTypeLabel,
        category: this.courseCategoryLabel,
        type_props: {
          slug: this.courseTypeSlug,
          label: this.courseTypeLabel,
        },
        cat_props: {
          slug: this.courseCategorySlug,
          label: this.courseCategoryLabel,
        },
        vendor: this.courseVendor,
        product_url: this.productURL,
        order_url: this.orderURL,
        description: this.courseDescription,
        img_source: this.courseImage,
      };
      console.log(newCourse);
      console.log(this.courses.length);

      if (
        this.courseTitle !== "" &&
        this.courseVendor !== "" &&
        this.productURL !== "" &&
        this.orderURL !== ""
      ) {
        fetch("http://localhost:3000/courses", {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(newCourse),
        })
          .then((res) => res.json())
          .then((newCourseFromApi) => {
            this.courses.push(newCourseFromApi);
          });
        this.successMessage =
          "Der Kurs Nr. " + this.courseID + " wurde erfolgreich erfasst.";
        this.errorMessage = "";
      } else {
        this.errorMessage =
          "Es wurden nicht alle erforderlichen Felder ausgefüllt.";

        if (this.courseTitle === "") {
          this.errorMessage += this.errors.title;
        }

        if (this.courseVendor === "") {
          this.errorMessage += this.errors.vendor;
        }

        if (this.productURL === "") {
          this.errorMessage += this.errors.product;
        }

        if (this.orderURL === "") {
          this.errorMessage += this.errors.order;
        }

        this.successMessage = "";
        return;
      }
    },
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  font-weight: 500;
  padding-bottom: 1rem;
  color: #003;
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

.error-message,
.success-message {
  font-size: 1.1rem;
  font-weight: 600;
  text-align: center;
}

.error-message {
  color: #ff3300;
}

.success-message {
  color: #669900;
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
