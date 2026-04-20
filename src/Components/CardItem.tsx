import StackIcon from "tech-stack-icons";

export default function Card(props: any) {
    const cardName = props.cardName || 'Card Name';
    const iconName = props.iconName || cardName.toLowerCase();
    
    return (
        <div className="card m-2 pt-2">
            <StackIcon name={iconName.toLowerCase()} />
            <div className="py-1">
                <div className="fs-5 mt-2">{cardName}</div>
            </div>
        </div>
    );
}
