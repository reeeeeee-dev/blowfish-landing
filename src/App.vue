<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { CIcon } from '@coreui/icons-vue'
import { cilMenu } from '@coreui/icons'
import NavBar from './components/NavBar.vue'
import MenuColumn from './components/MenuColumn.vue'
</script>

<template>
  <MenuColumn />
  <main>
    <NavBar />
    <RouterView />
  </main>
</template>

<style scoped>
header.menu {
  /* max-height: 100vh; */
  width: 64px;
  height: 100vh;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @font-face {
    font-family: Avenir;
    src: url('@assets/avenir_roman_12.woff') format('woff');
  }

  span {
    writing-mode: sideways-lr;
    text-transform: uppercase;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 2px;
    margin-top: 98px;
    align-self: center;
    font-family: 'Avenir';
  }

  .logo {
  }

  .icon {
    justify-self: center;
    top: 50%;
    height: 24px;
    left: 12px;
  }
}

header.nav {
  display: flex;
  width: 100%;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
