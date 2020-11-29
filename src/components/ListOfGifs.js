import React from "react"
import Gif from './Gif'

export default function ListOfGifs({ gifs }) {
    return (
        gifs.map(gif =>
                <Gif
                    key={gif.id}
                    title={gif.title}
                    url={gif.url}
                />
            )
    )
}