import React from 'react'
import CoinList from "../pages/CoinList"
import { WatchListContextProvider } from '../pages/WatchListContext'

export default function Banner() {
    return (
        <div className="banner  flex justify">


            <div className="flex justifyaround " style={{
                width: "55rem",


            }}>
                <WatchListContextProvider>
                    <CoinList />

                </WatchListContextProvider>
            </div>


            {/* <CoinList /> */}
        </div>
    )
}
