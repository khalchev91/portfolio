
function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center px-8 pt-20 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-8 space-y-6">
                    <h1
                        className="font-headline text-5xl md:text-7xl font-bold tracking-[-0.04em] text-on-surface leading-none">
                        Leading Digital Transformation <br />
                        <span className="text-primary">Line</span> by Line.
                    </h1>
                    <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl leading-relaxed">
                        I am a Full-Stack Engineer who loves to translate user requirements into clean, efficient code and intuitive interfaces.
                        With a strong foundation in both frontend and backend technologies, I thrive on creating seamless digital experiences that solve real-world problems.
                    </p>
                </div>
                <div className="hidden md:block md:col-span-4 relative">
                    <div className="absolute -inset-4 bg-primary/5 blur-3xl rounded-full"></div>
                    <div
                        className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/20 shadow-2xl relative overflow-hidden">
                        <div className="flex gap-1.5 mb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
                        </div>
                        <code className="text-sm font-mono space-y-2 block">
                            <p className="text-primary-fixed-dim">const <span className="text-on-surface">engineer</span> = {'{'}</p>
                            <p className="pl-4 text-tertiary">name: <span className="text-primary">"Khalin Cheverria"</span>,</p>
                            <p className="pl-4 text-tertiary">role: <span className="text-primary">"Full Stack Engineer"</span>,</p>
                            <p className="pl-4 text-tertiary">focus: [<span className="text-primary">"React"</span>, <span className="text-primary">"C#"</span>, <span className="text-primary">"ExpressJs"</span>],</p>
                            <p className="pl-4 text-tertiary">status: <span className="text-primary">"Engineering..."</span></p>
                            <p className="text-primary-fixed-dim">{'}'};</p>
                        </code>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Hero