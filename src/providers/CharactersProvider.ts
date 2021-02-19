import { useState } from "react"
import { Configs } from '../root/Configs';

function CharactersProvider() {
    const [loading, setloading] = useState(false)
    const [data, setdata] = useState([])

    const fetchCharacters = async () => {
        try {
            setloading(true)
            const response = await fetch(Configs.base_url + 'character')
            const body = await response.json()
            setdata(body.results)
            setloading(false)
            return body
        } catch (error) {
            setloading(false)
            console.log(error)
        }
    }

    return {
        loading,
        data,
        fetchCharacters
    } as const
}

export default CharactersProvider