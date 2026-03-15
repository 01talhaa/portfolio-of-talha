import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ExternalLink, Github, ChevronRight } from 'lucide-react'
import { projectsData } from '@/data/projects'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProjectGallery from '@/components/ProjectGallery'

// Generate static params for all projects
export async function generateStaticParams() {
    return projectsData.map((project) => ({
        slug: project.slug,
    }))
}

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const project = projectsData.find((p) => p.slug === params.slug)

    if (!project) {
        return {
            title: 'Project Not Found | ABS Talha',
        }
    }

    return {
        title: `${project.title} | Case Study | ABS Talha`,
        description: project.shortDesc,
    }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
    const project = projectsData.find((p) => p.slug === params.slug)

    if (!project) {
        notFound()
    }

    // Combine cover image with gallery images
    const allImages = [project.coverImage, ...project.galleryImages.slice(1)]

    return (
        <main className="min-h-screen bg-black text-white selection:bg-white/20 selection:text-white">
            <Navbar />

            <article className="pt-32 pb-24 px-6 sm:px-8 max-w-5xl mx-auto">
                {/* Navigation Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-white/80 font-medium mb-12">
                    <Link href="/#projects" className="hover:text-white transition-colors flex items-center gap-2">
                        <ArrowLeft size={14} /> Back to Projects
                    </Link>
                    <ChevronRight size={14} className="opacity-50" />
                    <span className="text-white/80">{project.title}</span>
                </div>

                {/* Header Section */}
                <header className="space-y-8 mb-16">
                    <div className="flex flex-wrap items-center gap-3">
                        {project.tech.map((t) => (
                            <span key={t} className="px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold border border-white/10 text-white/80 bg-white/5">
                                {t}
                            </span>
                        ))}
                    </div>

                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1]">
                        {project.title}
                    </h1>

                    <p className="text-xl sm:text-2xl text-white/80 font-light max-w-3xl leading-relaxed">
                        {project.shortDesc} — {project.fullDesc}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-white/10">
                        <div>
                            <p className="text-[10px] text-white/80 uppercase tracking-widest mb-1">Role</p>
                            <p className="text-sm font-medium">{project.role}</p>
                        </div>
                        <div>
                            <p className="text-[10px] text-white/80 uppercase tracking-widest mb-1">Timeline</p>
                            <p className="text-sm font-medium">{project.timeline}</p>
                        </div>
                        <div>
                            <p className="text-[10px] text-white/80 uppercase tracking-widest mb-1">Client</p>
                            <p className="text-sm font-medium">{project.client}</p>
                        </div>
                        <div className="flex items-center gap-3">
                            {project.liveLink && (
                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-white/20 hover:bg-white hover:text-black transition-colors" aria-label="Live Project">
                                    <ExternalLink size={16} />
                                </a>
                            )}
                            {project.githubLink && (
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-white/20 hover:bg-white hover:text-black transition-colors" aria-label="Source Code">
                                    <Github size={16} />
                                </a>
                            )}
                        </div>
                    </div>
                </header>

                {/* Image Gallery Component */}
                <ProjectGallery images={allImages} projectTitle={project.title} />

                {/* Case Study Content */}
                <section className="space-y-24 max-w-3xl mx-auto mt-24">
                    {/* Challenge */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-semibold tracking-tight">The Challenge</h2>
                        <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 font-light text-white/80 leading-relaxed text-lg">
                            {project.caseStudy.challenge}
                        </div>
                    </div>

                    {/* Solution */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-semibold tracking-tight">The Solution</h2>
                        <div className="font-light text-white/80 leading-relaxed text-lg space-y-4">
                            <p>{project.caseStudy.solution}</p>
                        </div>
                    </div>

                    {/* Key Outcomes */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-semibold tracking-tight">Key Outcomes</h2>
                        <ul className="space-y-4">
                            {project.caseStudy.outcomes.map((outcome, idx) => (
                                <li key={idx} className="flex gap-4 p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                                    <span className="text-sm font-mono text-white/80 mt-1">0{idx + 1}</span>
                                    <p className="text-white/80 font-light">{outcome}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Current Situation */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-semibold tracking-tight">Current Situation</h2>
                        <p className="font-light text-white/80 leading-relaxed text-lg">
                            {project.caseStudy.currentSituation}
                        </p>
                    </div>
                </section>

                {/* Project Navigation Footer */}
                <div className="mt-32 pt-12 border-t border-white/10 flex justify-center">
                    <Link href="/#projects" className="px-8 py-4 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-colors">
                        Return to Portfolio
                    </Link>
                </div>
            </article>

            <Footer />
        </main>
    )
}
