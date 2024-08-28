export const useSaveDataLocal = () => {

    const saveMetaData = (data: {
        gender: string;
        age: number;
        weight: number;
        height: number;
        activity: number;
    }) => {
        console.log(data)
        localStorage.setItem('metaData', JSON.stringify(data))
    }

    return {
        saveMetaData
    }
}
