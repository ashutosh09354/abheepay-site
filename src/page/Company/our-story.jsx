
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const OurStory = () => {
  const pageMarkup = `
<style>

  :root{
    --ink:#FFFFFF;
    --panel:#F3F6FA;
    --panel-2:#E7EDF5;
    --gold:#14B8A6;
    --gold-soft:#0E7F73;
    --teal:#14B8A6;
    --paper:#0D1B36;
    --paper-dim:#55617A;
    --line:rgba(13,27,54,0.12);
    --radius:2px;
  }
  *{box-sizing:border-box;}
  html{scroll-behavior:smooth;}
  body{
    margin:0;
    background-color:var(--ink);
    background-image:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNjAiIGhlaWdodD0iMjYwIiB2aWV3Qm94PSIwIDAgMjYwIDI2MCI+CiAgPGcgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTRCOEE2IiBzdHJva2Utd2lkdGg9IjEuNCIgb3BhY2l0eT0iMC4xMCI+CiAgICA8IS0tIHBheW1lbnQgY2FyZCAtLT4KICAgIDxyZWN0IHg9IjE0IiB5PSIxOCIgd2lkdGg9IjQ2IiBoZWlnaHQ9IjMwIiByeD0iNCIvPgogICAgPHJlY3QgeD0iMTQiIHk9IjI2IiB3aWR0aD0iNDYiIGhlaWdodD0iNiIgZmlsbD0iIzE0QjhBNiIgc3Ryb2tlPSJub25lIi8+CiAgICA8IS0tIFFSIGJsb2NrIC0tPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTIwLDE0KSI+CiAgICAgIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiLz4KICAgICAgPHJlY3QgeD0iMTQiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiLz4KICAgICAgPHJlY3QgeD0iMCIgeT0iMTQiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiLz4KICAgICAgPHJlY3QgeD0iMTYiIHk9IjE2IiB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMTRCOEE2IiBzdHJva2U9Im5vbmUiLz4KICAgICAgPHJlY3QgeD0iMjgiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiLz4KICAgIDwvZz4KICAgIDwhLS0gY2hpcCAvIGFwaSBicmFja2V0cyAtLT4KICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE5MCwyMCkiPgogICAgICA8cGF0aCBkPSJNNiAwIEwwIDggTDYgMTYiLz4KICAgICAgPHBhdGggZD0iTTE4IDAgTDI0IDggTDE4IDE2Ii8+CiAgICAgIDxsaW5lIHgxPSIxMCIgeTE9IjAiIHgyPSIxNCIgeTI9IjE2Ii8+CiAgICA8L2c+CiAgICA8IS0tIHJ1cGVlIHN5bWJvbCAtLT4KICAgIDx0ZXh0IHg9IjMwIiB5PSIxMjAiIGZvbnQtZmFtaWx5PSJJQk0gUGxleCBNb25vLCBtb25vc3BhY2UiIGZvbnQtc2l6ZT0iMzAiIGZpbGw9IiMxNEI4QTYiIHN0cm9rZT0ibm9uZSI+4oK5PC90ZXh0PgogICAgPCEtLSB3YWxsZXQgLS0+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTAsOTgpIj4KICAgICAgPHJlY3QgeD0iMCIgeT0iNCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjI4IiByeD0iNCIvPgogICAgICA8cmVjdCB4PSIyNiIgeT0iMTQiIHdpZHRoPSIxNCIgaGVpZ2h0PSIxMCIgcng9IjIiLz4KICAgICAgPGNpcmNsZSBjeD0iMzMiIGN5PSIxOSIgcj0iMS42IiBmaWxsPSIjMTRCOEE2IiBzdHJva2U9Im5vbmUiLz4KICAgIDwvZz4KICAgIDwhLS0gY29udGFjdGxlc3Mgd2F2ZXMgLS0+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMDAsMTAwKSI+CiAgICAgIDxwYXRoIGQ9Ik0wIDIwIFExMCAxMCAwIDAiLz4KICAgICAgPHBhdGggZD0iTTYgMjAgUTIwIDEwIDYgMCIvPgogICAgICA8cGF0aCBkPSJNMTIgMjAgUTMwIDEwIDEyIDAiLz4KICAgIDwvZz4KICAgIDwhLS0gc291bmQgYm94IC8gUVIgc3RhbmQgLS0+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMCwxNzApIj4KICAgICAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjI2IiBoZWlnaHQ9IjM0IiByeD0iMyIvPgogICAgICA8cmVjdCB4PSI1IiB5PSI2IiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiLz4KICAgICAgPGNpcmNsZSBjeD0iMTMiIGN5PSIyNyIgcj0iMiIgZmlsbD0iIzE0QjhBNiIgc3Ryb2tlPSJub25lIi8+CiAgICA8L2c+CiAgICA8IS0tIGludm9pY2UgLyBkb2MgbGluZXMgLS0+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjAsMTY4KSI+CiAgICAgIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIzMCIgaGVpZ2h0PSIzOCIgcng9IjIiLz4KICAgICAgPGxpbmUgeDE9IjYiIHkxPSIxMCIgeDI9IjI0IiB5Mj0iMTAiLz4KICAgICAgPGxpbmUgeDE9IjYiIHkxPSIxNyIgeDI9IjI0IiB5Mj0iMTciLz4KICAgICAgPGxpbmUgeDE9IjYiIHkxPSIyNCIgeDI9IjE4IiB5Mj0iMjQiLz4KICAgIDwvZz4KICAgIDwhLS0gYXBpIG5vZGUgY2x1c3RlciAtLT4KICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE5NSwxODApIj4KICAgICAgPGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjMiLz4KICAgICAgPGNpcmNsZSBjeD0iMjQiIGN5PSIxMCIgcj0iMyIvPgogICAgICA8Y2lyY2xlIGN4PSI2IiBjeT0iMjYiIHI9IjMiLz4KICAgICAgPGxpbmUgeDE9IjAiIHkxPSIwIiB4Mj0iMjQiIHkyPSIxMCIvPgogICAgICA8bGluZSB4MT0iMCIgeTE9IjAiIHgyPSI2IiB5Mj0iMjYiLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo=");
    background-repeat:repeat;
    background-size:260px 260px;
    background-attachment:fixed;
    color:var(--paper);
    font-family:'IBM Plex Sans', sans-serif;
    line-height:1.6;
    -webkit-font-smoothing:antialiased;
  }
  h1,h2,h3{
    font-family:'Fraunces', serif;
    font-weight:600;
    margin:0;
    letter-spacing:-0.01em;
  }
  .eyebrow{
    font-family:'IBM Plex Mono', monospace;
    font-size:0.72rem;
    letter-spacing:0.18em;
    text-transform:uppercase;
    color:var(--gold);
    display:flex;
    align-items:center;
    gap:0.6em;
  }
  .eyebrow::before{
    content:"";
    width:22px;
    height:1px;
    background:var(--gold);
    display:inline-block;
  }
  .wrap{
    max-width:1080px;
    margin:0 auto;
    padding:0 32px;
  }
  a{color:inherit;}

  /* HERO */
  .hero{
    padding:120px 0 96px;
    position:relative;
    overflow:hidden;
    border-bottom:1px solid var(--line);
  }
  .hero .wrap{position:relative; z-index:2;}
  .hero h1{
    font-size:clamp(2.4rem, 5vw, 4rem);
    max-width:820px;
    margin-top:22px;
    line-height:1.08;
  }
  .hero p.lede{
    max-width:560px;
    margin-top:26px;
    font-size:1.08rem;
    color:var(--paper-dim);
  }
  .hero-graphic{
    position:absolute;
    right:-60px; top:50%; transform:translateY(-46%);
    width:520px; height:520px;
    opacity:0.9;
    z-index:1;
  }
  @media (max-width:900px){ .hero-graphic{display:none;} }

  /* CONVERGE NODE ANIMATION */
  .node{ fill:var(--panel-2); stroke:var(--line); stroke-width:1; }
  .node-core{ fill:var(--gold); }
  .path-line{
    stroke:var(--gold-soft);
    stroke-width:1;
    fill:none;
    stroke-dasharray:4 5;
    opacity:0.55;
  }
  .pulse{
    fill:var(--teal);
    opacity:0;
    animation:travel 4.5s linear infinite;
  }
  @keyframes travel{
    0%{opacity:0; offset-distance:0%;}
    8%{opacity:1;}
    85%{opacity:1;}
    100%{opacity:0; offset-distance:100%;}
  }
  @media (prefers-reduced-motion: reduce){
    .pulse{animation:none; opacity:0;}
  }

  /* SECTION SCAFFOLD */
  section{ padding:96px 0; border-bottom:1px solid var(--line); }
  section.tight{ padding:72px 0; }
  .section-head{ max-width:640px; margin-bottom:52px; }
  .section-head h2{ font-size:clamp(1.7rem,3vw,2.3rem); margin-top:16px; }
  .section-head p{ color:var(--paper-dim); margin-top:16px; font-size:1rem; max-width:560px; }

  /* WHY WE STARTED - two column */
  .why-grid{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:64px;
    align-items:start;
  }
  @media (max-width:820px){ .why-grid{grid-template-columns:1fr;} }
  .why-grid .statement{
    font-family:'Fraunces', serif;
    font-size:1.5rem;
    line-height:1.4;
    color:var(--paper);
  }
  .why-grid .statement em{
    font-style:normal;
    color:var(--gold);
  }
  .fragment-diagram{ width:100%; height:auto; }

  /* PILLARS */
  .pillars{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:1px;
    background:var(--line);
    border:1px solid var(--line);
  }
  @media (max-width:860px){ .pillars{grid-template-columns:1fr;} }
  .pillar{
    background:var(--panel);
    padding:36px 32px 40px;
  }
  .pillar .tag{
    font-family:'IBM Plex Mono', monospace;
    font-size:0.7rem;
    letter-spacing:0.12em;
    text-transform:uppercase;
    color:var(--teal);
  }
  .pillar h3{
    font-size:1.28rem;
    margin-top:14px;
    line-height:1.25;
  }
  .pillar p.desc{
    color:var(--paper-dim);
    font-size:0.92rem;
    margin-top:12px;
  }
  .pillar ul{
    list-style:none;
    margin:22px 0 0;
    padding:0;
    border-top:1px solid var(--line);
    padding-top:18px;
  }
  .pillar li{
    font-size:0.88rem;
    color:var(--paper);
    padding:7px 0;
    display:flex;
    align-items:baseline;
    gap:10px;
  }
  .pillar li::before{
    content:"";
    width:5px; height:5px;
    background:var(--gold);
    border-radius:50%;
    flex:none;
    transform:translateY(-2px);
  }

  /* GROWING WITH CUSTOMERS - quote panel */
  .quote-panel{
    background:var(--panel);
    padding:56px;
    border-left:2px solid var(--gold);
  }
  @media (max-width:600px){ .quote-panel{padding:36px 24px;} }
  .quote-panel p.big{
    font-family:'Fraunces', serif;
    font-size:clamp(1.3rem,2.6vw,1.7rem);
    line-height:1.45;
    max-width:760px;
  }
  .quote-panel p.support{
    margin-top:22px;
    color:var(--paper-dim);
    max-width:640px;
    font-size:0.98rem;
  }

  /* MORE THAN + LOOKING AHEAD split */
  .split{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:64px;
  }
  @media (max-width:820px){ .split{grid-template-columns:1fr; gap:48px;} }
  .split h3{ font-size:1.35rem; }
  .split .eyebrow{ margin-bottom:12px; }
  .split p{ color:var(--paper-dim); margin-top:14px; font-size:0.98rem; }

  /* VALUES */
  .values{
    display:flex;
    flex-wrap:wrap;
    gap:14px;
    margin-top:8px;
  }
  .value-chip{
    border:1px solid var(--line);
    padding:14px 20px;
    font-family:'IBM Plex Mono', monospace;
    font-size:0.85rem;
    color:var(--paper);
    background:var(--panel);
    transition:border-color .2s, color .2s;
  }
  .value-chip:hover{ border-color:var(--gold); color:var(--gold); }

  /* EXPLORE LINKS */
  .explore-grid{
    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:1px;
    background:var(--line);
    border:1px solid var(--line);
  }
  @media (max-width:760px){ .explore-grid{grid-template-columns:repeat(2,1fr);} }
  .explore-grid a{
    background:var(--panel);
    padding:26px 22px;
    text-decoration:none;
    font-size:0.92rem;
    display:flex;
    align-items:center;
    justify-content:space-between;
    transition:background .2s, color .2s;
  }
  .explore-grid a:hover{ background:var(--panel-2); color:var(--gold); }
  .explore-grid a::after{ content:"→"; opacity:0.5; }

  /* CTA FOOTER */
  footer.cta{
    padding:110px 0 90px;
    text-align:center;
    background:radial-gradient(ellipse at 50% 0%, rgba(20,184,166,0.10), transparent 60%);
    border-bottom:none;
  }
  footer.cta h2{
    font-size:clamp(1.8rem,4vw,2.6rem);
    max-width:700px;
    margin:0 auto;
    line-height:1.2;
  }
  footer.cta p{
    color:var(--paper-dim);
    max-width:520px;
    margin:22px auto 0;
    font-size:1rem;
  }
  .cta-buttons{
    display:flex; gap:16px; justify-content:center; margin-top:40px;
    flex-wrap:wrap;
  }
  .btn{
    padding:14px 30px;
    font-family:'IBM Plex Sans', sans-serif;
    font-size:0.92rem;
    font-weight:500;
    text-decoration:none;
    border-radius:var(--radius);
    transition:transform .2s, background .2s, color .2s;
    display:inline-block;
  }
  .btn:focus-visible{ outline:2px solid var(--gold); outline-offset:3px; }
  .btn-primary{
    background:var(--gold);
    color:var(--ink);
  }
  .btn-primary:hover{ transform:translateY(-2px); }
  .btn-ghost{
    border:1px solid var(--line);
    color:var(--paper);
  }
  .btn-ghost:hover{ border-color:var(--gold); color:var(--gold); }

  .foot-note{
    margin-top:64px;
    font-family:'IBM Plex Mono', monospace;
    font-size:0.72rem;
    color:var(--paper-dim);
    letter-spacing:0.04em;
  }

</style>


<header class="hero">
  <div class="wrap">
    <div class="eyebrow">Our Story</div>
    <h1>Building technology<br>that helps businesses grow.</h1>
    <p class="lede">Every successful business starts with a simple idea. For AbheePay, that idea was to make digital payments and business technology easier, more accessible, and more reliable — for businesses across India.</p>
  </div>

  <svg class="hero-graphic" viewBox="0 0 520 520" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <path id="p1" d="M 90 90 C 150 150, 200 200, 300 260"/>
      <path id="p2" d="M 90 430 C 150 380, 200 320, 300 260"/>
      <path id="p3" d="M 430 90 C 370 150, 330 200, 300 260"/>
      <path id="p4" d="M 470 300 C 400 290, 350 275, 300 260"/>
      <path id="p5" d="M 60 260 C 150 260, 220 260, 300 260"/>
    </defs>
    <path class="path-line" d="M 90 90 C 150 150, 200 200, 300 260"/>
    <path class="path-line" d="M 90 430 C 150 380, 200 320, 300 260"/>
    <path class="path-line" d="M 430 90 C 370 150, 330 200, 300 260"/>
    <path class="path-line" d="M 470 300 C 400 290, 350 275, 300 260"/>
    <path class="path-line" d="M 60 260 C 150 260, 220 260, 300 260"/>

    <circle class="node" cx="90" cy="90" r="9"/>
    <circle class="node" cx="90" cy="430" r="9"/>
    <circle class="node" cx="430" cy="90" r="9"/>
    <circle class="node" cx="470" cy="300" r="9"/>
    <circle class="node" cx="60" cy="260" r="9"/>

    <circle class="node-core" cx="300" cy="260" r="20"/>

    <circle class="pulse" r="3.4" style="offset-path:url(#p1)"/>
    <circle class="pulse" r="3.4" style="offset-path:url(#p2); animation-delay:0.9s;"/>
    <circle class="pulse" r="3.4" style="offset-path:url(#p3); animation-delay:1.8s;"/>
    <circle class="pulse" r="3.4" style="offset-path:url(#p4); animation-delay:2.7s;"/>
    <circle class="pulse" r="3.4" style="offset-path:url(#p5); animation-delay:3.6s;"/>
  </svg>
</header>

<section id="why">
  <div class="wrap">
    <div class="why-grid">
      <div>
        <div class="eyebrow">Why We Started</div>
        <p class="statement" style="margin-top:20px;">Our journey began with one clear objective: to help businesses access everything they need to grow through <em>one trusted technology platform.</em></p>
      </div>
      <div>
        <p style="color:var(--paper-dim); font-size:0.98rem;">As businesses embraced digital transformation, many still juggled multiple providers for payments, business banking, APIs, and technology — adding complexity, cost, and support overhead with every new connection.</p>
        <p style="color:var(--paper-dim); font-size:0.98rem; margin-top:16px;">We believed businesses deserved a simpler approach. So instead of building a single product, we set out to build an integrated ecosystem — payments, business services, APIs, and enterprise technology, together. That belief became the foundation of AbheePay.</p>
      </div>
    </div>
  </div>
</section>

<section id="building">
  <div class="wrap">
    <div class="section-head">
      <div class="eyebrow">What We Are Building</div>
      <h2>One ecosystem, built for every stage of growth.</h2>
      <p>AbheePay continues to develop solutions that support businesses at every stage of their digital journey.</p>
    </div>
  </div>
  <div class="wrap" style="padding:0 32px;">
    <div class="pillars">
      <div class="pillar">
        <div class="tag">Payments</div>
        <h3>Digital Payment Solutions</h3>
        <p class="desc">Helping businesses collect payments securely through modern payment technologies.</p>
        <ul>
          <li>Payment Gateway</li>
          <li>Payment Links</li>
          <li>QR Payment Solution</li>
          <li>QR Sound Box</li>
          <li>POS Machine</li>
          <li>Merchant App</li>
          <li>Digital Invoice</li>
        </ul>
      </div>
      <div class="pillar">
        <div class="tag">Developers</div>
        <h3>API Platform</h3>
        <p class="desc">Secure APIs for developers and businesses to integrate financial and payment services into their applications.</p>
        <ul>
          <li>Payment Gateway API</li>
          <li>Payout API</li>
          <li>BBPS API</li>
          <li>Wallet API</li>
          <li>QR API</li>
          <li>Recharge API</li>
          <li>Aadhaar Verification API</li>
        </ul>
      </div>
      <div class="pillar">
        <div class="tag">Enterprise</div>
        <h3>Business Technology</h3>
        <p class="desc">Custom technology solutions that improve efficiency and accelerate digital transformation.</p>
        <ul>
          <li>Website Development</li>
          <li>Mobile Application Development</li>
          <li>Custom Software Development</li>
          <li>API Integration</li>
          <li>White Label Payment Solutions</li>
          <li>Enterprise Technology Solutions</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section id="customers">
  <div class="wrap">
    <div class="eyebrow" style="margin-bottom:20px;">Growing With Our Customers</div>
    <div class="quote-panel">
      <p class="big">Every business is unique — a neighbourhood retailer, an expanding distributor, a growing startup, or a large enterprise all have different goals and challenges.</p>
      <p class="support">That's why we focus on building flexible technology that adapts to different business models while providing reliable performance and long-term scalability. As our customers grow, we keep improving our products, expanding our services, and investing in new technology to support their success.</p>
    </div>
  </div>
</section>

<section class="tight">
  <div class="wrap">
    <div class="split">
      <div>
        <div class="eyebrow">More Than a Provider</div>
        <h3 style="margin-top:16px;">A long-term business partner.</h3>
        <p>At AbheePay, we aim to be more than a software or payment provider. We strive to help organisations adopt digital solutions, improve operational efficiency, and create better experiences for their customers. Our success is measured by the success of the businesses we serve.</p>
      </div>
      <div>
        <div class="eyebrow">Looking Ahead</div>
        <h3 style="margin-top:16px;">Investing in what comes next.</h3>
        <p>We believe the future will be driven by secure payments, intelligent automation, API-first platforms, and connected business ecosystems. We'll keep investing in innovation and expanding our portfolio — building solutions for the next generation of digital commerce, and lasting partnerships that grow with our customers.</p>
      </div>
    </div>
  </div>
</section>

<section id="values">
  <div class="wrap">
    <div class="eyebrow">Our Journey</div>
    <h2 style="margin-top:16px; font-size:clamp(1.6rem,3vw,2.1rem);">Our journey has only just begun.</h2>
    <p style="color:var(--paper-dim); max-width:560px; margin-top:16px; font-size:0.98rem;">As we continue to grow, we remain committed to the same principles that inspired AbheePay from the beginning.</p>
    <div class="values">
      <div class="value-chip">Build practical technology</div>
      <div class="value-chip">Keep solutions simple</div>
      <div class="value-chip">Support business growth</div>
      <div class="value-chip">Deliver reliable service</div>
      <div class="value-chip">Create lasting partnerships</div>
    </div>
  </div>
</section>

<section class="tight" style="border-bottom:none;">
  <div class="wrap">
    <div class="eyebrow" style="margin-bottom:20px;">Continue Exploring</div>
    <div class="explore-grid">
      <a href="#">Mission &amp; Vision</a>
      <a href="#">Leadership Team</a>
      <a href="#">Careers</a>
      <a href="#">News &amp; Updates</a>
    </div>
  </div>
</section>

<footer class="cta">
  <div class="wrap">
    <div class="eyebrow" style="justify-content:center;">Let's Build the Future Together</div>
    <h2 style="margin-top:18px;">Every business deserves technology that works for them — not technology they have to work around.</h2>
    <p>Whether you're looking for secure payment solutions, enterprise technology, API integration, or a trusted business partner, AbheePay is committed to helping you build, grow, and succeed.</p>
    <div class="cta-buttons">
      <a href="#" class="btn btn-primary">Contact Sales</a>
      <a href="#" class="btn btn-ghost">Become a Partner</a>
    </div>
    <div class="foot-note">ABHEEPAY — DIGITAL PAYMENTS &amp; BUSINESS TECHNOLOGY, INDIA</div>
  </div>
</footer>


`;

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <div dangerouslySetInnerHTML={{ __html: pageMarkup }} />
    </>
  );
};

export default OurStory;