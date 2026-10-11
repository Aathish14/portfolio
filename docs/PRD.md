# Product Requirements Document (PRD)

## 1. Product Overview
A single-page, high-performance personal portfolio website showcasing the engineering work, research, experience, skills, and credentials of **Aathish Rao A. B.**

## 2. Target Audience
- Technical Recruiters
- Engineering Hiring Managers
- Academic & Open-Source Collaborators

## 3. Tech Stack
- **Framework:** Next.js 16.4.0 (Turbopack)
- **UI Runtime:** React 19.3.0 / React-DOM 19.3.0
- **3D Graphics:** Three.js 0.186.0
- **3D React Integration:** React Three Fiber (R3F) 9.8.1
- **3D Helpers:** Drei 10.7.9
- **Post-processing:** @react-three/postprocessing 3.2.0
- **Smooth Scrolling:** Lenis 1.3.26
- **Animations & Gestures:** Motion 14.1.0
- **Styling:** Vanilla CSS (CSS Grid, custom properties, responsive layout)

## 4. Key Sections
1. **Hero Section:**
   - Name: Aathish Rao A. B.
   - Headline / Role: Final-year B.E. Computer Science and Engineering student focused on AI/ML, backend development, and cloud technologies; interested in reliable, scalable software.
   - Interactive 3D visual element (procedural glass icosahedron) with WebGL fallback and reduced-motion handling.
2. **Work / Selected Projects:**
   - **The Shifting Threat:** Research system studying resilience, reliability, security, and trustworthiness of algorithmic Forex systems under changing market conditions. Focus: distribution shift, concept drift, market-regime detection.
   - **Cloud Cost Forecasting & Spend Anomaly Detection:** FinOps platform unifying AWS Cost & Usage Reports and GCP Billing Export. Prophet 7–30 day forecasts, residual-based Isolation Forest anomaly detection, MLflow, Streamlit.
   - **Enterprise LLM Trust Framework:** Multi-provider evaluation/monitoring for factual correctness, hallucination, semantic similarity, response quality, toxicity/safety. Pipeline: generation → evaluation → critique → correction → re-evaluation. Composite trust scoring, MLflow, Streamlit.
3. **Experience:**
   - AI/ML Intern — White And Box – Tech Products & Services (Bengaluru | June – July 2026).
   - Contributed to Context Assembly Framework (CAF): modular platform converting structured business requirements into standardized AI-ready instructions. Backend context processing, instruction assembly, versioning, configuration-driven workflows, validation, Pydantic models, NVIDIA NIM connectivity, Streamlit, SQLite, testing, debugging, documentation.
4. **Skills:**
   - Languages: Python, Java, C, Rust, Solidity, JavaScript/TypeScript
   - AI/ML: PyTorch, TensorFlow/Keras, scikit-learn, Prophet, LLM evaluation, MLflow, prompt engineering, RAG, AI agents
   - Backend & Cloud: FastAPI, Spring Boot, Node/Express, REST, Docker, AWS, GCP
   - Data & Tools: pandas, NumPy, MongoDB, SQLite, Streamlit, Hugging Face, Git/GitHub, SQL, probability, statistics
5. **Education:**
   - SRM Madurai College for Engineering and Technology
   - B.E. CSE | 2023 – May 2027 | CGPA 7.81
   - Minor: MBA Entrepreneurship | Tamil Nadu, India
6. **Credentials:**
   - NPTEL Blockchain and its Applications (62/100, April 2025)
   - Google Cloud Gemini Enterprise Agent Ready (March 2026)
   - HackerRank Orchestrate global rank #1163
   - Code Resurrection 2026 Port Mortem finalist (natsort-rs)
7. **Contact & Links:**
   - Email: aathi.shhh@gmail.com
   - GitHub: [github.com/Aathish14](https://github.com/Aathish14)
   - LeetCode: [leetcode.com/Aathish_14](https://leetcode.com/Aathish_14)
   - LinkedIn: [linkedin.com/in/aathish-rao-a-b-881708298](https://linkedin.com/in/aathish-rao-a-b-881708298)
   - Repositories:
     - [github.com/Aathish14/The-Shifting-Threat-Assessing-the-Resilience-of-Algorithmic-Forex-Trading-Systems](https://github.com/Aathish14/The-Shifting-Threat-Assessing-the-Resilience-of-Algorithmic-Forex-Trading-Systems)
     - [github.com/Aathish14/FinOps](https://github.com/Aathish14/FinOps)
     - [github.com/Aathish14/Enterprise-LLM-Trust-Framework](https://github.com/Aathish14/Enterprise-LLM-Trust-Framework)
     - [github.com/Aathish14/natsort-rs](https://github.com/Aathish14/natsort-rs)

## 5. Non-Goals
- No CMS integration.
- No blogging platform or markdown engine for articles.
- No third-party tracking or analytics scripts.
- No backend server/API endpoints (static/client-side single page).
- **No phone number publication** (strict privacy constraint).
- No invented or unverified claims/metrics.

## 6. Success Metrics & Quality Standards
- **Clean Builds:** Zero compiler or linter errors with `npm run build`.
- **Responsive Layout:** Pixel-perfect behavior on desktop (1440×900) and mobile (390×844) viewports.
- **Link Integrity:** All external links include `target="_blank"` and `rel="noopener noreferrer"`.
- **Resilience:** Graceful WebGL fallback if WebGL context creation fails.
- **Accessibility:** Respects user `prefers-reduced-motion` settings.
