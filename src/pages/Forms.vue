<template>
  <q-page class="q-ma-md">
    <span class="text-h6">Forms</span>
    <q-separator spaced />

    <div class="row justify-center">
      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-xs col-xs-12 col-sm-12 col-md-6 q-pt-xl"
      >
        <q-input
          filled
          v-model="userForm.name"
          label="Correo Electronico"
          type="email"
          no-error-icon
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Este campo es obligatorio',
            isValidEmail,
          ]"
        />

        <q-input
          filled
          type="password"
          v-model="userForm.password"
          label="Contraseña"
          no-error-icon
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Este campo es obligatorio',
          ]"
        />

        <q-input
          filled
          type="password"
          v-model="userForm.password2"
          label="Repetir Contraseña"
          no-error-icon
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Este campo es obligatorio',
            isSamePassword,
          ]"
        />

        <q-checkbox
          v-model="userForm.conditions"
          label="Acepto las condiciones y terminos de uso"
          :style="
            userForm.errorInConditions && !userForm.conditions && 'color:red'
          "
        />

        <div class="row.justify-end">
          <q-btn
            label="Reset"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
          <q-btn unelevated label="Submit" type="submit" color="primary" />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { Notify, useQuasar } from "quasar";

export default defineComponent({
  name: "Forms",

  setup() {
    const $q = useQuasar();

    const userForm = ref({
      email: "",
      password: "",
      password2: "",
      conditions: false,
      errorInConditions: false,
    });

    return {
      userForm,
      onSubmit() {
        userForm.value.errorInConditions = false;

        if (!userForm.value.conditions) {
          $q.notify({
            message: "Debe de aceptar las condiciones",
            icon: "las la-exclamation-circle",
          });
          userForm.value.errorInConditions = true;
          return;
        }
        console.log(userForm.value);
      },
      onReset() {
        userForm.value = {
          email: "",
          password: "",
          password2: "",
          conditions: false,
          errorInConditions: false,
        };
      },
      isValidEmail(val) {
        const emailPattern =
          /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
        return emailPattern.test(val) || "El correo no parece ser válido";
      },
      isSamePassword(val) {
        return (
          val === userForm.value.password || "Las contraseñas no son iguales"
        );
      },
    };
  },
});
</script>
