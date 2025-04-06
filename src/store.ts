import { create } from "zustand"
import { devtools } from 'zustand/middleware' 
import axios from 'axios'
import { CryptoCurrenciesResponseSchema } from './schema/crypto-schema'
import { Cryptocurrency } from "./types"

type CryptoStore = {
    cryptocurrencies: Cryptocurrency[]
    fetchCryptos: () => Promise<void> 
}
async function getCryptos(){
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=EUR'
    const {data: {Data}} = await axios(url)
    console.log(Data)
    const result = CryptoCurrenciesResponseSchema.safeParse(Data)
    //console.log(result)
    if(result.success){
        return result.data
    }
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