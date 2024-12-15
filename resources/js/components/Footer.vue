<script setup>

</script>

<template>
    <footer class="mt-3 pt-3 pb-3" style="background-color: #f1f3f5;">
        <div class="container">
            <div class="row rows-cols-2">
                <div class="col">
                    <h3>Контакты</h3>
                    <div class="">
                        <span>428000, г. Чебоксары, ул. К. Маркса, д.38</span>
                    </div>
                    <div class="">
                        <span>+7(835)222-2147</span>
                    </div>
                    <div class="">
                        <span>ui@chuvgpu.ru</span>
                    </div>
                </div>
                <div class="col">
                    <div class="">
                        <h3>Меню</h3>
                        <div class="navbar-light">
                            <ul class="navbar-nav">
                                <li clss="nav-item">
                                    <router-link to="/" class="nav-link active">О нас</router-link>
                                </li>
                                <li clss="nav-item">
                                    <router-link to="/registry" class="nav-link active">Реестр</router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>

</style>
