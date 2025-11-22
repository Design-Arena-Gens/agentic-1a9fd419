import { useState } from 'react'
import Head from 'next/head'

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <>
      <Head>
        <title>تعلم الإنجليزية بسهولة | كورس شامل</title>
        <meta name="description" content="كورس متكامل لتعلم اللغة الإنجليزية من الصفر حتى الاحتراف" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap" rel="stylesheet" />
      </Head>

      <main className="container">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1 className="title">
              <span className="highlight">تعلم الإنجليزية</span>
              <br />
              من الصفر حتى الاحتراف
            </h1>
            <p className="subtitle">
              كورس شامل ومتكامل يأخذك خطوة بخطوة لإتقان اللغة الإنجليزية
            </p>
            <div className="stats">
              <div className="stat">
                <div className="stat-number">50+</div>
                <div className="stat-label">ساعة تدريبية</div>
              </div>
              <div className="stat">
                <div className="stat-number">12</div>
                <div className="stat-label">مستوى تعليمي</div>
              </div>
              <div className="stat">
                <div className="stat-number">10K+</div>
                <div className="stat-label">طالب نجح</div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="video-section">
          <div className="video-container">
            <div className={`video-placeholder ${isPlaying ? 'playing' : ''}`}>
              <div className="video-overlay" onClick={() => setIsPlaying(!isPlaying)}>
                {!isPlaying && (
                  <button className="play-button">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                      <circle cx="40" cy="40" r="40" fill="white" fillOpacity="0.9"/>
                      <path d="M32 25L55 40L32 55V25Z" fill="#2563eb"/>
                    </svg>
                  </button>
                )}
              </div>
              {isPlaying && (
                <div className="video-content">
                  <div className="animated-wave">
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                  </div>
                  <p className="playing-text">شاهد الفيديو التعريفي</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features">
          <h2 className="section-title">ماذا ستتعلم في هذا الكورس؟</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h3>القواعد الأساسية</h3>
              <p>تعلم قواعد اللغة الإنجليزية بطريقة سهلة ومبسطة</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🗣️</div>
              <h3>المحادثة والنطق</h3>
              <p>تحدث الإنجليزية بثقة مع تمارين عملية يومية</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">✍️</div>
              <h3>الكتابة الاحترافية</h3>
              <p>اكتب رسائل ومستندات باللغة الإنجليزية باحترافية</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👂</div>
              <h3>الاستماع والفهم</h3>
              <p>طور مهارات الاستماع وفهم المحادثات المختلفة</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📖</div>
              <h3>المفردات اليومية</h3>
              <p>احفظ آلاف الكلمات المستخدمة في الحياة العملية</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>اختبارات تفاعلية</h3>
              <p>قيّم مستواك باستمرار من خلال اختبارات شاملة</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-content">
            <h2 className="cta-title">ابدأ رحلتك في تعلم الإنجليزية اليوم!</h2>
            <p className="cta-subtitle">سجل الآن واحصل على خصم 50% - العرض محدود</p>

            <form onSubmit={handleSubmit} className="signup-form">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="email-input"
              />
              <button type="submit" className="cta-button">
                {submitted ? '✓ تم التسجيل!' : 'سجل الآن'}
              </button>
            </form>

            <div className="guarantee">
              <p>✓ ضمان استرداد المال خلال 30 يوم</p>
              <p>✓ شهادة معتمدة عند الانتهاء</p>
              <p>✓ وصول مدى الحياة لجميع المحتويات</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <p>© 2024 كورس تعلم الإنجليزية - جميع الحقوق محفوظة</p>
        </footer>
      </main>
    </>
  )
}
