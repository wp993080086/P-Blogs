import { defineComponent } from 'vue'
import styles from './style.module.scss'
import downArrows from '@/static/images/down_arrows.png'

export default defineComponent({
  name: 'home',
  setup() {
    return () => (
      <div class={styles.home_box}>
        <div class={styles.banner_box}>
          <div class={styles.motto}>天道酬勤 功不唐捐</div>
          <div class={styles.arrows_box}>
            <img src={downArrows} class={styles.down_arrows} />
          </div>
        </div>
      </div>
    )
  }
})