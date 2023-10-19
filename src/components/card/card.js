import Image from 'next/image'
import styles from './card.module.sass'
import ConditionnalRendered from '../conditionnal-rendered'
import Button from '@/components/Button/Button'
import getCategoryColor from '@/helpers/get-category-color'

const Card = (props) => {
  return (
    <div className={`${styles.card_wrap} ${props.className || ''}`}>
      <div className={styles.card}>
          <div className={styles.card_imageWrap}>
              <div className={styles.card_image}>
                  <Image src="/thumb-featured-article.jpg" alt="thumbnail" fill={true} />
              </div>
          </div>
          <div className={styles.card_content}>
            <ConditionnalRendered condition={props.label}> 
              <div className={`${styles.card_label} h6 mb-10 c-${getCategoryColor(props.label)}`}>{props.label}</div>
            </ConditionnalRendered>
            <ConditionnalRendered condition={props.title}> 
              <div className={`${styles.card_title} h3 mb-20`}>{props.title}</div>
            </ConditionnalRendered>
            <ConditionnalRendered condition={props.summary}> 
              <p className={`${styles.card_summary} fw-600`}>
              {props.summary}
              </p>
            </ConditionnalRendered>
            <ConditionnalRendered condition={props.href}> 
              <Button href={props.href} icon={props.btnIcon}>{props.btnLabel || 'Read more'}</Button>
            </ConditionnalRendered>
          </div>
      </div>
    </div>
  )
}

export default Card