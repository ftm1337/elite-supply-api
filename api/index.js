
async function geti() {
	let rd =
			await fetch("https://rpc.ankr.com/fantom", {"credentials": "omit","headers": {"Accept": "*/*","Accept-Language": "en-US,en;q=0.5","content-type": "application/json"},"body": "{\"method\":\"eth_call\",\"params\":[{\"to\":\"0x3a603eceae046828febbcbd097bf97adc23dc072\",\"data\":\"0x370158ea\"},\"latest\"],\"id\":96,\"jsonrpc\":\"2.0\"}","method": "POST","mode": "cors"});
	let i = (await rd.json()).result;
	let ans = {
		/*
		_info[0] = block.timestamp;
		_info[1] = TvlGuru.p_t_coin_usd(pool2);
		_info[2] = TvlGuru.p_t_coin_usd(pool2)*1e18/TvlGuru.coinusd();
		_info[3] = 1337e18;
		_info[4] = ELITE.totalSupply();
		_info[5] = ELITE.balanceOf(0x0000000000000000000000000000000000000000);
		_info[6] = ELITE.balanceOf(0x000000000000000000000000000000000000dEaD);
		_info[7] = ELITE.balanceOf(0x00000000000000000000000000000000DEAD1337);
		_info[8] = ELITE.balanceOf(0x74BFb7E94bEf5767F5F6Ace2D0df73a224ADB689);		//Infinitely-extensible Public Timelock
		_info[9] = ELITE.balanceOf(0x167D87A906dA361A10061fe42bbe89451c2EE584);		//Treasury
		_info[10] = ELITE.balanceOf(0x5C146cd18fa53914580573C9b9604588529406Ca);	//Development Reserve
		_info[11] = ELITE.balanceOf(0xbab9645d1B78425A7e4e9e78E8DD32aAbd800a16);	//Future Expansion Reserve
		_info[12] = ELITE.balanceOf(0x1BE23c78038B6057172848534AcD62667fA2620d);	//XELITE (Staked)
		_info[13] = XELITE.totalSupply();											//XELITE (Total Supply)
		_info[14] = XELITE.ELITEForxELITE(1e18);									//1 ELITE = ? XELITE
		_info[15] = XELITE.balanceOf(0x167D87A906dA361A10061fe42bbe89451c2EE584);	//Treasury
		_info[16] = XELITE.balanceOf(0x5C146cd18fa53914580573C9b9604588529406Ca);	//Development Reserve
		return _info;
		*/
			lastUpdateTimestamp:	Number("0x"+i.substr( 2+64*0 , 64 ))
			, price:				Number("0x"+i.substr( 2+64*1 , 64 )) / 1e18
			, prices:	{
				USD: Number("0x"+i.substr( 2+64*1 , 64 )) / 1e18,
				FTM: Number("0x"+i.substr( 2+64*2 , 64 )) / 1e18,
			}
			, maxSupply:			Number("0x"+i.substr( 2+64*3 , 64 )) / 1e18
			, totalSupply:			Number("0x"+i.substr( 2+64*4 , 64 )) / 1e18
			, burnedSupply:			( Number("0x"+i.substr( 2+64*5 , 64 )) + Number("0x"+i.substr( 2+64*6 , 64 )) + Number("0x"+i.substr( 2+64*7 , 64 )) ) / 1e18
			, burnedSupplies:	{
				"Zero": Number("0x"+i.substr( 2+64*5 , 64 )) / 1e18,
				"Dead": Number("0x"+i.substr( 2+64*6 , 64 )) / 1e18,
				"DEAD1337": Number("0x"+i.substr( 2+64*7 , 64 )) / 1e18,
			}
			circulatingSupply: 		(
				Number("0x"+i.substr( 2+64*3 , 64 ))
				- Number("0x"+i.substr( 2+64*5 , 64 ))
				- Number("0x"+i.substr( 2+64*6 , 64 ))
				- Number("0x"+i.substr( 2+64*7 , 64 ))
				- Number("0x"+i.substr( 2+64*8 , 64 ))
				- Number("0x"+i.substr( 2+64*9 , 64 ))
				- Number("0x"+i.substr( 2+64*10, 64 ))
				- Number("0x"+i.substr( 2+64*11, 64 ))
			) / 1e18
			, nonCirculatingSupplies: {
				, timeLocked:	Number("0x"+i.substr( 2+64*8 , 64 )) / 1e18
				, treasury:		Number("0x"+i.substr( 2+64*9 , 64 )) / 1e18
				, devFund:		Number("0x"+i.substr( 2+64*10, 64 )) / 1e18
				, reserve:		Number("0x"+i.substr( 2+64*11, 64 )) / 1e18
			}
			, stakedSupply:	Number("0x"+i.substr( 2+64*12, 64 )) / 1e18
			, marketCapDiluted: (
				(
					Number("0x"+i.substr( 2+64*4 , 64 ))
					- ( Number("0x"+i.substr( 2+64*5 , 64 )) + Number("0x"+i.substr( 2+64*6 , 64 )) + Number("0x"+i.substr( 2+64*7 , 64 )) )
				) / 1e18
			) * Number("0x"+i.substr( 2+64*1 , 64 )) / 1e18
			, marketCapCirculating:  (
				(
					Number("0x"+i.substr( 2+64*4 , 64 ))
					- ( Number("0x"+i.substr( 2+64*5 , 64 )) + Number("0x"+i.substr( 2+64*6 , 64 )) + Number("0x"+i.substr( 2+64*7 , 64 )) )
					- ( Number("0x"+i.substr( 2+64*8 , 64 )) + Number("0x"+i.substr( 2+64*8 , 64 )) + Number("0x"+i.substr( 2+64*10, 64 )) + Number("0x"+i.substr( 2+64*11, 64 )) )
				) / 1e18
			) * Number("0x"+i.substr( 2+64*1 , 64 )) / 1e18
			, XELITE: {
				, totalSupply:	Number("0x"+i.substr( 2+64*13, 64 )) / 1e18
				, mintRatio:	Number("0x"+i.substr( 2+64*14, 64 )) / 1e18
				, treasury:		Number("0x"+i.substr( 2+64*16 , 64 )) / 1e18
				, devFund:		Number("0x"+i.substr( 2+64*16, 64 )) / 1e18
			}
	}
	return ans;
}


module.exports = async (req, res) => { // this function will be launched when the API is called.
	try {
		res.send(await geti()) // send the data
	} catch (err) {
		res.send(err) // send the thrown error
	}
}
