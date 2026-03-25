function About() {
    return (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 place-items-center">
            <div className="space-y-8 items-center">
                <h2 className="font-headline text-5xl font-bold tracking-tight text-on-surface text-center">About Khalin
                </h2>
                <div className="text-on-surface-variant leading-relaxed text-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="col-span-1">
                            <p className="text-left">
                                My journey started deep diving into Android development out of boredom. 
                                Today, I've dabbled in various aspects of software engineering.
                                From minor driver development to full-stack web applications.
                            </p>
                        </div>
                        <div className="col-span-1">
                            <p className="text-left">
                                I believe in utilizing the power of software engineering to solve real world problems 
                                and create a seamless digital experience for general society. 
                                This is something that I strive to be part of no matter what and at this point I do it for the love of it no matter what.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;