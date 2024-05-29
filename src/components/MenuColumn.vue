<script setup lang="ts">
import { CIcon } from '@coreui/icons-vue'
import { cilMenu } from '@coreui/icons'
</script>

<template>
  <div class="menu">
    <span class="menu-label">Menu</span>
    <CIcon class="icon" :icon="cilMenu" size="xl" />
    <div class="logo">logo</div>
  </div>
</template>

<style scoped>
.menu {
  width: 128px;
  height: 100vh;
  border: 1px solid var(--color-text);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    writing-mode: sideways-lr;
    text-transform: uppercase;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 2px;
    margin-top: 98px;
    align-self: center;
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
