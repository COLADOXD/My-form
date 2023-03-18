<script setup lang="ts">
import PersonalInfo from "../components/PersonalInfo.vue";
import SelectPlan from "../components/SelectPlan.vue";
import PickAdd from "../components/PickAdd.vue";
import FinishUp from "../components/FinishUp.vue";
import { reactive, ref } from "vue";

const viewBox = reactive({
  viewPersonalInfo: false,
  viewSelectPlan: false,
  viewPickAdd: false,
  viewFinishUp: true,
});

const dataInfo = reactive({
  name: "",
  email: "",
  phoneNumber: "",
  planMain: "",
  planAdd: [{ plan: "Online service", price: 20 }] as {
    plan: string;
    price: number;
  }[],
});

const active = ref(false);

const nextComponents = () => {
  if (viewBox.viewPersonalInfo) {
    viewBox.viewPersonalInfo = !viewBox.viewPersonalInfo;
    viewBox.viewSelectPlan = !viewBox.viewSelectPlan;
    if (dataInfo.planMain.length <= 0) {
      active.value = false;
    }
  } else if (viewBox.viewSelectPlan) {
    viewBox.viewSelectPlan = !viewBox.viewSelectPlan;
    viewBox.viewPickAdd = !viewBox.viewPickAdd;
  } else if (viewBox.viewPickAdd) {
    viewBox.viewPickAdd = !viewBox.viewPickAdd;
    viewBox.viewFinishUp = !viewBox.viewFinishUp;
  }
};

const backComponents = () => {
  if (viewBox.viewFinishUp) {
    viewBox.viewFinishUp = !viewBox.viewFinishUp;
    viewBox.viewPickAdd = !viewBox.viewPickAdd;
  } else if (viewBox.viewSelectPlan) {
    viewBox.viewSelectPlan = !viewBox.viewSelectPlan;
    viewBox.viewPersonalInfo = !viewBox.viewPersonalInfo;
  } else if (viewBox.viewPickAdd) {
    viewBox.viewPickAdd = !viewBox.viewPickAdd;
    viewBox.viewSelectPlan = !viewBox.viewSelectPlan;
  }
};

const haddleName = (name: string) => {
  dataInfo.name = name;
  onActive();
};
const haddleEmail = (email: string) => {
  dataInfo.email = email;
  onActive();
};
const haddlePhoneNumber = (number: string) => {
  dataInfo.phoneNumber = number;
  onActive();
};

const onActive = () => {
  if (
    dataInfo.name.length > 0 &&
    dataInfo.email.length > 0 &&
    parseInt(dataInfo.phoneNumber) > 0
  ) {
    active.value = true;
  }
};

const haddleplan = (plan: string) => {
  active.value = true;
  dataInfo.planMain = plan;
};

const haddleAddPlan = (plan: string, price: number) => {
  const findPlan = dataInfo.planAdd.some((fPlan) => fPlan.plan === plan);
  if (!findPlan) {
    dataInfo.planAdd.push({ plan, price });
  } else if (findPlan) {
    dataInfo.planAdd = dataInfo.planAdd.filter(
      (deletedPlan) => deletedPlan.plan !== plan
    );
    console.log(dataInfo.planAdd);
  }
};
</script>
<template>
  <div class="flex flex-col h-screen">
    <div class="flex flex-row justify-center bg-red-300 h-[150px]">
      <div
        class="h-[40px] w-[40px] my-6 mx-2 rounded-full border border-black flex items-center justify-center"
        :class="{ 'bg-slate-500': viewBox.viewPersonalInfo }"
      >
        1
      </div>
      <div
        class="h-[40px] w-[40px] my-6 mx-2 rounded-full border border-black flex items-center justify-center"
        :class="{ 'bg-slate-500': viewBox.viewSelectPlan }"
      >
        2
      </div>
      <div
        class="h-[40px] w-[40px] my-6 mx-2 rounded-full border border-black flex items-center justify-center"
        :class="{ 'bg-slate-500': viewBox.viewPickAdd }"
      >
        3
      </div>
      <div
        class="h-[40px] w-[40px] my-6 mx-2 rounded-full border border-black flex items-center justify-center"
        :class="{ 'bg-slate-500': viewBox.viewFinishUp }"
      >
        4
      </div>
    </div>
    <div class="relative flex flex-grow bottom-10 justify-center px-4">
      <PersonalInfo
        v-show="viewBox.viewPersonalInfo"
        :name="dataInfo.name"
        :email="dataInfo.email"
        :phoneNumber="dataInfo.phoneNumber"
        @todo-name="haddleName"
        @todo-email="haddleEmail"
        @todo-phone-number="haddlePhoneNumber"
      />
      <SelectPlan
        :active="active"
        v-show="viewBox.viewSelectPlan"
        @toggle-plan="haddleplan"
      />
      <PickAdd
        v-show="viewBox.viewPickAdd"
        :planAdd="dataInfo.planAdd"
        @todo-plan="haddleAddPlan"
      />
      <FinishUp v-show="viewBox.viewFinishUp" />
    </div>
    <div class="flex flex-row justify-between bg-white py-6 px-4">
      <button
        class="text-gray-400"
        v-if="!viewBox.viewPersonalInfo"
        @click="backComponents"
      >
        Go back
      </button>
      <button
        :disabled="!active"
        class="bg-blue-900 text-white p-3 rounded-md disabled:bg-slate-300"
        v-if="!viewBox.viewFinishUp"
        @click="nextComponents"
      >
        Next Step
      </button>
      <button class="bg-blue-500 text-white p-3 rounded-md" v-else>
        Confirm
      </button>
    </div>
  </div>
</template>

<style></style>
