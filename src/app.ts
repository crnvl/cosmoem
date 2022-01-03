import {extractUrl, fetchAnimekisa} from "./lib/Web";
import express from 'express';
import config from './config.json'
const app = express();

console.log('[COSMOEM] API is starting...')

app.use(express.json())

app.listen(config.port,() => {
    app.post('/fetch', async (req, res) => {
        const title = req.body?.title || '';
        const episode = req.body?.episode || '';

        const html = await fetchAnimekisa(title, episode).then(r => {
            return r
        });
        const vidUrl = extractUrl(html.data) || ''
        res.json({url: vidUrl.replace('load.php', 'download')})
    })
})