// import { defineStore } from "pinia";
// import axios from 'axios';
// import { computed, ref } from 'vue';

// export const useEmployersStore = defineStore("Employers", () => {
//     // state
//     const baseUrl = "http://127.0.0.1:8000"
//     let employers = ref([])
//     let currentPage = ref(1)
//     let count = ref(1)
//     let countPage = ref(10)
//     let list = ref([])
//     let rolesList = ref([])
//     let employersAmountList = ref([])
//     let filterRole = ref('')

//     // inicialisando list
//     for (let i = 1; i <= 10; i++) {
//         list.value.push(i)
//     }

//     // computed
//     let setStatistics = (stat) => {
//         employersAmountList.value = Object.values(stat)
//     }

//     let getList = computed(() => {
//         return list.value
//     })
//     let maxPage = computed(() => {
//         return Math.ceil(getEmployers.value.length / countPage.value)
//     })
//     let getEmployers = computed(() => {
//         if(filterRole.value.length == 0) return employers.value.slice((currentPage.value - 1) * countPage.value, countPage.value * currentPage.value)
//             else{
//                 let filtereds =  employers.value.filter(item=>item.role == filterRole.value) 
            
//                 return filtereds.slice((currentPage.value - 1) * countPage.value, countPage.value * currentPage.value)
//             } 
//         })
//     // actions
//     const nextPage = () => {
//         if (currentPage.value >= countPage.value) return
//         if (currentPage.value >= countPage.value * count.value) {
//             list.value = []
//             count.value++

//             for (let i = currentPage.value; i <= currentPage.value + countPage.value; i++) {
//                 list.value.push(i)
//                 if (i == employers.value.length) break;
//             }
//         }
//         else currentPage.value++
//     }
//     const previusPage = () => {
//         if (currentPage.value <= 1) return
//         if (currentPage.value - 1 <= (count.value - 1) * countPage.value) {
//             console.log(currentPage.value);
//             console.log(count.value);
//             count.value--
//             list.value = []
//             for (let i = (currentPage.value - (countPage.value * count.value)) + 1; i <= currentPage.value; i++) {
//                 list.value.push(i)
//             }
//         }
//         else currentPage.value--
//     }
//     const fetchEmployers = async () => {
//         let res = await axios.get(`${baseUrl}/api/user`)
//         employers.value = res.data.data
//         return res.data.data
//     }
//     let fetchRoles = async () => {
//         let res = await axios.get(`${baseUrl}/api/roles`)
//         rolesList.value = res.data.roles
//         return res.data.roles
//     }



//     return { setStatistics, fetchRoles ,filterRole, employersAmountList, rolesList, fetchEmployers, baseUrl, nextPage, previusPage, getEmployers, getList, maxPage, employers, currentPage, countPage, list }
// })
