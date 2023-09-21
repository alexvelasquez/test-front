<template>
  <div class="bg-white min-w-[400px] min-h-[200px] rounded-lg border-2 p-4">
    <div class="grid grid-cols-1 divide-y">
      <ValidationObserver>
        <div class="row">
          <div class="input-field col s12 mb-4">
            <ValidationProvider rules="required">
              <div>
                <input v-model="auth.email" type="text" placeholder="email" />
              </div>
            </ValidationProvider>
            <ValidationProvider rules="required">
              <div>
                <input
                  v-model="auth.password"
                  type="text"
                  placeholder="contraseña"
                />
              </div>
            </ValidationProvider>
          </div>
        </div>
      </ValidationObserver>
      <div>
        <div><input type="checkbox" /> Recordarme</div>
        <button @click="login()">INICIAR SESION</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import { useHttp } from "../composables/useHttp";
const auth = reactive({});

const login = () => {
  try {
    const { post } = useHttp();
    const { data: response } = post("/login", auth);
  } catch (error) {
    console.log(error);
  }
};
</script>
