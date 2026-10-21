import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortfolioProjectDemo } from "@/components/portfolio-live-demos";
import { projects } from "@/data/portfolio";

const demoProject = {
  watermark: "watermark-enterprise-automation",
  qa: "qa-application",
  sentinel: "industrial-sentinel",
  geovision: "geovision",
} as const;

type DemoSlug = keyof typeof demoProject;
type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(demoProject).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!(slug in demoProject)) return {};
  const project = projects.find((item) => item.slug === demoProject[slug as DemoSlug]);
  if (!project) return {};
  return {
    title: project.title + " · Interactive demo",
    description: "A public interactive sample for " + project.title + ". Uses synthetic or saved evidence and does not connect to client systems.",
    alternates: { canonical: "/demos/" + slug },
    robots: { index: true, follow: true },
  };
}

export default async function DemoPage({ params }: PageProps) {
  const { slug } = await params;
  if (!(slug in demoProject)) notFound();
  return <PortfolioProjectDemo slug={slug as DemoSlug} />;
}
