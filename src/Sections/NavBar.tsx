function NavBar(props: { appName: string }) {
    const appName = props.appName || 'Khalin Cheverria - Software Engineer';

    return (
        <nav className="fixed top-0 w-full z-50 bg-emerald-950/70 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,56,36,0.15)]">
            <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
            <div className="text-xl font-bold tracking-tighter text-emerald-400 font-headline">{appName}</div>
                <div className="hidden md:flex items-center gap-8 font-headline tracking-tight">
                    <a className="text-emerald-400 border-b-2 border-emerald-400 pb-1" href="#about">About</a>
                    <a className="text-slate-400 hover:text-emerald-200 transition-colors" href="#skills">Skills</a>
                    <a className="text-slate-400 hover:text-emerald-200 transition-colors" href="#personal">Personal</a>
                    <a className="text-slate-400 hover:text-emerald-200 transition-colors" href="#professional">Professional</a>
                    <a className="text-slate-400 hover:text-emerald-200 transition-colors" href="#contact">Contact</a>
                </div>
                <div className="flex items-center gap-4">
                    <button
                        className="bg-primary-container text-on-primary-container px-5 py-2 rounded-lg font-headline font-bold text-sm scale-95 active:scale-90 duration-200 transition-all hover:bg-primary-container/80">
                        Resume
                    </button>
                    <div
                        className="w-10 h-10 rounded-full bg-surface-container overflow-hidden border border-outline-variant/30">
                        <img className="w-full h-full object-cover" data-alt="Lead Engineer Avatar in professional attire"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBh2ppUF02OYPi0sG0jkV7JvKESfbG1Nyx18lVa8Kn-N7C6EVKmjvqGwjzeuIwi2SVFQzICaDsidBwxiQbgbiJOupI4e-0tF62Xjv6FYeXfUI2x1z9zqt96dY7jcN6MN80B56B8klTxjvez7ecsjc_HuB-iCVGu9Dgu2K86x7g3j8S_PQ3p7VcA2dmFpcx5yQ00662LMZkFC9KNd-EdEE8zttynbM2CR9exKWHahdt6iSPwNjT1j4vtyDjcRrcp9czVSg-3nayw08hk" />
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default NavBar