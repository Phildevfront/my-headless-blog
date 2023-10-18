import Image from 'next/image'
import styles from './card.module.sass'

const card = () => {
  return (
    <div className={styles.card}>
        <div className={styles.card_imageWrap}>
            <div className={styles.card_image}>
                <Image src="" alt="" />
            </div>
        </div>
    </div>
  )
}

export default card