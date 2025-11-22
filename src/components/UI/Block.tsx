import classes from "./styles.module.css"

type BlockProps = {
    children?: React.ReactNode
    isActive?: boolean
}

const Block = ({children,isActive}:BlockProps) => {
    return <div className={`${classes.blockContainer} ${isActive && classes.active}`}>
        {children}
    </div>
}
export default Block