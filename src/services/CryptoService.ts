import axios from 'axios'
import { CryptoCurrenciesResponseSchema } from '../schema/crypto-schema'

export async function getCryptos(){
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=EUR'
    const {data: {Data}} = await axios(url)
    console.log(Data)
    const result = CryptoCurrenciesResponseSchema.safeParse(Data)
    //console.log(result)
    if(result.success){
        return result.data
    }
}