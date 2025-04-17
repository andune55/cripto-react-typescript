import { create } from "zustand"
import { devtools } from 'zustand/middleware' 
import { Cryptocurrency, Pair } from "./types"
import { getCryptos, fetchCurrentCryptoPrice } from "./services/CryptoService"

type CryptoStore = {
    cryptocurrencies: Cryptocurrency[]
    fetchCryptos: () => Promise<void> 
    fetchData: (pair:Pair) => Promise<void>
}

export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
    cryptocurrencies: [],
    fetchCryptos: async () => {
        //getCryptos()
        const cryptocurrencies = await getCryptos()
        //console.log(cryptocurrencies)
        set(() => ({
            cryptocurrencies : cryptocurrencies
        }))
    },
    fetchData: async (pair) => {
        //console.log(pair)
        const result = await fetchCurrentCryptoPrice(pair)
        console.log(result)
    }
})))