import { defineStore } from "pinia";
import axios from 'axios';
import { computed, ref } from 'vue';

export const useEmployersStore = defineStore("Employers", () => {
    // state
    let response = ref({
        data: null,
        isSucces: true,
        message: ''
    })
    const baseUrl = "http://127.0.0.1:8000"
    let employers = ref([])
    let currentPage = ref(1)
    let count = ref(1)
    let countPage = ref(10)
    let list = ref([])
    let rolesList = ref([])
    let employersAmountList = ref([])
    let filterRole = ref('all')

    // inicialisando list
    for (let i = 1; i <= 10; i++) {
        list.value.push(i)
    }

    // computed


    let getList = computed(() => {
        return list.value
    })
    let maxPage = computed(() => {
        return Math.ceil(getEmployers.value.length / countPage.value)
    })
    let getEmployers = computed(() => {
        if (filterRole.value == "all" ) return employers.value.slice((currentPage.value - 1) * countPage.value, countPage.value * currentPage.value)
        else {
            let filtereds = employers.value.filter(item => item.role == filterRole.value)

            return filtereds.slice((currentPage.value - 1) * countPage.value, countPage.value * currentPage.value)
        }
    })
    // actions
    const nextPage = () => {
        if (currentPage.value >= getEmployers.value.length) return
        if (currentPage.value >= countPage.value * count.value) {
            list.value = []
            count.value++

            for (let i = currentPage.value; i <= currentPage.value + countPage.value; i++) {
                list.value.push(i)
                if (i == getEmployers.value.length - 1) break;
            }
        }
        else currentPage.value++
    }
    const previusPage = () => {
        if (currentPage.value <= 1) return
        if (currentPage.value - 1 <= (count.value - 1) * countPage.value) {
            console.log(currentPage.value);
            console.log(count.value);
            count.value--
            list.value = []
            for (let i = (currentPage.value - (countPage.value * count.value)) + 1; i <= currentPage.value; i++) {
                list.value.push(i)
            }
        }
        else currentPage.value--
    }
    const fetchEmployers = async () => {
        try {
            response.value.data = (await axios.get(`${baseUrl}/api/user`)).data.data
            employers.value = response.value.data

        } catch (error) {
            response.value.isSucces =false
            response.value.error = error
      
        }
        return response.value
    }


    let fetchRoles = async () => {
        try {
            response.value.data = (await axios.get(`${baseUrl}/api/roles`)).data.roles
            rolesList.value = response.value.data
        } catch (error) {
            response.value.isSucces = false
            response.value.error = error
        }
        return response.value
    }
    let fetchStatistics = async () => {
        try {
            let res = (await axios.get(baseUrl + '/api/statistics')).data.statistics
            employersAmountList.value = Object.values(res)
            response.value.data = res
        } catch (error) {
            response.value.isSucces = false
            response.value.error = error
        }
        return response
    }


    return { fetchRoles, fetchStatistics, filterRole, employersAmountList, rolesList, fetchEmployers, baseUrl, nextPage, previusPage, getEmployers, getList, maxPage, employers, currentPage, countPage, list }
})