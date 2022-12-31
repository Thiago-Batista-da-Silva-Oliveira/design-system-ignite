function climbingLeaderboard(ranked, player) {
    const playersRanks = ranked
    const climb = [];
    
    for(let i =0; i<player.length; i++) {
        playersRanks.push(player[i])
        const filteredRanked = [...new Set(playersRanks)]
        const orderedRanks = filteredRanked.sort((a,b) => b - a)
        console.log(orderedRanks)
        climb[i] = orderedRanks.length + 1
        let j = 0
        while(player[i] < orderedRanks[j]) {
            j++
        }
        climb[i] = j + 1
    }
    
    console.log(climb)
    return climb
 
 }