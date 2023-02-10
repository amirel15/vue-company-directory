<script setup>
import { ref } from 'vue'
const pages = ref(10)
const activePage = ref(4)

const prevPage = () => {
    if (activePage.value > 1) {
        activePage.value--
    }
}
const nextPage = () => {
    if (activePage.value < pages.value) {
        activePage.value++
    }
}
</script>

<template>
    <div class="pagination">
        <button class="action" :disable="activePage === 1" @click="prevPage">Prev</button>
        <button class="page" v-for="page in pages" :class="page === activePage ? 'active' : ''" @click="activePage = page"> 
            {{ page }}
        </button>
        <button class="action" :disable="activePage === pages" @click="nextPage">Next</button>
    </div>
</template>

<style scoped lang="postcss">
    .pagination{
        @apply flex justify-center gap-5;
        .action{
        @apply rounded-md bg-blue-50 p-2 font-medium text-slate-800 shadow-md hover:bg-blue-300 disabled:text-slate-400 hover:disabled:bg-slate-100;
        }
        .page{
            @apply rounded-md bg-blue-50 p-2 font-medium text-slate-800 shadow-md hover:bg-blue-100;
            &.active{
                @apply bg-sky-900 text-slate-100 hover:bg-blue-600;
            }
        }
    }
</style>