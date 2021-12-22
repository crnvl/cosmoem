import {extractUrl, fetchAnimekisa} from "./lib/Web";
import inputReader from 'wait-console-input'

console.log('[COSMOEM] API is starting...')

const debug = async (title: string, episode: string) => {
    console.log('[COSMOEM] Debug started')
    const html = await fetchAnimekisa(title, episode).then(r => {
        return r
    });
    const vidUrl = extractUrl(html.data) || ''
    console.log(vidUrl.replace('load.php', 'download'))
}

const title = inputReader.readLine("Anime? ", {
    reInputOnError: true,
    separator: 'enter'
})
const episode = inputReader.readLine("Episode? ", {
    reInputOnError: true,
    separator: 'enter'
})

debug(title, episode).then(r => {
    console.log('[COSMOEM] Debug finished')
});