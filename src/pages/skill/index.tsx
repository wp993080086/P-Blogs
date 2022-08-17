import { defineComponent } from 'vue'
import styles from './style.module.scss'

export default defineComponent({
  name: 'skill',
  setup() {
    return () => (
      <div id={styles.skill_box}>
        skill-技术
      </div>
    )
  }
})