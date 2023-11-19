export default function Video({videoSrc}: {videoSrc: string}) {
  return (
    <video autoPlay loop muted className="w-full h-full aspect-[5]">
      <source src={videoSrc} type="video/mp4" />
    </video>
  )
}
