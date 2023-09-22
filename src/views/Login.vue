<template>
  <div class="flex flex-col w-full justify-center items-center">
    <div
      v-if="errorMessage"
      class="max-w-md w-full p-4 bg-red-400 rounded-md border-l-4 border-red-600"
    >
      <p class="text-white text-sm">{{ errorMessage }}</p>
    </div>
    <div class="max-w-md w-full p-6 bg-white rounded-lg shadow-lg mt-2">
      <div>
        <h1 class="text-2xl font-semibold text-center text-gray-500 mt-8 mb-6">
          Login
        </h1>
        <p></p>

        <form @submit.prevent="auth">
          <div class="mb-6">
            <label for="email" class="block mb-2 text-sm text-gray-600"
              >Email</label
            >
            <input
              v-bind="username"
              type="text"
              id="email"
              name="email"
              class="text-sm w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-500"
            />
            <div class="text-red-500 text-xs">{{ errors.username }}</div>
          </div>
          <div class="mb-6">
            <label for="password" class="block mb-2 text-sm text-gray-600"
              >Password</label
            >
            <div
              x-data="{ show: false }"
              class="relative flex items-center mt-2"
            >
              <input
                v-bind="password"
                :type="showPassword ? 'text' : 'password'"
                id="current-password"
                name="current-password"
                class="text-sm w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-500"
              />
              <button
                type="button"
                class="absolute right-2 bg-transparent flex items-center justify-center hover:text-blue-600"
                @click="showPassword = !showPassword"
              >
                <v-icon v-if="!showPassword" name="fa-eye" />
                <v-icon v-else name="fa-eye-slash" />
              </button>
            </div>

            <div class="text-red-500 text-xs">{{ errors.password }}</div>
          </div>
          <div>
            <input
              id="remember"
              value="true"
              type="checkbox"
              class="bg-white text-purple mr-2 mt-[-2px]"
            />
            <label class="text-sm" for="remember">Remember</label>
          </div>
          <button
            type="submit"
            :disabled=" !meta.valid"
            class="w-full bg-gradient-to-r bg-cyan-600 text-white py-2 rounded-lg mx-auto block mt-4 mb-6"
          >
            <div class="flex justify-center gap-2">
              <p>loggin in</p>
            </div>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref, toRaw } from "vue";
import { useAuth } from "../composables/useAuth";
import { useRouter } from "vue-router";
const router = useRouter();
const { auth, errors, meta, errorMessage, defineInputBinds} = useAuth();

const showPassword = ref(false);
const username = defineInputBinds("username");
const password = defineInputBinds("password");

</script>
<style>
button:disabled,
button[disabled] {
  background-color: #cccccc;
  color: #666666;
}
</style>
