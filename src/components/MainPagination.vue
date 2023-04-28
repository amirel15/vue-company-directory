<script setup>
import useApi from '@/composables/useApi'

const { activePage, pages, getEmployees } = useApi()

const prevPage = async () => {
  if (activePage.value > 1) {
    activePage.value--
    await getEmployees()
  }
}
const nextPage = async () => {
  if (activePage.value < pages.value) {
    activePage.value++
    await getEmployees()
  }
}
const jumpPage = async (page) => {
    activePage.value = page
    await getEmployees()
}
</script>

<template>
  <div class="pagination">
    <button class="action" :disabled="activePage === 1" @click="prevPage">
      Prev
    </button>
    <button
      v-for="page in pages"
      class="page"
      :class="page === activePage ? 'active' : ''"
      @click="jumpPage(page)"
    >
      {{ page }}
    </button>
    <button class=" :disabled="activePage === pages" @click="nextPage">
      Next
    </button>
  </div>
</template>

<style scoped lang="postcss">
.pagination {
  @apply flex justify-center gap-5;
  .action {
    @apply rounded-md bg-blue-50 p-2 font-medium text-slate-800 shadow-md hover:bg-blue-300 disabled:text-slate-400 hover:disabled:bg-red-800;
  }
  .page {
    @apply rounded-md bg-blue-50 p-2 font-medium text-slate-800 shadow-md hover:bg-blue-200;
    &.active {
      @apply bg-sky-900 text-slate-100 hover:bg-blue-400 hover:font-bold hover:text-slate-800;
    }
  }
}
</style>
