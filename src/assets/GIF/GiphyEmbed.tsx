type GiphyEmbedProps = {
  src: string
}
const GiphyEmbed = ({ src }: GiphyEmbedProps) => {
  return (
    <>
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          height: "100%",
          paddingBottom: "75%",
          position: "relative",
        }}
      >
        <iframe
          width="100%"
          height="300px"
          title="Giphy"
          style={{ position: "absolute" }}
          frameBorder="0"
          allowFullScreen
          src={src}
        ></iframe>
      </div>
    </>
  )
}

export default GiphyEmbed
