import Image from 'next/image'
import styles from './page.module.css'
import Watch from './pages/watch'
import { getVideos } from './utils/firebase/functions'
import Link from 'next/link';


export default async function Home() {
  await getVideos();

  return (
    <main className={styles.main}>
      {/* {
        (videos).map((video) => (
          <Link href={`/watch?v=${video.filename}`}>
            <Image
              src={'/image_not_available.png'}
              alt='video'
              width={120}
              height={80}
            />
          </Link>
        ))
      } */}

    </main>
  )
}
