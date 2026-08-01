import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { articles, getArticleBySlug, type ArticleBlock } from "@/data/artikel";
import { siteConfig, waLink } from "@/data/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords,
    alternates: {
      canonical: `/artikel/${article.slug}`,
    },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      publishedTime: article.date,
      authors: [siteConfig.name],
      url: `${siteConfig.url}/artikel/${article.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
  };
}

function Block({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="mt-12 text-2xl font-bold text-slate-900 md:text-3xl">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="mt-8 text-xl font-semibold text-slate-900">
          {block.text}
        </h3>
      );
    case "p":
      return <p className="mt-6 leading-relaxed text-slate-600">{block.text}</p>;
    case "ul":
      return (
        <ul className="mt-6 space-y-3">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 text-slate-600">
              <span className="mt-1 text-accent-strong">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="mt-8 rounded-2xl border-l-4 border-accent-strong bg-surface/60 p-6 text-lg font-semibold text-slate-900">
          {block.text}
        </blockquote>
      );
    case "cta":
      return (
        <div className="mt-12 rounded-3xl border border-accent-strong/40 bg-surface p-8 text-center">
          <h3 className="text-xl font-bold text-slate-900">
            Ingin perhitungan biaya proyek yang akurat?
          </h3>
          <p className="mt-3 text-slate-600">
            Tim Cost Guard siap membantu menghitung RAB, audit BQ, dan
            mengendalikan biaya proyek Anda.
          </p>
          <a
            href={waLink("Halo Cost Guard, saya ingin konsultasi biaya proyek.")}
            className="mt-6 inline-block rounded-xl bg-accent px-8 py-4 font-semibold text-black transition hover:scale-105"
          >
            Konsultasi Gratis
          </a>
        </div>
      );
    default:
      return null;
  }
}

export default async function ArtikelDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: `${siteConfig.url}/artikel/${article.slug}`,
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <Navbar />
      <main className="bg-base pt-20">
        <article className="mx-auto max-w-3xl px-6 py-16">
          <Link
            href="/artikel"
            className="text-sm text-accent-strong hover:underline"
          >
            ← Kembali ke Artikel
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-accent-strong/40 px-3 py-1 text-xs text-accent-strong">
              {article.category}
            </span>
            <span className="text-sm text-slate-500">
              {article.readTime} baca
            </span>
            <span className="text-sm text-slate-500">
              {new Date(article.date).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>

          <h1 className="mt-6 text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
            {article.title}
          </h1>

          <p className="mt-6 text-lg text-slate-600">{article.description}</p>

          <div className="mt-12">
            {article.content.map((block, index) => (
              <Block key={index} block={block} />
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
