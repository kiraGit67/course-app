<template>
  <div class="header-row">
    <img src="./assets/LearnTown-logo.png" alt="LearnTown Logo" />
    <h1>Finde <span>das relevante Wissen</span> mit <span>5</span> Klicks!</h1>
  </div>
  <nav>
    <router-link :to="{ name: 'home' }">Home</router-link>
    <router-link :to="{ name: 'about' }">About</router-link>
    <router-link :to="{ name: 'courses' }">Kurs-Übersicht</router-link>
    <router-link :to="{ name: 'add-course' }"
      >Neuen Kurs hinzufügen</router-link
    >
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #000000;
  padding: 30px;
}

.header-row {
  text-align: center;
}

h1 {
  color: #006;
  font-weight: 500;
}

h1 > span {
  color: #f60;
}

nav {
  padding: 30px 0;
  margin-bottom: 30px;
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 102, 0.35);
}

nav a {
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  color: #000099;
  margin-right: 0.25rem;
}

nav a::after {
  content: " | ";
  color: #000033;
  margin-left: 0.25rem;
}

nav a:last-child::after {
  content: "";
}

nav a.router-link-exact-active,
nav a:hover {
  color: #dd6600;
}

@media screen and (min-width: 992px) {
  .header-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
