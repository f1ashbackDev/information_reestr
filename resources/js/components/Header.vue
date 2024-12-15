<script >
export default {
    data() {
        return {
            language: 'Русский'
        }
    },
    methods: {
        switchLanguage(lang){
            this.$i18n.locale = lang;
        }
    },
    computed:{
        currentLanguage(){
            return this.$i18n.locale;
        }
    }
}
</script>

<template>
    <header>
        <div class="container">
            <div class="row rows-cols-3 mt-4">
                <div class="col">
                    <div class="d-flex">
                        <a href="/index.html" class="d-flex link-dark" style="text-decoration: none">
                            <img src="./img/logo_new.png" alt="">
                            <h1 class="ms-3" style="font-size: 1.5rem;">{{ $t("message.title") }}</h1>
                        </a>
                    </div>
                </div>
                <div class="col">
                    <div class="">
                        <i class="bi bi-geo-alt"></i>
                        <span style="font-size: .875rem;">428000, г. Чебоксары, ул. К. Маркса, д.38</span>
                    </div>
                    <div class="">
                        <i class="bi bi-telephone"></i>
                        <span style="font-size: .875rem;">+7(835)222-2147</span>
                    </div>
                    <div class="">
                        <i class="bi bi-envelope"></i>
                        <span style="font-size: .875rem;">ui@chuvgpu.ru</span>
                    </div>
                </div>
                <div class="col">
                    <div class="">
                        <i class="bi bi-eye"></i>
                        <span style="font-size: .875rem;">Версия для слабовидящих</span>
                    </div>
                    <div class="d-flex align-items-center">
                        <i class="bi bi-translate"></i>
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {{ currentLanguage }}
                            </button>
                            <ul class="dropdown-menu">
                                <li>
                                    <button @click="switchLanguage('en')" class="dropdown-item">Английский</button>
                                </li>
                                <li>
                                    <button @click="switchLanguage('ru')" class="dropdown-item">Русский</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <nav class="navbar navbar-expand-lg navbar-dark mt-3" style="background-color: #c21e41;">
            <div class="container">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link active">О нас</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/registry" class="nav-link active">Реестр</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<style scoped>
    button{
        border: none;
        background-color: transparent;
        text-align: start;
        color: black;
    }
    button:hover{
        color: black;
        background-color: transparent;
        box-shadow: none;
    }
    button:focus{
        color: black;
        background-color: transparent;
        box-shadow: none;
    }
</style>
