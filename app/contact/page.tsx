'use client';

import Image from 'next/image';
import { useState, FormEvent, useRef } from 'react';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [messageError, setMessageError] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setMessageError('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        // ✨ Utilise setTimeout pour réinitialiser après que le state soit mis à jour
        setTimeout(() => {
          if (formRef.current) {
            formRef.current.reset();
          }
        }, 100);
      } else {
        setStatus('error');
        setMessageError(result.message || 'Échec de l\'envoi.');
      }
    } catch (error) {
      console.error('❌ Erreur complète:', error);
      setStatus('error');
      setMessageError('Une erreur est survenue lors de l\'envoi.');
    }
  };

  return (
    <>

      <main className="pt-24 min-h-screen bg-[#ffffff] text-[#F2F2F2]">
        <section className="section-padding pb-10">
          <div className="max-w-[1400px] mx-auto px-[clamp(1rem,3vw,3rem)]">
            <h1
              className="mb-8 leading-none"
              style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 800,
                fontSize: 'clamp(36px, 5.2vw, 72px)',
                letterSpacing: '-0.02em',
                color: '#000000',
              }}
            >
              Let's talk{' '}
              <span
                className="italic opacity-100"
                style={{
                  fontFamily: 'var(--font-instrument)',
                  fontWeight: 400,
                  color: '#000000',
                }}
              >
                (hot…)
              </span>
            </h1>

            <div className="rounded-sm bg-[#171717] border border-white/5">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Polaroid */}
                <div className="p-[clamp(16px,2.5vw,32px)] lg:p-12 flex items-center">
                  <div className="w-full">
                    <div
                      className="mx-auto w-[min(320px,80%)] rotate-[-6deg] shadow-2xl"
                      aria-hidden
                    >
                      <div className="bg-white p-3 pb-10 relative">
                        <div className="w-full aspect-[1/1] bg-gradient-to-br from-[#FF3B00] to-[#FF8A00] grid place-items-center relative">
                          <Image
                            src="/img/logonavbar.png"
                            alt="Logo Artichaud"
                            fill
                            sizes="(max-width: 768px) 30vw, 15vw"
                            className="object-contain p-4 opacity-95"
                          />
                        </div>
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-black/80" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Formulaire */}
                <div className="p-[clamp(16px,2.5vw,32px)] lg:p-12">
                  <h2
                    className="mb-8 tracking-wide"
                    style={{ fontFamily: 'var(--font-inter)', fontWeight: 700 }}
                  >
                    CONTACT
                  </h2>

                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-10">
                    {/* Nom / Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-xs uppercase tracking-wider mb-3 opacity-70"
                        >
                          Nom
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          disabled={status === 'loading'}
                          className="w-full bg-transparent outline-none border-0 border-b border-white/15 focus:border-white/50 transition-colors py-2"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs uppercase tracking-wider mb-3 opacity-70"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          disabled={status === 'loading'}
                          className="w-full bg-transparent outline-none border-0 border-b border-white/15 focus:border-white/50 transition-colors py-2"
                        />
                      </div>
                    </div>

                    {/* Téléphone / Sujet */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-xs uppercase tracking-wider mb-3 opacity-70"
                        >
                          Téléphone
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          disabled={status === 'loading'}
                          className="w-full bg-transparent outline-none border-0 border-b border-white/15 focus:border-white/50 transition-colors py-2"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-xs uppercase tracking-wider mb-3 opacity-70"
                        >
                          Sujet
                        </label>
                        <input
                          id="subject"
                          name="subject"
                          type="text"
                          disabled={status === 'loading'}
                          className="w-full bg-transparent outline-none border-0 border-b border-white/15 focus:border-white/50 transition-colors py-2"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs uppercase tracking-wider mb-3 opacity-70"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        disabled={status === 'loading'}
                        className="w-full bg-transparent outline-none border-0 border-b border-white/15 focus:border-white/50 transition-colors py-2 resize-y"
                      />
                      <div className="h-[3px] w-full bg-white/5 mt-2 rounded"></div>
                    </div>

                    {/* Messages de statut */}
                    {status === 'success' && (
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                        <p className="text-green-400 font-semibold text-center">
                          ✅ Message envoyé avec succès !<br />
                          <span className="text-sm font-normal">Nous vous recontacterons sous 24h.</span>
                        </p>
                      </div>
                    )}
                    {status === 'error' && (
                      <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                        <p className="text-red-400 font-semibold text-center">
                          ❌ {messageError}
                        </p>
                      </div>
                    )}

                    {/* Bouton */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={status === 'loading' || status === 'success'}
                        className="group inline-flex items-center gap-3 bg-[#FF6F00] hover:bg-[#FF6F00]/90 text-white text-xs tracking-wider uppercase px-5 py-3 disabled:bg-gray-500 disabled:cursor-not-allowed transition-colors"
                        style={{ fontFamily: 'var(--font-inter)', fontWeight: 700 }}
                      >
                        <span className="inline-flex w-5 h-5 items-center justify-center bg-white text-[#FF6F00]">
                          {status === 'loading' ? (
                            <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                          ) : (
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                              <path
                                d="M5 12h14M13 5l7 7-7 7"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                        </span>
                        {status === 'loading' ? 'Envoi...' : status === 'success' ? 'Envoyé !' : 'Envoyer'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

    </>
  );
}