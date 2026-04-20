import StackIcon from "tech-stack-icons";

export default function Card(props: any) {
    const cardName = props.cardName || 'Card Name';
    
    return (
        <div className="card m-2 pt-2">
            <StackIcon name="C#" />
            <div className="py-1">
                <div className="fs-5 mt-2">{cardName}</div>
            </div>
        </div>
    );
}
