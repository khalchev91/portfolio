import { useLayoutEffect, useRef, useState } from "react";
import Card from "../Components/CardItem";
import type { SkillComponentProps } from "../models/SkillComponentProps";

function SkillSection(props: SkillComponentProps) {

    const { items, speed, gap } = props;

    const outerRef = useRef(null);
    const trackRef = useRef(null);
    const [copies, setCopies] = useState(2);

    useLayoutEffect(() => {

    }, []);



    const renderCards = items.map((el, index) => {
        return <Card key={index} cardName={el.cardName} />;
    });


    return (
        <div className="max-w-7xl mx-auto">
            <div className="mb-16">
                <span className="text-primary font-label text-xs tracking-[0.2em] uppercase">Tech Stack</span>
                <h2 className="font-headline text-4xl font-bold mt-2">Core Proficiency</h2>
            </div>
            <div className="inner">
                <div className="wrapper">
                    <div className="d-flex">
                        {renderCards}
                    </div>
                    <div className="d-flex">
                        {renderCards}
                    </div>
                    <div className="d-flex">
                        {renderCards}
                    </div>
                </div>
            </div>


            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            <div className="space-y-6">
                <div className="space-y-4">
                    <div>
                        <div className="flex justify-between mb-1 text-sm font-label uppercase">
                            <span className="text-on-surface-variant">React / Next.js</span>
                            <span className="text-primary">95%</span>
                        </div>
                        <div className="flex gap-1">
                            <div className="w-full h-1 bg-surface-container-highest">
                                <div className="h-full bg-primary w-[95%] shadow-[0_0_8px_rgba(78,222,163,0.5)]">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between mb-1 text-sm font-label uppercase">
                            <span className="text-on-surface-variant">TypeScript</span>
                            <span className="text-primary">90%</span>
                        </div>
                        <div className="flex gap-1">
                            <div className="w-full h-1 bg-surface-container-highest">
                                <div className="h-full bg-primary w-[90%]"></div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between mb-1 text-sm font-label uppercase">
                            <span className="text-on-surface-variant">Tailwind / CSS</span>
                            <span className="text-primary">100%</span>
                        </div>
                        <div className="flex gap-1">
                            <div className="w-full h-1 bg-surface-container-highest">
                                <div className="h-full bg-primary w-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        </div>
    )
}
export default SkillSection;