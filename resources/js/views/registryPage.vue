<template>
    <main class="mt-5 mb-5">
        <div class="container">
            <div class="row rows-cols-2">
                <div class="col-2 bg-white" style="height: max-content;padding: 15px;">
                    <nav class="nav flex-column">
                        <button @click="showServices = true; showHostings = false" class="nav-link">Цифровые сервисы</button>
                        <li class="nav-item dropend">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              <span class="text-wrap">Информационные системы</span>
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                              <li>
                                  <button @click="showServices = false;
                                  showDomestic = true;
                                  showExternal = false;
                                  showHostings = false" class="dropdown-item">Внутренние</button>
                              </li>
                              <li>
                                  <button @click="showServices = false;
                                  showDomestic = false;
                                  showExternal = true;
                                  showHostings = false" class="dropdown-item">Внешние</button>
                              </li>
                              <li>
                                  <button @click="showServices = false;
                                  showDomestic = false;
                                  showExternal = false;
                                  showHostings = true" class="dropdown-item">Хостинги</button>
                              </li>
                            </ul>
                        </li>
                    </nav>
                </div>
                <div class="col ms-2">
                    <services v-if="showServices"></services>
                    <domestic v-if="showDomestic"></domestic>
                    <external v-if="showExternal"></external>
                    <hosting v-if="showHostings"></hosting>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
import services from '../components/services/services.vue'
import domestic from '../components/InformationSystems/Domestic.vue'
import external from '../components/InformationSystems/External.vue'
import hosting from '../components/InformationSystems/Hostings.vue'

export default {
     components: {
         services,
         domestic,
         external,
         hosting
    },

    data() {
        return {
            showServices: true,
            showDomestic: false,
            showExternal: false,
            showHostings: false
        };
    }
}
</script>
<style>
    button{
        border: none;
        background-color: transparent;
        text-align: start;
    }
    .nav-link{
        color: black;
    }
    .nav-link:hover{
        color: black;
    }

    .dropdown-item:hover{
        color: black;
    }
</style>
