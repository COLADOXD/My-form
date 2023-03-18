<script setup lang="ts">
import {
  reactive,
  defineEmits,
  defineProps,
  PropType,
  onMounted,
  computed,
} from "vue";

interface PlanAdd {
  plan: string;
  price: number;
}

const props = defineProps({
  planAdd: {
    type: Array as PropType<PlanAdd[]>,
    required: true,
  },
});

const emit = defineEmits(["todoPlan"]);

const addPlan = (plan: string, price: number) => {
  emit("todoPlan", plan, price);
};

const activeClass = (text) => {
  const plan = props.planAdd.find((plan) => plan.plan === text);
  if (plan?.plan) {
    return true;
  } else {
    return false;
  }
};

// const isOnlineServices = computed(() => {
//   return props.planAdd.find((plan) => plan.plan === 'Online service');
// });

// onMounted(() => {
//   activeClass;
// });
</script>
<template>
  <div class="bg-white px-4 py-6 rounded-lg">
    {{ props.planAdd }}
    <div class="text-2xl font-bold text-cyan-700">Pick add-ons</div>
    <div class="text-slate-300 text-md">
      Add-ons help enhance your gaming experience.
    </div>
    <label
      class="my-4 p-3 flex justify-between flex-row border-2 rounded-lg border-slate-300 items-center"
      :class="{ 'bg-blue-100 border-slate-500': activeClass('Online service') }"
    >
      <div class="flex flex-row items-center">
        <input
          :checked="activeClass('Online service')"
          @click="addPlan('Online service', 1)"
          id="service"
          type="checkbox"
          class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <div class="ml-4">
          <div class="font-bold">Online service</div>
          <div class="font-light text-sm">Access to multiplayer games</div>
        </div>
      </div>
      <div class="flex justify-end items-end">+$1/mo</div>
    </label>
    <label
      for="storage"
      class="my-4 p-3 flex justify-between flex-row border-2 rounded-lg border-slate-300 items-center"
      :class="{
        'bg-blue-100 border-slate-500': activeClass('Larguer storage'),
      }"
    >
      <div class="flex flex-row items-center">
        <input
          :checked="activeClass('Larguer storage')"
          @click="addPlan('Larguer storage', 2)"
          id="storage"
          type="checkbox"
          value=""
          class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <div class="ml-4">
          <div class="font-bold">Larguer storage</div>
          <div class="font-light text-sm">Extra 1TB cloud save</div>
        </div>
      </div>
      <div class="flex justify-end items-end">+$2/mo</div>
    </label>
    <label
      for="profile"
      class="my-4 p-3 flex justify-between flex-row border-2 rounded-lg border-slate-300 items-center"
      :class="{
        'bg-blue-100 border-slate-500': activeClass('Customizable profile'),
      }"
    >
      <div class="flex flex-row items-center">
        <input
          @click="addPlan('Customizable profile', 2)"
          id="profile"
          type="checkbox"
          :checked="activeClass('Customizable profile')"
          class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <div class="ml-4">
          <div class="font-bold">Customizable profile</div>
          <div class="font-light text-sm">Custom there are your profile</div>
        </div>
      </div>
      <div class="flex justify-end items-end">+$2/mo</div>
    </label>
    <div>{{ props.planAdd }}</div>
  </div>
</template>
