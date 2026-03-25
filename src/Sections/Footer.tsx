function Footer(props: any) {

    const appName = props.appName || 'Software Engineer';
    return (
        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl mx-auto gap-8">
            <div className="font-['Space_Grotesk'] font-bold text-emerald-400">{appName}</div>
            <div className="flex gap-8">
                <a className="font-['Inter'] text-[0.6875rem] uppercase tracking-[0.05em] text-slate-500 hover:text-emerald-300 underline-offset-4 hover:underline transition-opacity"
                    href="https://github.com/khalchev91/">GitHub</a>
                <a className="font-['Inter'] text-[0.6875rem] uppercase tracking-[0.05em] text-slate-500 hover:text-emerald-300 underline-offset-4 hover:underline transition-opacity"
                    href="https://www.linkedin.com/in/khalchev97/">LinkedIn</a>
            </div>
        </div>

    )
}

export default Footer;
