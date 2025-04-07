import { create } from "zustand"
import { devtools } from 'zustand/middleware' 
import { Cryptocurrency } from "./types"
import { getCryptos } from "./services/CryptoService"

type CryptoStore = {
    cryptocurrencies: Cryptocurrency[]
    fetchCryptos: () => Promise<void> 
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
    }
})))