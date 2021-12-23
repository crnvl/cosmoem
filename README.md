# cosmoem
Cosmoem is a handy REST-API for gathering download links for anime episodes without shady streaming sites.
 ---
# Request a download link
POST to `http://4c3711.xyz:4001/fetch` with a JSON Body of
```json
{
 "title": "anime",
 "episode": "1"
}
```

The API will then return a JSON Body with
```json
{
 "url": "url here"
}
```
# Roadmap
 While I'm working on cosmoem, you can view my progress [here](https://github.com/angelsflyinhell/cosmoem/projects/1).


