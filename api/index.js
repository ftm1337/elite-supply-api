
async function geti() {
  let rd = 
      /*await fetch("https://api.coingecko.com/api/v3/global")*/
      await fetch("https://rpc.ankr.com/fantom", {"credentials": "omit","headers": {"Accept": "*/*","Accept-Language": "en-US,en;q=0.5","content-type": "application/json"},"body": "{\"method\":\"eth_call\",\"params\":[{\"to\":\"0x3a603eceae046828febbcbd097bf97adc23dc072\",\"data\":\"0x370158ea\"},\"latest\"],\"id\":96,\"jsonrpc\":\"2.0\"}","method": "POST","mode": "cors"});
  let i = (await rd.json()).result;
  let ans = {
        lastUpdateTimestamp:	Number("0x"+i.substr( 2+64*0 , 64 ))
        , price:				Number("0x"+i.substr( 2+64*1 , 64 )) / 1e18
        , circulatingSupply:	Number("0x"+i.substr( 2+64*2 , 64 )) / 1e18
        , outstandingSupply:	Number("0x"+i.substr( 2+64*3 , 64 )) / 1e18
        , dilutedSupply:		Number("0x"+i.substr( 2+64*4 , 64 )) / 1e18
        , supplyInVeNFT:		Number("0x"+i.substr( 2+64*5 , 64 )) / 1e18
        , supplyInGaugeRewards:	Number("0x"+i.substr( 2+64*6 , 64 )) / 1e18
        , supplyInExcluded:		Number("0x"+i.substr( 2+64*7 , 64 )) / 1e18
        , veTotalSupply:		Number("0x"+i.substr( 2+64*8 , 64 )) / 1e18
        , lockRatio:			Number("0x"+i.substr( 2+64*9 , 64 )) / 1e18
        , pool2Liquidity:		Number("0x"+i.substr( 2+64*10, 64 )) / 1e18
        , marketCapCirculating:	Number("0x"+i.substr( 2+64*11, 64 )) / 1e18
        , marketCapOutstanding:	Number("0x"+i.substr( 2+64*12, 64 )) / 1e18
        , marketCapDiluted:		Number("0x"+i.substr( 2+64*13, 64 )) / 1e18
        , marketCapLocked:		Number("0x"+i.substr( 2+64*14, 64 )) / 1e18
        /*
        // For coingecko
        //, circulatingSupply:	Number("0x"+i.substr( 2+64*2 , 64 )) / 1e18
        */
        , totalSupply:			Number("0x"+i.substr( 2+64*3 , 64 )) / 1e18
        , maxSupply:			Number("0x"+i.substr( 2+64*4 , 64 )) / 1e18
  }
  return ans;
}


module.exports = async (req, res) => { // this function will be launched when the API is called.
  try {
    res.send(await geti()) // send the lyrics
  } catch (err) {
    res.send(err) // send the thrown error
  }
}
