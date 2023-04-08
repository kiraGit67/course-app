<template>
  <nav>
    <router-link :to="{ name: 'home' }">Home</router-link>
    <router-link :to="{ name: 'about' }">About</router-link>
    <router-link :to="{ name: 'courses' }">Kurs-Übersicht</router-link>
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

nav {
  padding: 30px 0;
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
</style>
