<script setup>
import { faker } from '@faker-js/faker'
const fullName = faker.name.fullName()

const selectCard = () => {
        console.log(""+fullName+ " selected")
    }
</script>

<template>
    <div class="card" @click="selectCard">
        <div class="card-pic">
        <img :src="faker.internet.avatar()" alt="" srcset="" />
        </div>
        <div class="card-details">
        <p class="card-details-name">{{fullName}}</p>
        <p class="card-details-occupation">{{ faker.name.jobTitle() }}, {{ faker.name.jobArea() }}</p>
        <p class="card-details-email">{{faker.internet.exampleEmail(fullName)}}</p>
        <p class="card-details-quote">"{{ faker.lorem.paragraph() }}"</p>
        </div>
    </div>
</template>

<style scoped lang="postcss">
    .card {
        @apply cursor-pointer overflow-hidden rounded-md bg-blue-50 p-6 shadow-md hover:scale-110 transition-transform duration-300 hover:shadow-gray-800 hover:shadow-xl;
        &-pic {
            img {
            @apply mx-auto rounded-2xl object-contain;
            }
        }
        &-details{
            @apply flex flex-col gap-2 pt-4 text-center;
            &-name {
                @apply text-3xl font-bold text-blue-800;
            }
            &-occupation {
                @apply  text-sm text-gray-600;
            }
            &-email {
                @apply -mt-2 text-sm text-gray-600;
            }
            &-quote {
                @apply italic text-slate-800;
            }
        }
    }
</style>