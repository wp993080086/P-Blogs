import { defineComponent } from 'vue'
import styles from './style.module.scss'

export default defineComponent({
  name: 'home',
  setup() {
    return () => (
      <div id={styles.article_box}>
        home-首页
      </div>
    )
  }
})