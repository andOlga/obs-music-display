// This is a Node script to generate a "playlist.txt" file from the tracks in the "music" subfolder.
// Create such a folder and place your music there before running this.
const fs = require('fs')
const playlistFile = 'playlist.txt'
const header = 'const playlist = ' // put at top of playlist.txt to avoid CORS, fetch and "true" JSON parsing
function getSongList () {
  if (fs.existsSync(playlistFile)) {
    return JSON.parse(fs.readFileSync(playlistFile, 'utf-8').replace(header, ''))
  } else {
    return []
  }
}
const songs = getSongList()
const existingFiles = songs.map(x => x.fileName)
const allFiles = fs.readdirSync('music')
for (const file of allFiles) {
  if (existingFiles.includes(file)) {
    continue
  }
  songs.push({
    fileName: file,
    displayName: file.replace(/\.mp3$/i, '').replace(/\.ogg$/i, '').replace(/\.flac$/i, ''),
    author: '???' // to be filled manually later
  })
}
fs.writeFileSync(playlistFile, header + JSON.stringify(songs, undefined, 2))
