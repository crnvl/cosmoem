import axios from "axios";

export const fetchAnimekisa = async (title: string, episode: string) => {
    return await axios.get(`https://animekisa.tv/${title}-episode-${episode}`);
}

export const extractUrl = (html: string) => {
    const regex = /(var VidStreaming = "https?:\/\/[^\s]+";)/g;
    const rMatch = new RegExp(regex);
    return html.match(rMatch)?.toString().replace("var VidStreaming = \"", "").replace("\";", "");
}