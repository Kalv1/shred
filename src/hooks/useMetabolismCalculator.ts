import { useSaveDataLocal } from "@/hooks/useSaveDataLocal" 

export const useMetabolismCalculator = () => {

    const { saveMetaData } = useSaveDataLocal()

    const baseMetabolism = (gender: string, age: number, weight: number, height: number, activity: number) => {

        saveMetaData({
            gender,
            age,
            weight,
            height,
            activity
        })

        switch (gender) {
            case "Male":
                console.log((13.707 * weight) + (492.3 * (height/100)) - (6.673 * age) + (77.607 * activity))
                return (13.707 * weight) + (492.3 * (height/100)) - (6.673 * age) + (77.607 * activity)
            case "Female":
                console.log((9.74 * weight) + (172.9 * (height/100)) - (4.737 * age) + (667.05 * activity))
                return (9.74 * weight) + (172.9 * (height/100)) - (4.737 * age) + (667.05 * activity)
        }

        
    }

    return {
        baseMetabolism
    }
}