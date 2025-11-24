import Link from 'next/link';
import Image from 'next/image';
import { getLatestPosts } from '@/lib/blog'; // Assure-toi que le chemin est bon

export default async function LatestPostsSection() {
  // Récupération des données directement dans le composant
  const latestPosts = getLatestPosts(2);

  // Si pas d'articles, on n'affiche rien pour éviter une section vide
  if (!latestPosts || latestPosts.length === 0) return null;

  return (
    <section className="relative section-padding bg-noir overflow-hidden border-t border-white/10">
        <div className="container-custom">
          
          {/* Titre */}
          <div className="flex flex-col lg:flex-row justify-between items-end mb-12 lg:mb-20">
            <h2 className="inline">
              <span 
                className="text-blanc font-bold"
                style={{ fontSize: 'clamp(63px, 6.25vw, 90px)', fontFamily: 'var(--font-inter)' }}
              >
                Actuality
              </span>
              <span 
                className="text-blanc font-light italic ml-4"
                style={{ fontSize: 'clamp(49px, 4.86vw, 70px)', fontFamily: 'var(--font-instrument)' }}
              >
                ( crousti )
              </span>
            </h2>
            
            <Link 
              href="/blog"
              className="group flex items-center gap-2 text-blanc hover:text-orange transition-colors duration-300 mt-6 lg:mt-0"
            >
              <span className="font-bold uppercase tracking-wider" style={{ fontFamily: 'var(--font-inter)' }}>
                See all posts
              </span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="transition-transform duration-300 group-hover:translate-x-2">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          {/* Articles */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {latestPosts.map((post) => (
              <Link 
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden mb-6 rounded-lg">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange text-blanc text-sm font-bold px-4 py-2 uppercase tracking-wider" style={{ fontFamily: 'var(--font-inter)' }}>
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-4 text-blanc/60 text-sm" style={{ fontFamily: 'var(--font-inter)' }}>
                  <span>{post.date}</span>
                  {/* <span>•</span>
                  <span>By {post.author}</span> */}
                </div>
                <h3 
                  className="text-blanc font-bold text-2xl lg:text-3xl mb-4 group-hover:text-orange transition-colors duration-300 line-clamp-2"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  {post.title}
                </h3>
                <p className="text-blanc/70 line-clamp-3 font-light" style={{ fontFamily: 'var(--font-inter)' }}>
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
  );
}