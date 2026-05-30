 export default function TaskPriority({prio}){
    const style = {
        padding: `${5}px ${7}px`,
        borderRadius: `${10}px`,
        fontSize: `${8}px`,
        fontWeight: `bold`
    }

    if(prio === "high") return (
        <span style={{...style ,backgroundColor: "rgb(214, 7, 7)" , color: "rgb(59, 23, 1)"}}>
            {prio}
        </span>
    );

    if(prio === "medium") return (
        <span style={{...style ,backgroundColor: "rgb(234, 234, 33)" , color: "rgb(61, 71, 13)"}}>
            {prio}
        </span>
    );

    if(prio === "low") return (
        <span style={{...style ,backgroundColor: "rgb(33, 103, 234)" , color: "rgb(26, 13, 71)"}}>
            {prio}
        </span>
    );
}