<script setup>
import { ref } from 'vue'
import { faker } from '@faker-js/faker'

import useApi from '@/composables/useApi'
const { getDepartment } = useApi()

const selectCard = () => {
  console.log(`${props.employee.name} selected`)
}

const props = defineProps({
  employee: {
    type: Object,
    required: true,
    default: () => {
      return {
        createdAt: '2022-01-01',
        departmentId: '123',
        email: 'jane.doe@example.com',
        employeeId: '123',
        name: 'Jane Doe',
        quote: 'Cool quote',
        title: 'Position',
        updatedAt: '2022-01-01',
      }
    },
  },
})

const departmentResponse = await getDepartment(props.employee.departmentId)
const department = ref(departmentResponse)
</script>

<template>
  <div class="card" @click="selectCard">
    <div class="card-pic">
      <img :src="faker.internet.avatar()" alt="" srcset="" />
    </div>
    <div class="card-details">
      <p class="card-details-name">{{ props.employee.name }}</p>
      <p class="card-details-job">
        {{ props.employee.title }}, {{ department.name }}
      </p>
      <p class="card-details-quote">"{{ props.employee.quote }}"</p>
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
      @apply pt-1.5 font-semibold italic text-slate-800;
    }
  }
}
</style>
