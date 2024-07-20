import Image from "next/image"

import styles from './NotFoundPage.module.scss'

export default function NotFound() {
     return (
          <div className={styles['wrapper-img']}>
               <Image alt="картинка" className={styles['not-found-img']} src={'/images/404_Page_Img.jpg'} width={997} height={741} />
          </div>
     )

}