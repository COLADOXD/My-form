<script setup lang="ts">
import { reactive, defineProps, defineEmits } from 'vue';

const props = defineProps({
    active: {
        type: Boolean,
        required: true
    }
})

const select = reactive({
    next: props.active,
    onArcade: false,
    onAdvanced: false,
    onPro: false,
    onYear: false
})

const emit = defineEmits(['togglePlan'])

const onActivePlan = (plan: string) => {
    [select.onArcade, select.onAdvanced, select.onPro] = [false, false, false]
    emit('togglePlan', plan)
    if (plan === 'arcade') {
        select.onArcade = true
    } else if (plan === 'advanced') { select.onAdvanced = true } else { select.onPro = true }
}
</script>
<template>
    <div class="bg-white px-4 py-6 rounded-lg">
        <div class=" text-2xl font-bold text-cyan-700">Select your plan</div>
        <div class=" text-slate-300 text-md">You have the option of monthly or yearly billing.</div>
        <div @click="onActivePlan('arcade')" class="my-4 p-3 flex flex-row border-2 rounded-lg border-slate-300"
            :class="{ 'bg-blue-100 border-slate-500': select.onArcade }">
            <div class="rounded-full bg-orange-400 h-10 w-10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
            </div>
            <div class="ml-4">
                <div class="font-bold">Arcade</div>
                <div v-if="!select.onYear" class=" font-light text-sm">$9/mo</div>
                <div v-else class=" font-light text-sm">$108/year</div>
            </div>
        </div>
        <div @click="onActivePlan('advanced')" class="my-4 p-3 flex flex-row border-2 rounded-lg border-slate-300"
            :class="{ 'bg-blue-100 border-slate-500': select.onAdvanced }">
            <div class="rounded-full bg-red-300 h-10 w-10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
                </svg>

            </div>
            <div class="ml-4">
                <div class="font-bold">Advanced</div>
                <div v-if="!select.onYear" class=" font-light text-sm">$12/mo</div>
                <div v-else class=" font-light text-sm">$144/year</div>
            </div>
        </div>
        <div @click="onActivePlan('pro')" class="my-4 p-3 flex flex-row border-2 rounded-lg border-slate-300"
            :class="{ 'bg-blue-100 border-slate-500': select.onPro }">
            <div class="rounded-full bg-blue-500 h-10 w-10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64" />
                </svg>

            </div>
            <div class="ml-4">
                <div class="font-bold">Pro</div>
                <div v-if="!select.onYear" class=" font-light text-sm">$15/mo</div>
                <div v-else class=" font-light text-sm">$180/year</div>
            </div>
        </div>
        <div class="flex flex-row justify-center bg-slate-100 py-4">
            <label class="inline-block pl-[0.15rem] hover:cursor-pointer" for="flexSwitchCheckDefault">Monthly</label>
            <input v-model="select.onYear"
                class="mt-[0.3rem] mx-6 h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 dark:bg-neutral-600 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 dark:after:bg-neutral-400 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary dark:checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary dark:checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label class="inline-block pl-[0.15rem] hover:cursor-pointer" for="flexSwitchCheckDefault">Yearly</label>
        </div>
    </div>
</template>
<style></style>