import { useLayoutEffect, useRef, useState } from "react";
import Card from "../Components/CardItem";
import type { SkillComponentProps } from "../models/SkillComponentProps";

function SkillSection(props: SkillComponentProps) {

    const { items, speed, gap } = props;

    const outerRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [copies, setCopies] = useState<number>(1);

    useLayoutEffect(() => {
        if (copies !== 1) return;
        const outer = outerRef.current;
        const wrapper = wrapperRef.current;
        if (!outer || !wrapper || wrapper.scrollWidth === 0) return;
    
        const singleW = wrapper.scrollWidth;
        const needed = Math.max(2, Math.ceil((outer.offsetWidth * 2.5) / singleW) + 1);
        setCopies(needed);
    }, [copies]);

    const singleWidth: number =
    copies === 1
        ? (wrapperRef.current?.scrollWidth ?? 0)
        : (wrapperRef.current?.scrollWidth ?? 0) / copies;


    return (
        <div className="max-w-7xl mx-auto">
        <div className="mb-16">
            <span className="text-primary font-label text-xs tracking-[0.2em] uppercase">Tech Stack</span>
            <h2 className="font-headline text-4xl font-bold mt-2">Core Proficiency</h2>
        </div>
        <div className="inner" ref={outerRef}>
            <div
                className="wrapper"
                ref={wrapperRef}
                style={{
                    animation: copies > 1 ? `animateBubble 40s linear infinite` : "none",
                    ["--shift" as string]: `-${singleWidth}px`,
                }}
            >
                {Array.from({ length: copies }, (_, i) =>
                    items.map((el, j) => (
                        <Card key={`${i}-${j}`} iconName={el.iconName} cardName={el.cardName} />
                    ))
                )}
            </div>
        </div>
    </div>
    )
}
export default SkillSection;