<!--
 * @FilePath: \vue3_babylonjs_template\src\layout\ExampleHome.vue
 * @Author: abc-0886kAX-code
 * @Date: 2023-04-12 13:14:28
 * @LastEditors: abc-0886kAX-code
 * @LastEditTime: 2024-04-12 11:17:04
 * @Description:
-->
<script setup>
import { useUserStore } from "@/store/useUser";
const { proxy } = getCurrentInstance();
const user = useUserStore();

function handleUser(params) { }
const featurelist = {
    'userLogout': {
        label: '注销登录',
        func: userLogout
    }
}
function handleCommand(command) {
    featurelist[command].func(command);
}
function userLogout() {
    user.emptyUserInfo();
    proxy.$router.push({ name: "login" });
}
function jumpToPage(name) {
    proxy.$router.push({ name });
}
</script>

<template>
    <el-container class="home">
        <el-dropdown class="home-user" split-button type="primary" plain @command="handleCommand" @click="handleUser">
            功能菜单
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item v-for="(item, key) in featurelist" :key="key" :command="key">{{ item.label
                        }}</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
        <RouterView v-slot="{ Component }">
            <transition name="el-fade-in-linear">
                <component :is="Component" />
            </transition>
        </RouterView>
    </el-container>
</template>

<style scoped lang="scss">
.home {
    background-color: transparent;
    width: 100%;
    height: 100%;
    overflow: hidden;

    &-user {
        position: absolute;
        z-index: 99;
        left: 5px;
        top: 15px;
    }
}
</style>
