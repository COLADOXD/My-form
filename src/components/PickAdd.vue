<template>
    <div class="bg-white px-4 py-6 rounded-lg">
        <div class=" text-2xl font-bold text-cyan-700">Pick add-ons</div>
        <div class=" text-slate-300 text-md">Add-ons help enhance your gaming experience.</div>
        <label for="service"
            class="my-4 p-3 flex justify-between flex-row border-2 rounded-lg border-slate-300 items-center">
            <div class="flex flex-row items-center"><input id="service" type="checkbox" value=""
                    class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <div class="ml-4">
                    <div class="font-bold">Online service</div>
                    <div class=" font-light text-sm">Access to multiplayer games</div>
                </div>
            </div>
            <div class="flex justify-end items-end">+$1/mo</div>
        </label>
        <label for="storage"
            class="my-4 p-3 flex justify-between flex-row border-2 rounded-lg border-slate-300 items-center">
            <div class="flex flex-row items-center"><input id="storage" type="checkbox" value=""
                    class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <div class="ml-4">
                    <div class="font-bold">Larguer storage</div>
                    <div class=" font-light text-sm">Extra 1TB cloud save</div>
                </div>
            </div>
            <div class="flex justify-end items-end">+$2/mo</div>
        </label>
        <label for="profile"
            class="my-4 p-3 flex justify-between flex-row border-2 rounded-lg border-slate-300 items-center">
            <div class="flex flex-row items-center"><input id="profile" type="checkbox" value=""
                    class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <div class="ml-4">
                    <div class="font-bold">Customizable profile</div>
                    <div class=" font-light text-sm">Custom there are your profile</div>
                </div>
            </div>
            <div class="flex justify-end items-end">+$2/mo</div>
        </label>
    </div>
</template>