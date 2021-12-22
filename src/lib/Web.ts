import axios from "axios";
// @ts-ignore
import https from "https";
// @ts-ignore
import fs from "fs";

export const fetchAnimekisa = async (title: string, episode: string) => {
    return await axios.get(`https://animekisa.tv/${title}-episode-${episode}`);
}

export const extractUrl = (html: string) => {
    const regex = /(var VidStreaming = "https?:\/\/[^\s]+";)/g;
    const rMatch = new RegExp(regex);
    return html.match(rMatch)?.toString().replace("var VidStreaming = \"", "").replace("\";", "");
}

export const getFile = async (url: string) => {
    // return await axios.get(url, {
    //     headers: {
    //         "referer": "https://gogoplay1.com/"
    //     },
    //     data: {
    //         "token": "dmslkQW8h0sjZ0kaTJXWoA"
    //     }
    // });

    const file = fs.createWriteStream("downloads/video.mp4");
    const request = https.get("url", (response: any) => {
        response.pipe(file);
    });
}