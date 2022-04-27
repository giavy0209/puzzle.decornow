import fs from "fs"
import axios from "axios"

const callAPI = axios.create({
    baseURL: 'https://storage.bunnycdn.com/vyphamtest/puzzle',
    headers: {
        AccessKey: 'd93c65dc-78f9-4fce-a8bbe3b2b496-193d-42a8',

    },
    maxContentLength: Infinity,
    maxBodyLength: Infinity
})

export const upload = async (file: Buffer, filename: string) => {
    const res = await callAPI.put(`/${filename}`, file)
    console.log(res.data);
}