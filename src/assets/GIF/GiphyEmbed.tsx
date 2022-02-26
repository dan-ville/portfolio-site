type GiphyEmbedProps = {
  src: string
}
const GiphyEmbed = ({ src }: GiphyEmbedProps) => {
  return (
    <>
      <iframe
        title="Giphy"
        src={src}
        width="480"
        height="360"
        frameBorder="0"
        allowFullScreen
      />
    </>
  )
}

export default GiphyEmbed
