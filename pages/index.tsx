import React from 'react'
import Head from 'next/head'

interface CasinoData {
  name: string
  description: string
  url: string
  language_code: string
  allow_indexing: boolean
  redirect_404s_to_homepage: boolean
  use_www_version: boolean
  // Luxury Casino specific fields
  luxury_hero_title?: string
  luxury_hero_subtitle?: string
  luxury_cta_text?: string
  luxury_features?: string
  luxury_logo_url?: string
}

export default function LuxuryCasino() {
  const data: CasinoData = require('../data.json')

  return (
    <>
      <Head>
        <title>{data.name}</title>
        <meta name="description" content={data.description} />
        <meta name="robots" content={data.allow_indexing ? 'index,follow' : 'noindex,nofollow'} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Playfair Display', serif;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          color: #e0e0e0;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 30px 0;
          border-bottom: 2px solid #d4af37;
        }

        .logo {
          font-size: 28px;
          font-weight: bold;
          color: #d4af37;
          text-decoration: none;
        }

        nav a {
          color: #e0e0e0;
          text-decoration: none;
          margin-left: 30px;
          transition: color 0.3s;
        }

        nav a:hover {
          color: #d4af37;
        }

        .hero {
          text-align: center;
          padding: 100px 0;
          background: linear-gradient(180deg, rgba(212, 175, 55, 0.1) 0%, transparent 100%);
        }

        .hero h1 {
          font-size: 64px;
          color: #d4af37;
          margin-bottom: 20px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        .hero p {
          font-size: 20px;
          color: #e0e0e0;
          margin-bottom: 40px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-button {
          background: linear-gradient(135deg, #d4af37 0%, #f4d03f 100%);
          color: #1a1a2e;
          padding: 15px 40px;
          font-size: 18px;
          font-weight: bold;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          transition: transform 0.3s, box-shadow 0.3s;
          text-decoration: none;
          display: inline-block;
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(212, 175, 55, 0.4);
        }

        .features {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          padding: 80px 0;
        }

        .feature {
          background: rgba(255, 255, 255, 0.05);
          padding: 30px;
          border-radius: 10px;
          border: 1px solid #d4af37;
          text-align: center;
        }

        .feature h3 {
          color: #d4af37;
          margin-bottom: 15px;
          font-size: 24px;
        }

        .feature p {
          color: #b0b0b0;
          line-height: 1.6;
        }

        footer {
          text-align: center;
          padding: 40px 0;
          border-top: 2px solid #d4af37;
          color: #888;
          margin-top: 80px;
        }

        @media (max-width: 768px) {
          .hero h1 {
            font-size: 40px;
          }

          .features {
            grid-template-columns: 1fr;
          }

          nav a {
            margin-left: 15px;
            font-size: 14px;
          }
        }
      `}</style>

      <div className="container">
        <header>
          <div className="logo">{data.luxury_logo_url || '🎰'}</div>
          <nav>
            <a href="#games">Games</a>
            <a href="#promotions">Promotions</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <section className="hero">
          <h1>{data.luxury_hero_title || 'Welcome to Luxury Casino'}</h1>
          <p>{data.luxury_hero_subtitle || 'Experience the finest gaming entertainment'}</p>
          <button className="cta-button">{data.luxury_cta_text || 'Play Now'}</button>
        </section>

        <section className="features">
          <div className="feature">
            <h3>🎮 Premium Games</h3>
            <p>Access exclusive casino games with stunning graphics and smooth gameplay</p>
          </div>
          <div className="feature">
            <h3>💎 VIP Rewards</h3>
            <p>Earn loyalty points and unlock exclusive VIP benefits</p>
          </div>
          <div className="feature">
            <h3>🔒 Secure & Fair</h3>
            <p>Licensed and regulated with advanced security measures</p>
          </div>
        </section>

        <footer>
          <p>&copy; 2024 {data.name}. All rights reserved. {data.url}</p>
        </footer>
      </div>
    </>
  )
}


