<!--
 * @FilePath: \vue3_babylonjs_template\src\pages\Debug\form\form-date-picker\index.vue
 * @Author: abc-0886kAX-code
 * @Date: 2023-02-03 16:55:53
 * @LastEditors: abc-0886kAX-code
 * @LastEditTime: 2023-02-03 17:25:46
 * @Description:
-->
<script setup>
import { useFormDatePicker } from './useFormDatePicker';
const props = defineProps({
    sign: {
        type: String,
        required: true
    }
})
const { schema, setupValue } = useFormDatePicker(props.sign);
const datePickerValue = ref(schema.value.content);
function onChange(e) {
    setupValue(e);
}

</script>


<template>
    <el-date-picker class="form-date-picker" v-bind="schema" v-model="datePickerValue" @change="onChange">
    </el-date-picker>
</template>

<style scoped lang='scss'>
</style>
