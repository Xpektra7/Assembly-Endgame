function wordy() {
    const wordlist = [
        'blood', 'dictionary', 'sausage', 'sword', 'swordfish', 'weather', 'kyoto', 
        'galaxy', 'jigsaw', 'puzzle', 'mystery', 'phantom', 'cryptic', 'voyage', 
        'nebula', 'quantum', 'zephyr', 'eclipse', 'horizon', 'labyrinth', 'mirage', 
        'paradox', 'riddle', 'sphinx', 'twilight', 'utopia', 'vortex', 'whisper', 
        'xenon', 'yonder', 'zodiac', 'alchemy', 'bizarre', 'cascade', 'dungeon', 
        'enigma', 'fable', 'gadget', 'harpoon', 'illusion', 'jungle'
    ];
    const randomWord = wordlist[Math.floor(Math.random() * wordlist.length)];
    return randomWord
}


export default wordy