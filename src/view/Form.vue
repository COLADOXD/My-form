<script setup lang="ts">
import PersonalInfo from '../components/PersonalInfo.vue';
import SelectPlan from '../components/SelectPlan.vue';
import PickAdd from '../components/PickAdd.vue';
import FinishUp from '../components/FinishUp.vue';
import { reactive } from 'vue';

const state = reactive({
  viewPersonalInfo: true,
  viewSelectPlan: false,
  viewPickAdd: false,
  viewFinishUp: false
})

const dataInfo = reactive({
  name: '',
  email: '',
  phoneNumber: '',

})

const nextComponents = () => {
  if (state.viewPersonalInfo) {
    state.viewPersonalInfo = !state.viewPersonalInfo
    state.viewSelectPlan = !state.viewSelectPlan
  } else if (state.viewSelectPlan) {
    state.viewSelectPlan = !state.viewSelectPlan
    state.viewPickAdd = !state.viewPickAdd
  } else if (state.viewPickAdd) {
    state.viewPickAdd = !state.viewPickAdd
    state.viewFinishUp = !state.viewFinishUp
  }
}

const backComponents = () => {
  if (state.viewFinishUp) {
    state.viewFinishUp = !state.viewFinishUp
    state.viewPickAdd = !state.viewPickAdd
  } else if (state.viewSelectPlan) {
    state.viewSelectPlan = !state.viewSelectPlan
    state.viewPersonalInfo = !state.viewPersonalInfo
  } else if (state.viewPickAdd) {
    state.viewPickAdd = !state.viewPickAdd
    state.viewSelectPlan = !state.viewSelectPlan
  }
}

const changeName = (name: string) => {
  dataInfo.name = name
}
const changeEmail = (email: string) => {
  dataInfo.email = email
}
const changePhoneNumber = (number: string) => {
  dataInfo.phoneNumber = number
}

</script>
<template>
  <div class="h-screen">
    <div class="flex flex-row justify-center bg-red-300 h-[150px]">
      <div class=" h-[40px] w-[40px] my-6 mx-2 rounded-full border border-black flex items-center justify-center "
        :class="{ 'bg-slate-500': state.viewPersonalInfo }">1</div>
      <div class=" h-[40px] w-[40px] my-6 mx-2 rounded-full border border-black flex items-center justify-center "
        :class="{ 'bg-slate-500': state.viewSelectPlan }">2</div>
      <div class=" h-[40px] w-[40px] my-6 mx-2 rounded-full border border-black flex items-center justify-center "
        :class="{ 'bg-slate-500': state.viewPickAdd }">3</div>
      <div class=" h-[40px] w-[40px] my-6 mx-2 rounded-full border border-black flex items-center justify-center "
        :class="{ 'bg-slate-500': state.viewFinishUp }">4</div>
    </div>
    <div class="relative bottom-10 flex justify-center px-4">
      <PersonalInfo v-show="state.viewPersonalInfo" :name="dataInfo.name" :email="dataInfo.email"
        :phoneNumber="dataInfo.phoneNumber" @todo-name="changeName" @todo-email="changeEmail"
        @todo-phone-number="changePhoneNumber" />
      <SelectPlan v-show="state.viewSelectPlan" />
      <PickAdd v-show="state.viewPickAdd" />
      <FinishUp v-show="state.viewFinishUp" />
    </div>
    <div class="flex flex-row justify-between bg-white py-6 px-4">
      <button class=" text-gray-400" v-if="!state.viewPersonalInfo" @click="backComponents">Go
        back</button>
      <button class=" bg-blue-900 text-white p-3 rounded-md" v-if="!state.viewFinishUp" @click="nextComponents">Next
        Step</button>
      <button class="bg-blue-500 text-white p-3 rounded-md" v-else>Confirm</button>
    </div>
  </div>
</template>

<style></style>