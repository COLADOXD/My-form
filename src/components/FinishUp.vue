<script setup lang="ts">
import { objectToString } from "@vue/shared";
import { defineProps, PropType, computed } from "vue";

interface PlanAdd {
  plan: string;
  price: number;
}

const props = defineProps({
  planAdd: {
    type: Array as PropType<PlanAdd[]>,
    required: true,
  },
  planMain: {
    type: Object,
    required: true,
  },
});

const total = computed(() => {
  const plans = props.planAdd.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
  );
  console.log(plans + props.planMain.price);
  return plans + props.planMain.price;
});
</script>

<template>
  <div class="bg-white px-4 py-6 rounded-lg">
    <div class="text-2xl font-bold text-cyan-700">Finishing up</div>
    <div class="text-slate-300 text-md">
      Double-check everything looks OK. before confirming
    </div>
    <div class="p-4 bg-slate-100">
      <div class="flex justify-between">
        <div>
          <p class="font-bold">{{ props.planMain.plan }} (Monthly)</p>
          <p>Change</p>
        </div>
        <div class="flex items-center font-bold">
          ${{ props.planMain.price }}/mo
        </div>
      </div>
      <div class="h-px w-full bg-slate-200"></div>
      <div v-for="extraPlan in props.planAdd" class="flex justify-between">
        <div class="flex justify-between">
          <p class="my-4">{{ extraPlan.plan }}</p>
        </div>
        <div class="flex items-center">${{ extraPlan.price }}/mo</div>
      </div>
    </div>
    <div class="flex flex-row justify-between mt-8 mb-4">
      <div>Total(per month)</div>
      <div class="font-bold">+${{ total }}/mo</div>
    </div>
  </div>
</template>
