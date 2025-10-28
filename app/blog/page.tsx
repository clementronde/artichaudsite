import type { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Blog - Artichaud Studio | Actualités Design & Marketing Digital',
  description: 'Découvrez nos articles sur le design, le branding, le webdesign et les dernières tendances en marketing digital. Conseils et inspirations par Artichaud Studio.',
  keywords: ['blog design', 'articles branding', 'tendances webdesign', 'marketing digital', 'conseils créatifs'],
  openGraph: {
    title: 'Blog - Artichaud Studio',
    description: 'Articles, conseils et inspirations sur le design et le marketing digital.',
    url: 'https://artichaud.studio/blog',
    siteName: 'Artichaud Studio',
    locale: 'fr_FR',
    type: 'website',
  },
};

// Données d'exemple pour les articles de blog
const blogPosts = [
  {
    id: 1,
    title: 'Les tendances du branding en 2025',
    excerpt: 'Découvrez les nouvelles approches qui redéfinissent l\'identité de marque cette année.',
    date: '15 Mars 2025',
    category: 'Branding',
    image: '/img/blog/branding-2025.jpg',
    slug: 'tendances-branding-2025',
  },
  {
    id: 2,
    title: 'Comment créer un webdesign efficace',
    excerpt: 'Les principes essentiels pour concevoir un site web qui convertit et engage.',
    date: '8 Mars 2025',
    category: 'Webdesign',
    image: '/img/blog/webdesign-efficace.jpg',
    slug: 'webdesign-efficace',
  },
  {
    id: 3,
    title: 'L\'importance de la stratégie digitale',
    excerpt: 'Pourquoi votre entreprise a besoin d\'une stratégie digitale claire et cohérente.',
    date: '1 Mars 2025',
    category: 'Stratégie',
    image: '/img/blog/strategie-digitale.jpg',
    slug: 'strategie-digitale',
  },
  {
    id: 4,
    title: 'Design système : construire une identité cohérente',
    excerpt: 'Comment mettre en place un design système pour garantir la cohérence de votre marque.',
    date: '22 Février 2025',
    category: 'Design',
    image: '/img/blog/design-system.jpg',
    slug: 'design-system',
  },
  {
    id: 5,
    title: 'Le storytelling au service de votre marque',
    excerpt: 'Racontez votre histoire de manière authentique pour créer une connexion émotionnelle.',
    date: '15 Février 2025',
    category: 'Branding',
    image: '/img/blog/storytelling.jpg',
    slug: 'storytelling-marque',
  },
  {
    id: 6,
    title: 'UX/UI : les meilleures pratiques 2025',
    excerpt: 'Les dernières tendances en expérience utilisateur et interface design.',
    date: '8 Février 2025',
    category: 'UX/UI',
    image: '/img/blog/ux-ui-2025.jpg',
    slug: 'ux-ui-pratiques-2025',
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen bg-noir text-blanc">
        {/* Hero Section */}
        <section className="section-padding border-b border-blanc/10">
          <div className="container-custom">
            <h1 className="mb-6">
              Blog <span className="font-instrument italic">(Insights)</span>
            </h1>
            <p 
              className="text-xl max-w-3xl text-blanc/70"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Découvrez nos articles, conseils et inspirations sur le design, le branding et le marketing digital.
            </p>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article 
                  key={post.id}
                  className="group bg-blanc/5 rounded-lg overflow-hidden border border-blanc/10 hover:border-orange/50 transition-all duration-300"
                >
                  <Link href={`/blog/${post.slug}`}>
                    {/* Image */}
                    <div className="relative h-64 bg-blanc/10 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-noir/60 to-transparent z-10" />
                      {/* Placeholder pour l'image */}
                      <div className="w-full h-full flex items-center justify-center text-blanc/30">
                        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                        </svg>
                      </div>
                      
                      {/* Catégorie badge */}
                      <div className="absolute top-4 left-4 z-20">
                        <span 
                          className="bg-orange px-3 py-1 rounded-full text-xs font-bold uppercase"
                          style={{ fontFamily: 'var(--font-inter)' }}
                        >
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Contenu */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <time 
                          className="text-sm text-blanc/50"
                          style={{ fontFamily: 'var(--font-inter)' }}
                        >
                          {post.date}
                        </time>
                      </div>

                      <h3 
                        className="text-xl font-bold mb-3 group-hover:text-orange transition-colors"
                        style={{ fontFamily: 'var(--font-inter)' }}
                      >
                        {post.title}
                      </h3>

                      <p 
                        className="text-blanc/70 text-sm mb-4"
                        style={{ fontFamily: 'var(--font-inter)' }}
                      >
                        {post.excerpt}
                      </p>

                      <span 
                        className="inline-flex items-center text-sm font-medium text-orange group-hover:gap-2 transition-all"
                        style={{ fontFamily: 'var(--font-inter)' }}
                      >
                        Lire l'article
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-blanc/5 border-t border-blanc/10">
          <div className="container-custom text-center">
            <h2 
              className="text-4xl font-bold mb-6"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Envie d'en savoir plus ?
            </h2>
            <p 
              className="text-xl text-blanc/70 mb-8 max-w-2xl mx-auto"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Abonnez-vous à notre newsletter pour recevoir nos derniers articles et conseils directement dans votre boîte mail.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-6 py-3 bg-blanc/5 border border-blanc/10 rounded-lg text-blanc placeholder:text-blanc/40 focus:outline-none focus:border-orange transition-colors"
                style={{ fontFamily: 'var(--font-inter)' }}
              />
              <button 
                type="submit"
                className="btn-primary whitespace-nowrap"
              >
                S'abonner
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}