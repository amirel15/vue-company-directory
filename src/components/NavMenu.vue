<script setup>
import { ref } from 'vue'
const brand = ref("🏢 Company's Fake Directory")
</script>

<template>
  <nav>
    <div class="wrapper">
      <div class="brand">
        <span class="brand-title">{{ brand }}</span>
      </div>
      <div class="menu">
        <a href="#" class="menu-item">Departments</a>
        <a href="#" class="menu-item">Settings</a>
        <a href="#" class="menu-login">LogOut</a>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="postcss">
nav {
  @apply flex h-20 items-center justify-between bg-slate-800 text-slate-300;
  .wrapper {
    @apply container mx-auto flex w-full items-center justify-between;
    .brand{
      &-title{
        @apply text-2xl font-bold text-blue-200;
      }
    }
    .menu{
      @apply flex gap-5;
      &-item{
        @apply rounded-md px-3 py-1.5 hover:bg-blue-300 hover:text-slate-800;
      }
      &-login{
        @apply rounded-md bg-purple-400 text-slate-900 px-3 py-1.5 hover:bg-purple-900 hover:text-slate-100;
      }
    }
  }
}
</style>
