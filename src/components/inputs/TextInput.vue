<template>
  <div>
    <label
      v-show="label !== null"
      class="block text-sm font-medium mb-1" 
      :for="name"
    >
      {{ label }}
    </label>
    <input
      :id="id"
      :name="name"
      :class="{
        'bg-secondary-light py-4 px-4 border-secondary-darker border-2 outline-none focus:border-blue-400 duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed': true,
        'border-red-200' : errorMessage !== null
      }"
      :placeholder="placeholder"
      :type="type"
      :value="props.modelValue"
      :disabled="isDisabled"
      v-bind="$attrs"
      @input="updateValue($event.target.value)"
    >
    <small
      v-show="errorMessage"
      class="text-red-500 text-xs whitespace-pre-line"
    >
      {{ errorMessage }}
    </small>
  </div>
</template>

<script setup>
const props = defineProps({
  label: { type: String, required: false, default: null },
  name: { type: String, required: false, default: null },
  id: { type: String, required: false, default: null },
  placeholder: { type: String, required: false, default: null },
  type: { type: String, default: "text", required: false },
  modelValue: { type: String, required: true },
  isDisabled: { type: Boolean, default: false },
  errorMessage: { type: String, default: null },
});

const emit = defineEmits(["update:modelValue"]);

function updateValue(value) {
  emit("update:modelValue", value);
}
</script>

<style scoped></style>
