import axios from 'axios'
import { CryptoCurrenciesResponseSchema, CryptoPriceSchema } from '../schema/crypto-schema'
import { Pair } from '../types'

export async function getCryptos(){
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=EUR'
    const {data: {Data}} = await axios(url)
    console.log(Data)  
    const result = CryptoCurrenciesResponseSchema.safeParse(Data)
    console.log(result)
    if(result.success){
        return result.data
    }   
}

export async function fetchCurrentCryptoPrice(pair: Pair) {
    //console.log(pair)
    //const url = `http://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=EUR`    
    const url = `http://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.criptocurrency}&tsyms=${pair.currency}`
    // const { data } = await axios(url)
    // console.log(data) 

    const { data: {DISPLAY} } = await axios(url)
    //console.log(DISPLAY[pair.criptocurrency][pair.currency]) 
    const result = CryptoPriceSchema.safeParse(DISPLAY[pair.criptocurrency][pair.currency])
    //console.log(result)
    if(result.success){
        //console.log(result.data)
        return(result.data)
    }    
}