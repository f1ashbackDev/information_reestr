import './bootstrap';
import { createApp } from "vue";
import routes from './routes';
import {createI18n} from "vue-i18n";
import messages from './locales';
import App from "./App.vue";

const i18n = createI18n({
    locale: 'ru',
    messages
})

createApp(App).use(routes).use(i18n).mount("#app");
