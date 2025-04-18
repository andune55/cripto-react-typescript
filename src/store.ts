import { create } from "zustand"
import { devtools } from 'zustand/middleware' 
import { Cryptocurrency, CryptoPrice, Pair } from "./types"
import { getCryptos, fetchCurrentCryptoPrice } from "./services/CryptoService"

type CryptoStore = {
    cryptocurrencies: Cryptocurrency[]
    result: CryptoPrice
    loading: boolean
    fetchCryptos: () => Promise<void> 
    fetchData: (pair:Pair) => Promise<void>
}

export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
    cryptocurrencies: [],
    result: {
        IMAGEURL: '',
        PRICE: '',   
        HIGHDAY: '', 
        LOWDAY: '', 
        CHANGEPCT24HOUR: '' ,
        LASTUPDATE: '' 
    },
    loading: false,
    fetchCryptos: async () => {
        //getCryptos()
        const cryptocurrencies = await getCryptos()
        //console.log(cryptocurrencies)
        set(() => ({
            cryptocurrencies : cryptocurrencies // podríamos poner solo "cryptocurrencies"
        }))
    },
    fetchData: async (pair) => {
        set(()=>({
            loading: true
        }))
        const result = await fetchCurrentCryptoPrice(pair)
        //console.log(result)
        set(()=>({
            result: result, // podríamos poner solo "result"
            loading: false
        }))
    }
})))