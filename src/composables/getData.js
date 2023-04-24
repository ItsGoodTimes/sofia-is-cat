import { hostname } from "../main";
import { ref } from "vue";

export async function getData() {
    try {
        const datas = ref({})
        const res = await fetch(hostname + "/")
        if (res.ok) {
            datas.value = res.json()
            return datas
        } else {
            console.log("Unable to get data")
        }
    } catch (err) {
        console.log(err)
    }
}