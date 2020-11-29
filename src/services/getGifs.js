const apiKey = 'QCKsmMei3iaM4muVOxWwtUNrRLuPEVLZ'

export default function getGifs({keyword = "dog"} = {}){
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}s&limit=25&offset=0&rating=g&lang=en`;
    return fetch(apiURL)
    .then(r => r.json())
    .then(response => {
      const {data} = response

      if(Array.isArray(data)){
        const gifs = data.map(gif => {
            const {images, title, id} = gif
            const {url} = images.downsized_medium
            return {title, id, url}
        })
        return gifs
      }
    })
}
  