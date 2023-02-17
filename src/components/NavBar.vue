<script setup>
import { ref } from 'vue'
import { useAuth } from '@/composables/useAuth'

const { isAuthenticated, logout, user } = useAuth()

const brand = ref("🏢 Company's Fake Directory 🏢" )
</script>

<template>
  <nav>
    <div class="wrapper">
      <RouterLink :to="{ name: 'Home' }" class="brand">
        <span class="brand-title">{{ brand }}</span>
      </RouterLink>
      <div class="menu">
        <p v-show="isAuthenticated" class="px-1.5 py-3 text-xl text-purple-300">
          Welcome Back,
          <strong>
            <i>{{ user.name }}!</i></strong
          >
        </p>
        <div v-if="isAuthenticated">
          <RouterLink :to="{ name: 'Settings' }" href="#" class="menu-item">Settings</RouterLink>
          <button class="menu-logout" @click="logout">Logout</button>
        </div>
        <div v-else>
          <RouterLink :to="{ name: 'Login' }" href="#" class="menu-login">Login</RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="postcss">
nav {
  @apply flex h-20 items-center justify-between bg-slate-800 font-medium text-blue-200;
  .wrapper {
    @apply container mx-auto flex w-full items-center justify-between;
    .brand {
      &-title {
        @apply text-2xl font-bold text-blue-200;
      }
    }
    .menu {
      @apply flex gap-5;
      & div {
        @apply py-2;
      }
      &-item {
        @apply rounded-md px-3 py-1.5 hover:bg-blue-300 hover:text-slate-800;
      }
      &-login {
        @apply rounded-md bg-green-400 px-3 py-1.5 text-slate-700 hover:bg-green-800 hover:text-slate-100;
      }
      &-logout {
        @apply mx-2 rounded-md bg-red-300 px-4 py-1.5 text-slate-900 hover:bg-red-800 hover:text-slate-100;
      }
    }
  }
}
</style>
