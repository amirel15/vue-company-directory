<script setup>
import { faker } from '@faker-js/faker'
const fullName = faker.name.fullName()

const selectCard = () => {
  console.log('' + fullName + ' selected')
}
</script>

<template>
  <div class="card" @click="selectCard">
    <div class="card-pic">
      <img :src="faker.internet.avatar()" alt="" srcset="" />
    </div>
    <div class="card-details">
      <p class="card-details-name">{{ fullName }}</p>
      <p class="card-details-occupation">{{ faker.name.jobTitle() }}, {{ faker.name.jobArea() }}</p>
      <p class="card-details-email">{{ faker.internet.exampleEmail(fullName) }}</p>
      <p class="card-details-quote">"{{ faker.lorem.paragraph() }}"</p>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.card {
  @apply cursor-pointer overflow-hidden rounded-md bg-sky-100 p-6 shadow-md transition-transform duration-300 hover:scale-110 hover:shadow-xl hover:shadow-gray-800;
  &-pic {
    img {
      @apply mx-auto rounded-2xl object-contain;
    }
  }
  &-details {
    @apply flex flex-col gap-2 pt-4 text-center;
    &-name {
      @apply text-3xl font-bold text-blue-900;
    }
    &-occupation {
      @apply text-sm text-gray-600;
    }
    &-email {
      @apply -mt-2 text-sm text-gray-600;
    }
    &-quote {
      @apply italic font-semibold pt-1.5 text-slate-800;
    }
  }
}
</style>
