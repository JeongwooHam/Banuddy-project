import YouTube, { YouTubeProps } from 'react-youtube'

const AnimalVideo: React.FC<{ src: string }> = ({ src }) => {
  const handleReady: YouTubeProps['onReady'] = (e) => {
    e.target.pauseVideo()
  }

  const handleEnd: YouTubeProps['onEnd'] = (e) => {
    e.target.stopVideo(0)
  }

  const options: YouTubeProps['opts'] = {
    height: '364',
    width: '777',
    playerVars: {
      autoplay: 1,
    },
  }

  return (
    <div className="w-content m-center flex justify-center pt-[50px]">
      <YouTube
        videoId={src}
        opts={options}
        onReady={handleReady}
        onEnd={handleEnd}
      />
    </div>
  )
}

export default AnimalVideo
