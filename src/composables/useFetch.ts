import axios from 'axios';
import { onMounted, ref } from 'vue';

export const useFetch = ({url}) => {
    let loading = ref<boolean>(false)
    let data = ref<any>([])

    const fetch = async () => {
        try {
            const response =  await axios.get(url)
            data.value = response.data
        } catch (error) {
            console.log(error)
        }
    }

    onMounted(() => {
        fetch()
    })
return{data}
}

