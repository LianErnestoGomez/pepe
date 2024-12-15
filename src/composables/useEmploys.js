import axios from "axios"
// import myJson from "../db.json"
let baseUrl = "http://127.0.0.1:8000"
export const useEmploy = () => {
    // let employers = ref([])
    const fetchStatistics = async () => {
        let result = {
            isSucces: true,
            data: null,
            error: null
        }
        try {
            let res = await axios.get(baseUrl + `/api/statistics`)
            result.data = res.data.statistics
        }
        catch (error) {
            result.isSucces = false
            result.error = error
        }
        return result
    }

    const fetchEmployers = async () => {
        let result = {
            isSucces: true,
            data: null,
            error: null
        }
        try {

            let res = await axios.get(baseUrl + "/api/user")
            result.data = res.data.data
        } catch (error) {
            result.isSucces = true
            result.error = error
        }
        return result
    }
    const fetchRoles = async () => {
        let result = {
            isSucces: true,
            data: null,
            error: null
        }
        try {
            let res = await axios.get(baseUrl + "/api/roles")
            result.data = res.data
        } catch (error) {
            result.isSucces = true
            result.error = error
        }
        return result
    }
    
    const mapEmployers = (employers) => {
        return employers.map((empl) => {
            return {
                id: empl.id,
                nombre: empl.name,
                email: empl.email,
                rol: empl.role,
            }
        })
    }
    return {
        fetchEmployers,
        mapEmployers, fetchStatistics
   ,fetchRoles
    }
}