<script>
import axios from 'axios';

export default {
    data() {
        return {
            selectedOption: '',
            data: null,
            loading: false,
            error: null,
        };
    },
    methods: {
        async selectHosting() {
            this.loading = true;
            this.error = null;

            try {
                const response = await axios.get(`api/get/hosts/${this.selectedOption}`);
                this.data = response.data

            } catch (err) {
                this.error = err.message;
            } finally {
                this.loading = false;
            }
        },
    },
};
</script>

<template>
    <h3>Информационные системы хостинги:</h3>
    <select class="form-select" v-model="selectedOption" @change="selectHosting()">
        <option disabled value="">Выберите хостинг</option>
        <option value="beget">Beget</option>
        <option value="timeweb">TimeWeb</option>
    </select>
    <div v-if="loading">Загрузка...</div>
    <div v-if="data">
        <table class="table">
            <thead>
                <tr>
                    <th>Название</th>
                    <th>Ссылка</th>
                    <th>Описание</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="tableData in data">
                    <td>{{ tableData.name }}</td>
                    <td><a :href="tableData.url">{{ tableData.url }}</a></td>
                    <td>{{ tableData.description }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>

</style>
