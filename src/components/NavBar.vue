<script setup>
import { ref } from 'vue'
import { useAuth } from '@/composables/useAuth'

const {isAuthenticated} = useAuth()
const brand = ref("🏢 Company's Fake Directory 🏢")
</script>

<template>
  <nav>
    <div class="wrapper">
      <RouterLink  :to="{name:'Home'}" class="brand">
        <span class="brand-title">{{ brand }}</span>
      </RouterLink>
      <div class="menu">
        <RouterLink :to="{name: 'Home'}" href="#" class="menu-item">Departments</RouterLink>
        <div v-if="auth.isAuthenticated">
          <RouterLink :to="{name: 'Home'}" href="#" class="menu-item">Settings</RouterLink>
          <RouterLink :to="{name: 'Home'}" href="#" class="menu-logout">Logout</RouterLink>  
        </div>
        <div v-else>
          <RouterLink :to="{name: 'Home'}" href="#" class="menu-login">Login</RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="postcss">
nav {
  @apply flex h-20 items-center justify-between bg-slate-800 text-blue-200 font-medium;
  .wrapper {
    @apply container mx-auto flex w-full items-center justify-between;
    .brand{
      &-title{
        @apply text-2xl font-bold text-blue-200;
      }
    }
    .menu{
      @apply flex gap-5;
      div {
        @apply py-2;
      }
      &-item{
        @apply rounded-md px-3 py-1.5 hover:bg-blue-300 hover:text-slate-800;
      }
      &-logout{
        @apply rounded-md bg-green-300 text-slate-900 px-3 py-1.5 hover:bg-green-800 hover:text-slate-100;
      }
      &-logout{
        @apply rounded-md bg-red-300 text-slate-900 px-4 py-1.5 hover:bg-red-800 hover:text-slate-100;
      }
    }
  }
}
</style>
