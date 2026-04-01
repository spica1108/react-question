import styles from './index.module.scss'

function Edit() {
  return (
    <div className={styles.container}>
      <div>Header</div>
      <div className={styles['content-wrapper']}>
        <div className={styles.content}>
          <div className={styles.left}>Left</div>
          <div className={styles.main}>Main</div>
          <div className={styles.right}>Right</div>
        </div>
      </div>
    </div>
  )
}

export default Edit
