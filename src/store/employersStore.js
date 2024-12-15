import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useEmployStore = defineStore("employ", () => {
    let employs = ref([]);
    let currentPage = ref(1);
    let pageSize = ref(10);
    let roles = ref([]);
    let searchRole = ref('')
    let getEmployers = computed(() => {
        if (searchRole.value.length > 0) {
            currentPage.value = 1;
            return employs.value.filter((employ) => employ.rol === searchRole.value)
        }
        return employs.value;
    });
    let setRoles = (r) => {
        roles.value = r
    }
    let getRoles = computed(() => {

        return roles.value
    })


    let paginatedEmployers = computed(() => {
        if (getEmployers.value.length === 0) {
            return getEmployers.value;
        }
        if (getEmployers.value.length < pageSize.value) {
            return getEmployers.value;
        }
        const start = (currentPage.value - 1) * pageSize.value;
        const end = start + pageSize.value;
        return getEmployers.value.slice(start, end);
    });

    let setEmployers = (employers) => {
        employs.value = employers;
    };


    let totalPages = computed(() => {
        return Math.ceil(getEmployers.value.length / pageSize.value);
    });

    let nextPage = () => {
        if (currentPage.value < totalPages.value) {
            currentPage.value++;
        }
    };

    let previousPage = () => {
        if (currentPage.value > 1) {
            currentPage.value--;
        }
    };

    return {
        employs,
        getRoles,
        getEmployers,
        setRoles,
        searchRole,
        paginatedEmployers,
        setEmployers,
        currentPage,
        pageSize,
        totalPages,
        nextPage,
        previousPage,
    };
});