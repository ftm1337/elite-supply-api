
async function geti() {
  return "api pls""
}


module.exports = async (req, res) => { // this function will be launched when the API is called.
  try {
    res.send(await geti()) // send the lyrics
  } catch (err) {
    res.send(err) // send the thrown error
  }
}