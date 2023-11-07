export default function Video({videoSrc}: {videoSrc: string}) {
  return (
    <div className="pb-[56.25%] relative w-full">
    <video autoPlay loop muted className="w-full h-full absolute -top-36 sm:-top-30 md:-top-44 lg:-top-48 xl:-top-56 2xl:-top-60 left-0">
      <source src={videoSrc} type="video/mp4" />
    </video>
  </div>
  )
}
