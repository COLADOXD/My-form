<script setup lang="ts">
import { defineProps, reactive } from 'vue';

const props = defineProps({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
})

const PersonalInfo = reactive({
    name: props.name,
    email: props.email,
    phoneNumber: props.phoneNumber
})



const emit = defineEmits(['todoName', 'todoEmail', 'todoPhoneNumber'])
const putName = () => {
    emit('todoName', PersonalInfo.name)
}
const putEmail = () => {
    emit('todoEmail', PersonalInfo.email)
}
const putPhoneNumber = () => {
    emit('todoPhoneNumber', PersonalInfo.phoneNumber)
}
</script>

<template>
    <div class="bg-white px-4 py-6 rounded-lg">
        <div class=" text-2xl font-bold text-cyan-700">Personal info</div>
        <div class=" text-slate-300 text-md">Please provide your name, email address, and phone number.</div>
        <div class="my-4">
            <div>Name</div>
            <input v-model="PersonalInfo.name" @blur="putName" type="text" class="w-full h-10 p-2 border-2"
                placeholder="e.g. Stephen King">
        </div>
        <div class="my-4">
            <div>Email Address</div>
            <input v-model="PersonalInfo.email" @blur="putEmail" type="email" class="w-full h-10 p-2 border-2"
                placeholder="e.g. StephenKing@lorem.com">
        </div>
        <div class="my-4">
            <div>Phone Number</div>
            <input v-model="PersonalInfo.phoneNumber" @blur="putPhoneNumber" type="number" class="w-full h-10 p-2 border-2"
                placeholder="e.g. +1 234 567 890">
        </div>
    </div>
</template>