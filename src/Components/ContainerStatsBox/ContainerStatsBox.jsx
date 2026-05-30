import styles from './ContainerStatsBox.module.css'
function ContainerStatsBox({children}) {
    return (
        <div className={styles.mainBox}>
            {children}
        </div>
    )
}
export default ContainerStatsBox
