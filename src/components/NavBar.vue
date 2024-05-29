<script setup lang="ts">
import { CNavbar, CNavLink } from '@coreui/vue'
</script>

<template>
  <CNavbar class="nav-container">
    <div class="navbar">
      <CNavLink href="/event">Event</CNavLink>
      <CNavLink href="/">Info</CNavLink>
      <CNavLink href="/join">Join</CNavLink>
    </div>
    <CNavLink href="/login" class="login-btn">Log In</CNavLink>
  </CNavbar>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: center;
  flex: 1;
  gap: 16px;
}

.nav-container {
  display: flex;
  margin-top: 0;
}

.nav-link {
  color: var(--color-text);
  text-transform: uppercase;
  font-weight: bold;
  height: 64px;
  display: flex;
  align-items: center;
}

.login-btn {
  justify-self: right;
  margin-right: 32px;
}
</style>
