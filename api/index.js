
async function geti() {
  let rd = await fetch("https://api.coingecko.com/api/v3/global")
  return rd.json();
}


module.exports = async (req, res) => { // this function will be launched when the API is called.
  try {
    res.send(await geti()) // send the lyrics
  } catch (err) {
    res.send(err) // send the thrown error
  }
}
