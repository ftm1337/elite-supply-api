
async function geti() {
  let rd = //await fetch("https://api.coingecko.com/api/v3/global")
      await fetch("https://rpc.ankr.com/fantom", {"credentials": "omit","headers": {"Accept": "*/*","Accept-Language": "en-US,en;q=0.5","content-type": "application/json"},"body": "{\"method\":\"eth_call\",\"params\":[{\"to\":\"0x3a603eceae046828febbcbd097bf97adc23dc072\",\"data\":\"0x370158ea\"},\"latest\"],\"id\":96,\"jsonrpc\":\"2.0\"}","method": "POST","mode": "cors"});
  return (await rd.json()).result;
}


module.exports = async (req, res) => { // this function will be launched when the API is called.
  try {
    res.send(await geti()) // send the lyrics
  } catch (err) {
    res.send(err) // send the thrown error
  }
}
