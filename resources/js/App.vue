<template>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
</template>
<script setup lang="ts">
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
</script>
