import axios from "../core/axios"
import { FileItem } from "./dto/file.dto"

type FileType = "all" | "photos" | "trash"

export const getAll = async(type: FileType = "all"): Promise<FileItem[]> => {
    return (await axios.get("/files?type=" + type)).data
}

export const remove = async(ids: number[]): Promise<void> => {
    return (await axios.delete("/files?ids=" + ids))
}

export const uploadFile = async(options: any) => {
    const {onSuccess, onError, file, onProgress} = options
    const formData = new FormData()
    formData.append('file', file)

    const config = {
        headers: {"Content-Type": "multipart/fom-data"},
        onProgress: (event: ProgressEvent) => {
            onProgress({percent: (event.loaded / event.total) * 100})
        }
    }

    try {
        const {data} = await axios.post("files", formData, config)

        onSuccess()

        return data
    } catch (error) {
        onError({error})
    }
}