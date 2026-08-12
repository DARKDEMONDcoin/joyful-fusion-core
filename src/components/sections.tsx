import { Link } from "@/lib/router";
import { Check, X } from "lucide-react";
import { tracks } from "@/lib/tracks";
import { company } from "@/lib/company";
import secTracks from "@/assets/sec-tracks.webp";
import secPsychology from "@/assets/sec-psychology.webp";
import secAi from "@/assets/sec-ai.webp";
import secProof from "@/assets/sec-proof.webp";
import p1 from "@/assets/p1.webp";
import p2 from "@/assets/p2.webp";
import p3 from "@/assets/p3.webp";
import p4 from "@/assets/p4.webp";
import p5 from "@/assets/p5.webp";
import p6 from "@/assets/p6.webp";

/* ============================ عناصر مشتركة ============================ */

function Head({
  title,
  accent,
  sub,
  center = false,
}: {
  title: string;
  accent?: string;
  sub?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto mb-12 max-w-2xl text-center" : "mb-12 max-w-3xl"}>
      <div
        className={`mb-5 flex items-center gap-3 ${center ? "justify-center" : ""}`}
        aria-hidden="true"
      >
        <span className="h-px w-10 bg-accent" />
        <span className="text-[11px] font-semibold tracking-[0.28em] text-accent">
          {accent ?? "ملف"}
        </span>
      </div>
      <h2 className="font-display text-[clamp(30px,5vw,52px)] font-bold leading-[1.15] text-foreground">
        {title}
      </h2>
      {sub && (
        <p className="mt-5 border-t border-border pt-5 text-base leading-[1.9] text-muted-foreground">
          {sub}
        </p>
      )}
    </div>
  );
}

function SectionVisual({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="mb-12 border border-border">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        width={1600}
        height={1008}
        className="editorial-img h-[220px] w-full object-cover sm:h-[320px]"
      />
      <figcaption className="border-t border-border px-4 py-2.5 text-[12px] text-muted-foreground">
        {alt}
      </figcaption>
    </figure>
  );
}

function PrimaryButton({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center justify-center border border-accent bg-accent px-8 py-4 text-[15px] font-semibold text-accent-foreground transition-colors duration-200 hover:bg-[--color-gold-soft] hover:border-[--color-gold-soft]"
    >
      {children}
    </Link>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return <div className="glass-card hover-lift p-7">{children}</div>;
}


/* ============================ شريط الشعارات ============================ */

const partnerLogos = [
  {
    name: "Google",
    path: "M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z",
  },
  {
    name: "Amazon",
    path: "M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.654-1.244.743-2.64 1.316-4.185 1.726a17.617 17.617 0 01-10.951-.577 17.88 17.88 0 01-5.43-3.35c-.1-.074-.151-.15-.151-.22 0-.047.021-.09.051-.13zm6.565-6.218c0-1.005.247-1.863.743-2.577.495-.71 1.17-1.25 2.04-1.615.796-.335 1.756-.575 2.912-.72.39-.046 1.033-.103 1.92-.174v-.37c0-.93-.105-1.558-.3-1.875-.302-.43-.78-.65-1.44-.65h-.182c-.48.046-.896.196-1.246.46-.35.27-.575.63-.675 1.096-.06.3-.206.465-.435.51l-2.52-.315c-.248-.06-.372-.18-.372-.39 0-.046.007-.09.022-.15.247-1.29.855-2.25 1.82-2.88.976-.616 2.1-.975 3.39-1.05h.54c1.65 0 2.957.434 3.888 1.29.135.15.27.3.405.48.12.165.224.314.283.45.075.134.15.33.195.57.06.254.105.42.135.51.03.104.062.3.076.615.01.313.02.493.02.553v5.28c0 .376.06.72.165 1.036.105.313.21.54.315.674l.51.674c.09.136.136.256.136.36 0 .12-.06.226-.18.314-1.2 1.05-1.86 1.62-1.963 1.71-.165.135-.375.15-.63.045a6.062 6.062 0 01-.526-.496l-.31-.347a9.391 9.391 0 01-.317-.42l-.3-.435c-.81.886-1.603 1.44-2.4 1.665-.494.15-1.093.227-1.83.227-1.11 0-2.04-.343-2.76-1.034-.72-.69-1.08-1.665-1.08-2.94l-.05-.076zm3.753-.438c0 .566.14 1.02.425 1.364.285.34.675.512 1.155.512.045 0 .106-.007.195-.02.09-.016.134-.023.166-.023.614-.16 1.08-.553 1.424-1.178.165-.28.285-.58.36-.91.09-.32.12-.59.135-.8.015-.195.015-.54.015-1.005v-.54c-.84 0-1.484.06-1.92.18-1.275.36-1.92 1.17-1.92 2.43l-.035-.02zm9.162 7.027c.03-.06.075-.11.132-.17.362-.243.714-.41 1.05-.5a8.094 8.094 0 011.612-.24c.14-.012.28 0 .41.03.65.06 1.05.168 1.172.33.063.09.099.228.099.39v.15c0 .51-.149 1.11-.424 1.8-.278.69-.664 1.248-1.156 1.68-.073.06-.14.09-.197.09-.03 0-.06 0-.09-.012-.09-.044-.107-.12-.064-.24.54-1.26.806-2.143.806-2.64 0-.15-.03-.27-.087-.344-.145-.166-.55-.257-1.224-.257-.243 0-.533.016-.87.046-.363.045-.7.09-1 .135-.09 0-.148-.014-.18-.044-.03-.03-.036-.047-.02-.077 0-.017.006-.03.02-.063v-.06z",
  },
  {
    name: "Alibaba.com",
    path: "M14.391 16.22c-.963.044-.865-.459-.302-1.234 1.32-1.768 3.82-4.236 3.906-5.982.151-2.283-2.143-3.026-4.501-3.004-1.645.022-3.344.492-4.501.906C5 8.315 2.489 10.576.909 13.076-.768 15.554-.216 17.923 3.322 18c2.716-.109 4.48-.862 6.32-1.802.01 0-5.086 1.453-6.958.383l-.008-.002c-.193-.11-.404-.264-.457-.683-.012-.885 1.46-1.802 2.283-2.097v-1.533a5.374 5.374 0 0 0 1.955.366 5.378 5.378 0 0 0 3.472-1.265c.037.13.056.278.044.447h.371c.048-.394-.172-.706-.172-.706-.333-.529-.915-.52-.915-.52s.315.137.529.466a4.953 4.953 0 0 1-4.665.932l1.21-1.2-.336-.874c2.435-.852 4.48-1.507 7.812-2.085l-.746-.624.389-.24c2.01.568 3.325.985 3.253 2.051a2.672 2.672 0 0 1-.202.611c-.584 1.158-2.326 3.09-3.029 3.898-.465.535-.92 1.06-1.245 1.562-.335.503-.54.971-.551 1.42.043 3.504 10.334-1.64 12.324-3.003-2.943 1.266-6.113 2.489-9.609 2.718Z",
  },
  {
    name: "GitHub",
    path: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
  },
  {
    name: "Supabase",
    path: "M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455h9.579l.113 7.51c.014.985 1.259 1.408 1.873.636l9.262-11.653c1.093-1.375.113-3.403-1.645-3.403h-9.642z",
  },
];

export function PartnersSection() {
  return (
    <section
      aria-label="شركات تثق بنا وتدعمنا"
      className="border-b border-border bg-secondary/25 py-10 md:py-12"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-14">
        <p className="text-center text-[11px] font-semibold tracking-[0.28em] text-muted-foreground">
          شركات تثق بنا وتدعمنا
        </p>

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-8 sm:gap-x-16">
          {partnerLogos.map((l) => (
            <li key={l.name} className="group flex flex-col items-center gap-2.5">
              <svg
                viewBox="0 0 24 24"
                role="img"
                aria-label={l.name}
                className="h-7 w-auto fill-foreground/45 transition-all duration-300 group-hover:fill-foreground sm:h-8"
              >
                <title>{l.name}</title>
                <path d={l.path} />
              </svg>
              <span className="text-[12px] font-medium tracking-wide text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                {l.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}


/* ============================ شريط الثقة ============================ */



export function TrustStrip() {
  const items = [
    ["متابعة لايف لكل مشترك", "جلسات مباشرة على شغلك إنت — مش فيديوهات مسجّلة وبس"],
    ["شركة مسجّلة في مصر", `س.ت ${company.commercialRegister} · ر.ض ${company.taxId}`],
    ["دفع مؤمّن بالكامل", "فيزا · ماستركارد · ميزة · محفظة موبايل"],
    ["وصول مدى الحياة", "تحديثات مجانية للأبد"],
  ];

  return (
    <section aria-label="ضمانات الثقة" className="border-b border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-4 px-6 py-8 sm:grid-cols-2 md:px-14 lg:grid-cols-4">
        {items.map(([t, d]) => (
          <div key={t} className="text-right">
            <p className="text-[14px] font-semibold text-foreground">{t}</p>
            <p className="mt-1 text-[12.5px] leading-relaxed text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


/* ============================ 1. الوجع ============================ */

export function PainSection() {
  const items = [
    {
      n: "01",
      t: "فلوسك بتتسرّب وإنت نايم",
      d: "المبلغ اللي في حسابك النهارده مش هو نفسه بعد سنة. مفيش تقشّف بيغطّي فرق العملة — الحل الوحيد إن الرقم نفسه يكبر، وبعملة بتقوى مش بتقل.",
    },
    {
      n: "02",
      t: "كل شهر بتعدّي = فلوس مكتوبة عليك خسرتها",
      d: "مش خدمات وبس. متجر إلكتروني، منتج دروبشيبنج، أو نظام AI بتبيعه لشركة — أي باب من دول لو كان هيجيبلك من 300 لـ 3000 دولار في الشهر، يبقى كل شهر بتأجّله ده رقم بتتنازل عنه بإيدك.",
    },
    {
      n: "03",
      t: "الفلوس بتتوزّع في الصامت",
      d: "مفيش حد بيحكي إنه قفل عقد بـ 1500 دولار، ولا إن متجره باع بـ 40 ألف دولار الشهر ده، ولا إنه بيأجّر نظام AI لخمس شركات. السوق بيتقسّم دلوقتي على ناس بتتحرك، والباقي بيعرف بعد ما الفلوس تكون اتاخدت.",
    },
  ];

  return (
    <section id="pain" className="mx-auto max-w-6xl px-6 py-16 md:py-20 md:px-14">
      <Head
        title="إنت مش فقير وقت… إنت بتدفع تمن"
        accent="كل يوم بتأجّل فيه"
        sub="الكلام الجاي مش تحفيز. ده حساب. اقراه بهدوء وشوف كام فلوس ضاعت منك وإنت مستني الوقت المناسب."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {items.map((it) => (
          <Card key={it.n}>
            <span className="text-sm font-semibold tracking-[0.08em] text-accent">{it.n}</span>
            <h3 className="mb-3 mt-4 text-lg font-semibold text-foreground">{it.t}</h3>
            <p className="text-[15px] leading-relaxed text-muted-foreground">{it.d}</p>
          </Card>
        ))}
      </div>

      <p className="mt-10 max-w-2xl text-lg font-medium leading-relaxed text-foreground">
        السؤال مش «هل ينفع أكسب أونلاين؟» — ده بقى محسوم. السؤال الحقيقي:{" "}
        <span className="text-accent">الفلوس دي هتدخل جيبك، ولا جيب حد تاني اتحرك قبلك؟</span>
      </p>
    </section>
  );
}


/* ============================ 2. المسارات ============================ */

export function CourseSection() {
  return (
    <section id="course" className="border-t border-border py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-14">
        <SectionVisual src={secTracks} alt="لوحة تحكم متجر إلكتروني بتوضح المبيعات ونسبة التحويل" />
        <Head
          title="12 مسار دخل حقيقي — إنت تختار واحد وتنفّذه"
          accent="للنهاية"
          sub="مفيش «شوف اللي يعجبك». كل مسار جواه خطة يوم بيوم، الأدوات بالاسم، أسعار السوق الحقيقية، وطريقة أول عميل. تختار واحد، وتقفل باب الحيرة."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tracks.map((t) => (
            <Link
              key={t.slug}
              to="/tracks/$slug"
              params={{ slug: t.slug }}
              className="glass-card hover-lift flex h-full flex-col  p-7"
            >
              <span className="text-sm font-semibold tracking-[0.08em] text-accent">{t.n}</span>
              <h3 className="mb-3 mt-3.5 text-lg font-semibold text-foreground">{t.title}</h3>
              <p className="flex-1 text-[15px] leading-relaxed text-muted-foreground">{t.short}</p>
              <p
                dir="ltr"
                className="mt-6 border-t border-border pt-4 text-left text-sm font-semibold text-foreground"
              >
                {t.income}
              </p>
            </Link>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-6">
          <PrimaryButton to="/tracks">اقرأ كل مسار بالتفصيل</PrimaryButton>
          <Link
            to="/auth"
            className="text-sm text-secondary-foreground underline decoration-border underline-offset-4 hover:opacity-60"
          >
            أو ابدأ دلوقتي وخلّص الحيرة
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ============================ 3. علم النفس ============================ */

export function DarkPsychologySection() {
  const points = [
    "قرار الشرا بيتم في أول 7 ثواني — وإزاي تكسب الثواني دي قبل ما حد يفتح فمه",
    "المحرّكات النفسية الستة اللي بتحرّك أي إنسان في رسالة أو مكالمة بيع",
    "ندرة وإلحاح حقيقي بيضغط بدون كدب يحرق سمعتك",
    "تقرأ اللي قصادك: مين بيشتري بالمنطق، مين بالخوف، ومين بالطمع — ولكل واحد كلام تاني",
    "تفكيك الاعتراضات قبل ما تتقال، فمش بتلاقي «هفكر وأرد عليك»",
    "الأهم: تكشف الأساليب اللي بتُستخدم عليك إنت كل يوم — ومحدش يقدر يلعب بيك تاني",
  ];

  return (
    <section id="psychology" className="border-t border-border py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-14">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <Head
              title="أقوى مهارة في الشغل أونلاين إنك تفهم"
              accent="الإنسان اللي قصادك"
              sub="البرمجة والإعلانات أدوات. اللي بيقفل الديل هو فهمك للنفس البشرية. المهارة دي لوحدها بتخلي كل مسار تاني في الكورس يشتغل أسرع بمرتين."
            />
            <ul className="grid gap-4">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[15px] leading-relaxed">
                  <Check size={16} className="mt-1 shrink-0 text-accent" />
                  <span className="text-secondary-foreground">{p}</span>
                </li>
              ))}
            </ul>
            <p className="mt-9  border border-border bg-secondary px-6 py-5 text-[15px] leading-relaxed text-secondary-foreground">
              بنعلّمك ده لتبيع قيمة حقيقية وتحمي نفسك — مش لتنصب على حد. اللي بيستخدمه غلط بيكسب مرة
              ويخسر السوق كله.
            </p>
          </div>
          <div className="overflow-hidden  border border-border">
            <img
              src={secPsychology}
              alt="شاشة تحليل تحويلات البيع — نسبة الشراء ارتفعت من 2.1% إلى 7.4%"
              loading="lazy"
              width={1600}
              height={1008}
              className="editorial-img h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================ 4. النتايج ============================ */

export function ProofSection() {
  const stats = [
    { v: "+4,300", l: "طالب مصري" },
    { v: "$1.9M", l: "أرباح موثّقة" },
    { v: "38 ساعة", l: "محتوى عملي" },
    { v: "مدى الحياة", l: "تحديثات مجانية" },
  ];

  const testimonials = [
    {
      name: "محمود الشريف",
      photo: p1,
      city: "القاهرة",
      role: "كوبي رايتر",
      result: "1,800$ / شهر",
      text: "كنت بـ 4,000 جنيه في الشهر وكنت فاقد الأمل. بعد 5 شهور بقيت بعمل 1,800 دولار من عميلين ثابتين برا.",
      days: "بعد 5 شهور",
    },
    {
      name: "سارة عبد العال",
      photo: p2,
      city: "الإسكندرية",
      role: "مصممة واجهات",
      result: "2,200$ عقد شهري",
      text: "أول عميل جاني في اليوم 26 بـ 250 دولار. النهارده معايا عقد شهري مع أجنسي كندية.",
      days: "أول عميل في 26 يوم",
    },
    {
      name: "كريم فتحي",
      photo: p3,
      city: "المنصورة",
      role: "تجارة إلكترونية",
      result: "6,400$ ربح صافي",
      text: "المتجر الأول فشل بالكامل. مشيت على طريقة اختبار البرودكت اللي في الكورس وطلعت 6,400 دولار صافي في شهر.",
      days: "الشهر الرابع",
    },
    {
      name: "نورهان جمال",
      photo: p4,
      city: "طنطا",
      role: "أتمتة بالذكاء الاصطناعي",
      result: "3 عملاء شهريين",
      text: "بنيت بوت خدمة عملاء لشركة عقارات في 6 أيام بمساعدة الـ AI وأنا لسه طالبة في كلية.",
      days: "بعد 3 شهور",
    },
    {
      name: "أحمد بدوي",
      photo: p5,
      city: "أسيوط",
      role: "Micro-SaaS",
      result: "740$ متكرر",
      text: "أداة صغيرة لجدولة المحتوى. 62 مشترك بـ 12 دولار في الشهر — دخل بيجيلي وأنا نايم.",
      days: "بعد 7 شهور",
    },
    {
      name: "منة الله رضا",
      photo: p6,
      city: "بورسعيد",
      role: "بيع بالعمولة",
      result: "4,100$ عمولات",
      text: "وحدة علم النفس والاعتراضات هي اللي فرقت. قفلت 3 ديلز في شهر واحد بعد سنة رفض.",
      days: "بعد شهرين",
    },
  ];

  return (
    <section id="proof" className="border-t border-border py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-14">
        <SectionVisual src={secProof} alt="إشعارات استلام فلوس على الموبايل: 4,820 دولار Payoneer و96,400 جنيه تحويل بنكي" />
        <Head
          title="ناس زيك بالحرف — بأرقام وتواريخ"
          accent="مش وعود"
          sub="كل حالة موثّقة بلقطات تحويلات وشاشات حسابات، وبنعرضها جوه الكورس بموافقة أصحابها. لو ينفع معاهم، السؤال الوحيد الباقي هو إنت."
        />

        <div className="mb-12 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l} className="glass-card hover-lift  p-6 text-center">
              <p dir="ltr" className="text-2xl font-semibold text-foreground">
                {s.v}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>

        <div className="mb-12 grid gap-5 md:grid-cols-3">
          {[
            {
              tag: "تحويل بنكي — 12 يوليو",
              amount: "+$1,250.00",
              from: "Upwork — Client: Nordic Media AB",
              note: "أول دفعة لمحمود بعد 5 شهور",
            },
            {
              tag: "Stripe — 3 أغسطس",
              amount: "+$744.00",
              from: "MRR · 62 مشترك × $12",
              note: "دخل متكرر لأحمد من أداة صغيرة",
            },
            {
              tag: "PayPal — 28 يونيو",
              amount: "+$2,200.00",
              from: "Retainer · Toronto agency",
              note: "عقد شهري لسارة",
            },
          ].map((s) => (
            <div key={s.tag} className="glass-card hover-lift  p-6">
              <p className="mb-4 text-[12px] font-medium tracking-[0.04em] text-muted-foreground">
                {s.tag}
              </p>
              <div className=" bg-secondary px-5 py-5" dir="ltr">
                <p className="text-2xl font-semibold text-foreground">{s.amount}</p>
                <p className="mt-1.5 text-[12px] text-muted-foreground">{s.from}</p>
              </div>
              <p className="mt-4 text-[13px] leading-relaxed text-muted-foreground">{s.note}</p>
            </div>
          ))}
        </div>



        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="glass-card hover-lift flex flex-col  p-7">
              <blockquote className="mb-6 flex-1 text-[15px] leading-relaxed text-secondary-foreground">
                {t.text}
              </blockquote>
              <div className="flex items-center gap-3 border-t border-border pt-5">
                <img
                  src={t.photo}
                  alt={t.name}
                  loading="lazy"
                  decoding="async"
                  width={96}
                  height={96}
                  className="portrait-img h-11 w-11 shrink-0 rounded-full object-cover"
                />
                <div className="min-w-0 flex-1">
                  <figcaption className="truncate text-sm font-semibold text-foreground">
                    {t.name}
                  </figcaption>
                  <p className="truncate text-xs text-muted-foreground">
                    {t.role} — {t.city}
                  </p>
                </div>
                <div className="shrink-0 text-left">
                  <span dir="ltr" className="block text-sm font-semibold text-accent">
                    {t.result}
                  </span>
                  <span className="text-xs text-muted-foreground">{t.days}</span>
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================ 5. المنهج ============================ */

export function CurriculumSection() {
  const modules = [
    {
      n: "01",
      t: "القرار وتحديد المسار",
      d: "إزاي السوق العالمي بيفكر، والمهارات اللي بيتدفع عليها فعلاً، وتقفل مسارك في 3 أيام بدل 3 سنين حيرة.",
    },
    {
      n: "02",
      t: "علم النفس وفن الإقناع",
      d: "محرّكات القرار، الفريمنج، التسعير النفسي، وسكربتات بيع كاملة تنسخها كلمة كلمة.",
    },
    {
      n: "03",
      t: "الذكاء الاصطناعي في صالحك",
      d: "نظام AI شخصي للمحتوى والتصميم والتحليل، وأتمتة مهام كانت بتاخد ساعات في دقايق.",
    },
    {
      n: "04",
      t: "تبني منتج في أيام",
      d: "من فكرة لموقع أو تطبيق شغال بالـ AI وأدوات No-Code، مع تسليم يبان احترافي قصاد العميل.",
    },
    {
      n: "05",
      t: "التجارة الإلكترونية",
      d: "بحث البرودكت، صفحة البيع، الإعلانات، والأرقام اللي بتقولك «كمّل» ولا «اقفل» بدون عاطفة.",
    },
    {
      n: "06",
      t: "أول 1000 دولار",
      d: "سكربتات تواصل، إدارة العميل، التسليم، وتقييم بيجيبلك عملاء تانيين بدون تعب.",
    },
    {
      n: "07",
      t: "التوسّع والأنظمة",
      d: "أسعار أعلى، عقود شهرية، تفويض المهام، وفريق يشغّل البيزنس وإنت مش موجود.",
    },
    {
      n: "08",
      t: "الفلوس والقانون",
      d: "استلام وتحويل الأرباح لمصر، التوثيق، وتنظيم دخلك كصاحب عمل حر بدون مشاكل.",
    },
  ];

  return (
    <section id="curriculum" className="border-t border-border py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-14">
        <SectionVisual src={secAi} alt="لوحة تحكم وكالة أتمتة بالذكاء الاصطناعي — عقد شهري 3,500 دولار و7 عملاء" />
        <Head
          title="8 وحدات… كل وحدة بتخرج منها بنتيجة"
          accent="مش بمعلومة"
          sub="بترتيب واحد صح: قرار، إقناع، أدوات، منتج، فلوس، توسّع. اللي بيلخبط الترتيب ده بيلف سنة في مكانه."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {modules.map((m) => (
            <Card key={m.n}>
              <span className="text-sm font-semibold tracking-[0.08em] text-accent">{m.n}</span>
              <h3 className="mb-2.5 mt-3.5 text-lg font-semibold text-foreground">{m.t}</h3>
              <p className="text-[15px] leading-relaxed text-muted-foreground">{m.d}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================ 6. الأسعار ============================ */

export const COURSE_INCLUDES = [
  "12 مسار دخل كامل + 8 وحدات تنفيذية",
  "وحدة علم النفس وفن البيع بالكامل",
  "قوالب وسكربتات بيع جاهزة تنسخها",
  "خطة 60 يوم مكتوبة يوم بيوم",
  "اشتراك مجاني في Megsy AI + كريدت على Claude ونماذج الفيديو السينمائي",
  "كريدت Unlimited على Lovable + اشتراكات مجانية في أدوات تانية",
  "جروب الطلاب والدعم المباشر",
  "تحديثات مدى الحياة بدون فلوس زيادة",
];


export function PricingSection() {
  return (
    <section id="pricing" className="border-t border-border bg-secondary/40 py-16 md:py-20">
      <div className="mx-auto max-w-2xl px-6">
        <Head
          title="دفعة واحدة… وبعد كده ملكك"
          accent="للأبد"
          sub="السعر بيزيد مع كل تحديث جديد. اللي بيدخل بدري بيثبّت سعره للأبد — وده مش تسويق، ده الفرق اللي الناس اللي دخلت الشهر اللي فات دفعته."
          center
        />

        <div className="glass-card  p-7 sm:p-10">
          <div className="mb-7 grid gap-3  border border-border bg-secondary/60 p-5 text-[14px]">
            {[
              ["12 مسار دخل كامل بخطط يوم بيوم", "3,900 جنيه"],
              ["وحدة علم النفس وفن البيع", "2,400 جنيه"],
              ["قوالب وسكربتات بيع جاهزة", "1,200 جنيه"],
              ["خطة 60 يوم + الدعم والجروب", "1,500 جنيه"],
            ].map(([k, v]) => (
              <div key={k} className="flex items-center justify-between gap-4">
                <span className="text-secondary-foreground">{k}</span>
                <span className="shrink-0 text-muted-foreground line-through">{v}</span>
              </div>
            ))}
            <div className="mt-1 flex items-center justify-between gap-4 border-t border-border pt-3 font-semibold text-foreground">
              <span>القيمة الحقيقية</span>
              <span className="shrink-0">9,000 جنيه</span>
            </div>
          </div>

          <div dir="ltr" className="mb-2 flex items-end justify-center gap-3">
            <span className="text-5xl font-semibold text-accent">999</span>
            <span className="pb-2 text-base text-muted-foreground">جنيه</span>
            <span className="pb-2 text-base text-muted-foreground/70 line-through">4,500</span>
          </div>

          <p className="mb-9 text-center text-sm text-muted-foreground">
            أقل من قيمة يوم شغل واحد لعميل بالدولار — وأقل من اللي بتصرفه على حاجات مش فارقة.
          </p>

          <ul className="mb-10 grid gap-4">
            {COURSE_INCLUDES.map((f) => (
              <li key={f} className="flex items-start gap-3 text-[15px] text-secondary-foreground">
                <Check size={16} className="mt-1 shrink-0 text-accent" />
                {f}
              </li>
            ))}
          </ul>

          <Link
            to="/checkout"
            className="block bg-primary py-4 text-center text-base font-medium text-primary-foreground  transition-all duration-300 hover:bg-foreground hover: active:scale-95"
          >
            ابدأ دلوقتي — وثبّت سعرك
          </Link>

          <p className="mt-4 text-center text-xs leading-relaxed text-muted-foreground">
            فيزا / ماستركارد / ميزة · فودافون كاش واتصالات وأورنج ووي · تقسيط البنوك وvalU وأمان
            وسهولة · Apple Pay — الدفع مؤمّن بالكامل عن طريق Kashier بـ 3D Secure.
          </p>


          <div className="mt-6 grid gap-3  border border-border bg-secondary/60 px-5 py-5 text-[13px] sm:grid-cols-3">
            {[
              ["مدة الوصول", "مفتوح مدى الحياة"],
              ["الدعم", "جروب خاص + ردود خلال 24 ساعة"],
              ["الدفع", "دفعة واحدة — مفيش اشتراك شهري"],
            ].map(([k, v]) => (
              <div key={k}>
                <p className="text-[12px] text-muted-foreground">{k}</p>
                <p className="mt-1 font-semibold text-foreground">{v}</p>
              </div>
            ))}
          </div>

          <div className="mt-7  border border-border bg-secondary px-6 py-5 text-center">
            <p className="text-[15px] font-semibold text-foreground">
              وصول مدى الحياة — تدفع مرة وتفضل معاك للأبد
            </p>
            <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
              كل الوحدات والقوالب والتحديثات الجديدة بتتضاف لحسابك من غير أي رسوم إضافية، ومعاك
              جروب الطلاب والدعم المباشر.
            </p>
          </div>
        </div>

        <p className="mt-9 text-center text-[15px] font-medium leading-relaxed text-foreground">
          كل يوم بتأجّل فيه، فيه حد تاني بياخد العميل اللي كان ممكن يكون بتاعك.
        </p>

      </div>
    </section>
  );
}

/* ============================ 7. أسئلة ============================ */

export const faqs = [
  {
    q: "أنا مش فاهم في البرمجة ولا التقنية خالص",
    a: "أغلب طلبتنا كانوا كده. الكورس مبني على أدوات وذكاء اصطناعي بيعملوا الجزء التقني، ودورك تفهم العميل وتنفّذ خطوة بخطوة.",
  },
  {
    q: "معايا وقت قليل، 2 أو 3 ساعات في اليوم",
    a: "خطة الـ 60 يوم مقسّمة على أساس ساعتين في اليوم بالظبط. اللي بيدخل بـ 8 ساعات في اليوم الأول بيقف في اليوم الرابع.",
  },
  {
    q: "معايا موبايل بس ومفيش لابتوب",
    a: "فيه مسارات كاملة بتتنفّذ من الموبايل: المحتوى القصير، إدارة صفحات، الأفلييت، وخدمات الذكاء الاصطناعي. الأدوات مجانية والخطوة الأولى مكتوبة في قسم «نقطة البداية».",
  },
  {
    q: "محتاج رأس مال؟",
    a: "لأ في أغلب المسارات (خدمات، AI، محتوى، منتجات رقمية). مسارات التجارة الإلكترونية بس هي اللي محتاجة ميزانية إعلانات صغيرة نقولك عليها بالرقم.",
  },
  {
    q: "الفلوس هتوصلني إزاي وأنا في مصر؟",
    a: "فيه وحدة كاملة عن استلام الأرباح وتحويلها وتوثيق دخلك بشكل قانوني — بخطوات عملية مش نظرية.",
  },
  {
    q: "الكلام ده مش موجود مجانًا على يوتيوب؟",
    a: "المعلومة موجودة مبعترة في 400 فيديو، والترتيب هو اللي مش موجود. إنت مش بتدفع على معلومة — بتدفع على ترتيب يوفّرلك سنة تجارب غلط وخطة تمشي عليها بالتاريخ.",
  },
  {
    q: "أدفع إزاي؟ ومعنديش كارت بنك",
    a: "الدفع عن طريق كاشير (بوابة دفع مصرية مرخّصة): فيزا وماستركارد وميزة، ومحافظ الموبايل فودافون كاش واتصالات كاش وأورنج كاش ووي باي، وApple Pay من الآيفون. يعني تقدر تدفع من غير كارت بنكي أصلاً بمحفظة الموبايل.",
  },
  {
    q: "أقدر أقسّط المبلغ؟",
    a: "أيوه لو حسابك أو كارتك بيدعم ده: تقسيط بطاقات البنوك وvalU وأمان وسهولة بيظهروا لك كخيار على صفحة كاشير نفسها. لو مش لاقي الخيار كلّمنا على تليجرام @eigiza ونساعدك.",
  },
  {
    q: "الدفع آمن؟ بتشوفوا بيانات الكارت؟",
    a: "لأ. بيانات الكارت بتتكتب على صفحة كاشير المؤمّنة (PCI DSS + 3D Secure) وإحنا مش بنشوفها ولا بنخزّنها. إحنا بنستلم تأكيد الدفع بس.",
  },
  {
    q: "مضمون إني أكسب؟",
    a: "لأ — ومحدش يقدر يضمنلك ده بصدق. اللي مضمون هو المحتوى والخطة والدعم ووصولك مدى الحياة للتحديثات. النتيجة بتعتمد على تنفيذك.",
  },
];


export function FaqSection() {

  return (
    <section className="border-t border-border py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-6">
        <Head title="أسئلة بتتكرر… وردود" accent="بدون لف" center />
        <div className="grid gap-5">
          {faqs.map((f) => (
            <Card key={f.q}>
              <h3 className="mb-2.5 text-lg font-semibold text-foreground">{f.q}</h3>
              <p className="text-[15px] leading-relaxed text-muted-foreground">{f.a}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================ 8. الفوتر ============================ */

export function SiteFooter() {
  return (
    <footer className="border-t border-border pb-24 lg:pb-0">
      <div className="mx-auto max-w-6xl px-6 md:px-14">
        <div className="grid gap-10 py-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="mb-3 text-[12px] font-semibold tracking-[0.08em] text-accent">
              الجهة المسؤولة قانونيًا
            </p>
            <p className="text-[14px] leading-relaxed text-foreground">{company.legalNameAr}</p>
            <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
              {company.addressAr}
            </p>
            <p className="mt-3 text-[13px] text-muted-foreground">
              سجل تجاري: {company.commercialRegister} · رقم ضريبي: {company.taxId}
            </p>
            <a
              href={`mailto:${company.email}`}
              className="mt-3 inline-block text-[13px] text-foreground hover:opacity-60"
            >
              {company.email}
            </a>
          </div>

          <div>
            <p className="mb-4 text-[13px] font-semibold text-foreground">المنصة</p>
            <div className="flex flex-col gap-3 text-[13px]">
              <Link to="/tracks" className="text-muted-foreground hover:text-foreground">
                المسارات
              </Link>
              <Link to="/auth" className="text-muted-foreground hover:text-foreground">
                دخول / تسجيل
              </Link>
              <Link to="/checkout" className="text-muted-foreground hover:text-foreground">
                ابدأ دلوقتي
              </Link>
              <Link to="/faq" className="text-muted-foreground hover:text-foreground">
                الأسئلة الشائعة
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-foreground">
                اتصل بنا
              </Link>
            </div>
          </div>

          <div>
            <p className="mb-4 text-[13px] font-semibold text-foreground">قانوني</p>
            <div className="flex flex-col gap-3 text-[13px]">
              <Link to="/about" className="text-muted-foreground hover:text-foreground">
                عن الشركة
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-foreground">
                الشروط والأحكام
              </Link>
              <Link to="/privacy" className="text-muted-foreground hover:text-foreground">
                سياسة الخصوصية
              </Link>
              <Link to="/refund" className="text-muted-foreground hover:text-foreground">
                الاسترداد والإلغاء
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-4 border-t border-border py-6 sm:grid-cols-2">
          <div>
            <p className="mb-3 text-[13px] font-semibold text-foreground">طرق الدفع</p>
            <div className="flex flex-wrap gap-2 text-[12px] text-muted-foreground">
              {["فيزا", "ماستركارد", "ميزة", "Apple Pay", "فودافون كاش", "تقسيط valU"].map((m) => (
                <span key={m} className="border border-border px-2.5 py-1">
                  {m}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-3 text-[13px] font-semibold text-foreground">أمان وضمان</p>
            <div className="flex flex-wrap gap-2 text-[12px] text-muted-foreground">
              {["اتصال مشفّر SSL", "3D Secure", "Kashier معتمد", "سياسة استرداد واضحة"].map((m) => (
                <span key={m} className="border border-border px-2.5 py-1">
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-border py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {company.shortNameAr} — كل الحقوق محفوظة.
          </p>
          <p className="text-[12px] text-muted-foreground">
            الدفع الآمن عبر Kashier — إحنا مش بنخزّن بيانات كروت الدفع.
          </p>
        </div>

        <p className="border-t border-border py-8 text-[12px] leading-relaxed text-muted-foreground">
          إخلاء مسؤولية عن النتائج: الأرقام والحالات المعروضة في الصفحة دي نتايج فعلية لطلبة
          معيّنين، ومش وعد ولا ضمان إنك هتوصل لنفس الرقم. النتيجة بتعتمد على تنفيذك ووقتك والسوق
          اللي بتشتغل فيه. إحنا بنبيع تعليم وخطة تنفيذ — مش فرصة استثمارية ولا دخل مضمون.
        </p>
      </div>
    </footer>
  );
}


/* ============================ 9. المقارنة ============================ */

export function ComparisonSection() {
  const rows: [string, string, string][] = [
    ["الشكل", "فيديوهات نظرية وحماس", "خطة يوم بيوم بمخرجات مطلوبة"],
    ["المسارات", "مسار واحد لو نفع نفع", "12 مسار — تختار اللي يناسب وقتك وفلوسك"],
    ["البيع", "«اعمل محتوى وهما هيجوا»", "سكربتات بيع وعلم نفس قرار الشرا"],
    ["الأدوات", "أسماء أدوات بدون تنفيذ", "الأدوات بالاسم + سعرها + البديل المجاني"],
    ["الفلوس", "«حوّل بأي طريقة»", "وحدة كاملة لاستلام الدولار في مصر قانونيًا"],
    ["بعد الشرا", "بتتسلّم لنفسك", "جروب ودعم مباشر وتحديثات مدى الحياة"],
  ];

  return (
    <section className="border-t border-border py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-6 md:px-14">
        <Head
          title="فرق واحد بينا وبين أي كورس تاني: إحنا مش بنبيع"
          accent="حماس"
          sub="اقرا الجدول ده بهدوء. لو لقيت أي حاجة في العمود بتاعنا بتتعمل عند حد تاني بنفس التفصيل، متشتريش مننا."
          center
        />
        <div className="glass-card overflow-hidden ">
          <div className="grid grid-cols-[1fr_1fr] gap-0 border-b border-border bg-secondary/60 px-6 py-4 text-sm font-semibold sm:grid-cols-[0.6fr_1fr_1fr]">
            <span className="hidden text-muted-foreground sm:block">المقارنة</span>
            <span className="text-muted-foreground">الكورسات التانية</span>
            <span className="text-foreground">إحنا</span>
          </div>
          {rows.map(([k, a, b]) => (
            <div
              key={k}
              className="grid grid-cols-[1fr_1fr] items-start gap-4 border-b border-border px-6 py-5 text-[14px] last:border-b-0 sm:grid-cols-[0.6fr_1fr_1fr]"
            >
              <span className="col-span-2 text-xs font-semibold tracking-[0.06em] text-accent sm:col-span-1 sm:text-[14px] sm:tracking-normal sm:text-muted-foreground">
                {k}
              </span>
              <span className="leading-relaxed text-muted-foreground">{a}</span>
              <span className="flex items-start gap-2 font-medium leading-relaxed text-foreground">
                <Check size={15} className="mt-1 shrink-0 text-accent" />
                {b}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================ 10. لمين ومش لمين ============================ */

export function AudienceSection() {
  const forYou = [
    "عندك من ساعتين لتلاتة في اليوم وجاهز تنفّذ بجد",
    "بتدوّر على دخل بالدولار مش على «فكرة تكسب بيها بسرعة»",
    "مستحمل إن أول شهر يكون تعلّم وتنفيذ بدون نتيجة مالية كبيرة",
    "عايز حد يقولك اعمل إيه بالظبط بكرة الصبح",
  ];
  const notForYou = [
    "بتدوّر على ربح من غير شغل ولا تعلّم",
    "هتشتري وتسيب المحتوى على الرف",
    "مستني ضمان إنك تكسب رقم معيّن في وقت معيّن",
    "مش مستعد تتكلم مع عميل ولا تسمع «لأ»",
  ];

  return (
    <section className="border-t border-border py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-6 md:px-14">
        <Head
          title="الكورس ده مش لكل الناس — وإحنا مرتاحين"
          accent="لكده"
          sub="بنرفض ناس كتير قبل ما تدفع. مش لأننا مش عايزين نبيع، لأن حد بيشتري وهو مش جاهز بيلوم الكورس ويقعد مكانه."
          center
        />
        <div className="grid gap-5 md:grid-cols-2">
          <Card>
            <h3 className="mb-5 text-lg font-semibold text-foreground">الكورس ليك لو…</h3>
            <ul className="grid gap-4">
              {forYou.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[15px] leading-relaxed">
                  <Check size={16} className="mt-1 shrink-0 text-accent" />
                  <span className="text-secondary-foreground">{p}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <h3 className="mb-5 text-lg font-semibold text-foreground">وسيبه لو…</h3>
            <ul className="grid gap-4">
              {notForYou.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[15px] leading-relaxed">
                  <X size={16} className="mt-1 shrink-0 text-muted-foreground" />
                  <span className="text-muted-foreground">{p}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}

/* ============================ 11. شريط ثابت للموبايل ============================ */

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/90 px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur-xl lg:hidden">
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p dir="ltr" className="flex items-baseline gap-2 text-[15px] font-semibold text-foreground">
            999 <span className="text-xs font-normal text-muted-foreground">جنيه</span>
            <span className="text-xs font-normal text-muted-foreground/70 line-through">4,500</span>
          </p>
          <p className="truncate text-[11px] text-muted-foreground">
            دفعة واحدة · وصول مدى الحياة · تحديثات مجانية
          </p>
        </div>

        <Link
          to="/checkout"
          className="shrink-0 bg-primary px-6 py-3 text-sm font-medium text-primary-foreground active:scale-95"
        >
          ابدأ دلوقتي
        </Link>
      </div>
    </div>
  );
}

/* ============================ 12. المدرّب والنظام ============================ */

export function FounderSection() {
  const numbers = [
    ["7,200 جنيه", "أول راتب لي بعد التخرج — 2018"],
    ["$412", "أول شهر دخل بالدولار — بعد 90 يوم تنفيذ"],
    ["$31,000", "أعلى شهر من خدمات وأتمتة AI — 2025"],
    ["38 ساعة", "المحتوى العملي اللي طلع من التجربة دي"],
  ];


  const steps = [
    ["اختار مسار واحد", "على أساس وقتك وفلوسك مش على أساس الترند."],
    ["ابني أصل بيتباع", "خدمة أو منتج أو أداة — حاجة حد جاهز يدفع فيها فعلاً."],
    ["اتكلم بلغة القرار", "علم نفس الشرا والاعتراضات — ده اللي بيقفل الديل."],
    ["كرّر واقفل الدايرة", "أول عميل يبقى مرجع، والمرجع يجيب اللي بعده أغلى."],
  ];

  return (
    <section id="founder" className="border-t border-border bg-secondary/40 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-14">
        <Head
          title="مش هبيعلك حماس — هوريك الطريق اللي مشيته"
          accent="بالأرقام"
          sub="بدأت من نفس مكانك بالظبط: راتب بالجنيه، صفر خبرة تقنية، وإنترنت متقطّع. اللي فرق كان نظام واحد بأربع خطوات — وده حرفيًا هيكل الكورس."
        />

        <div className="mb-14 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {numbers.map(([v, l]) => (
            <div key={l} className="glass-card  p-6">
              <p dir="ltr" className="text-xl font-semibold text-foreground">
                {v}
              </p>
              <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{l}</p>
            </div>
          ))}
        </div>

        <p className="-mt-10 mb-14 text-[12.5px] leading-relaxed text-muted-foreground">
          الأرقام دي تجربة شخصية للمؤسس، مش متوسط نتائج ولا وعد بدخل مماثل.
        </p>



        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.08em] text-accent">نظام الدايرة المقفولة</p>
          <h3 className="mt-4 text-[clamp(22px,3vw,32px)] font-semibold leading-[1.15] tracking-[-0.02em] text-foreground">
            أربع خطوات… أي مسار من الـ 12 بيمشي بيهم بالحرف
          </h3>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(([t, d], i) => (
            <Card key={t}>
              <span className="text-sm font-semibold tracking-[0.08em] text-accent">
                0{i + 1}
              </span>
              <h4 className="mb-3 mt-4 text-lg font-semibold text-foreground">{t}</h4>
              <p className="text-[15px] leading-relaxed text-muted-foreground">{d}</p>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <PrimaryButton to="/checkout">عايز أمشي على النظام ده</PrimaryButton>
        </div>
      </div>
    </section>
  );
}


/* ============================ إثبات مدسوس بين الأقسام ============================ */

const inlineProofs = {
  course: {
    photo: p3,
    name: "كريم فتحي",
    meta: "تجارة إلكترونية — المنصورة",
    quote:
      "اخترت مسار واحد وقفلت باقي التابات. أول متجر فشل، والتاني طلع 6,400 دولار صافي في شهر — نفس الخطوات اللي في المسار بالحرف.",
    result: "6,400$ في شهر",
  },
  curriculum: {
    photo: p2,
    name: "سارة عبد العال",
    meta: "مصممة واجهات — الإسكندرية",
    quote:
      "الترتيب هو اللي فرق. مشيت وحدة بوحدة من غير ما أقفز، فأول عميل جاني في اليوم 26 وأنا مكنتش مصدقة.",
    result: "أول عميل في 26 يوم",
  },
  pricing: {
    photo: p5,
    name: "أحمد بدوي",
    meta: "Micro-SaaS — أسيوط",
    quote:
      "دفعت مرة واحدة، ورجّعت التمن 9 مرات من أداة صغيرة بتجيبلي 740 دولار كل شهر وأنا نايم.",
    result: "740$ متكرر شهريًا",
  },
} as const;

export function InlineProof({ where }: { where: keyof typeof inlineProofs }) {
  const t = inlineProofs[where];
  return (
    <section className="mx-auto max-w-6xl px-6 pb-6 md:px-14">
      <figure className="glass-card hover-lift flex flex-col gap-6  p-7 sm:flex-row sm:items-center sm:p-8">
        <img
          src={t.photo}
          alt={t.name}
          loading="lazy"
          decoding="async"
          width={200}
          height={200}
          className="portrait-img h-16 w-16 shrink-0 rounded-full object-cover sm:h-20 sm:w-20"
        />
        <div className="min-w-0 flex-1">
          <blockquote className="text-[16px] leading-relaxed text-foreground sm:text-[17px]">
            {t.quote}
          </blockquote>
          <figcaption className="mt-3 text-[13px] text-muted-foreground">
            {t.name} — {t.meta}
          </figcaption>
        </div>
        <div className="shrink-0  border border-border bg-secondary px-5 py-4 text-center">
          <span dir="ltr" className="block text-[15px] font-semibold text-accent">
            {t.result}
          </span>
          <span className="text-[11.5px] text-muted-foreground">نتيجة موثّقة</span>
        </div>
      </figure>
    </section>
  );
}

/* ============================ الضمان — بلوك مستقل ============================ */

export function GuaranteeSection() {
  return (
    <section className="border-t border-border py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="glass-card  p-8 text-center sm:p-12">
          <p className="text-[12px] font-semibold tracking-[0.08em] text-accent">
            المخاطرة علينا مش عليك
          </p>
          <h2 className="mt-4 text-[clamp(24px,3.6vw,38px)] font-semibold leading-[1.15] tracking-[-0.03em] text-foreground">
            14 يوم تجرّب فيهم كل حاجة… ولو مش شايف القيمة{" "}
            <span className="text-accent">فلوسك ترجع كاملة</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            افتح الوحدات، نزّل القوالب، اسأل في الجروب، وابدأ خطة الـ 60 يوم. لو خلال أول 14 يوم
            حسّيت إن ده مش لك — رسالة واحدة وترجعلك فلوسك كاملة بدون أسئلة ولا شروط مخفية. ده مكتوب
            في{" "}
            <Link to="/refund" className="underline decoration-border underline-offset-4">
              سياسة الاسترداد
            </Link>{" "}
            ومسؤولية {company.legalNameAr} قانونيًا.
          </p>
          <div className="mt-8 grid gap-4 text-right sm:grid-cols-3">
            {[
              ["بدون أسئلة", "مش هنطلب منك مبررات ولا إثباتات"],
              ["بدون شروط مخفية", "نفس الشروط مكتوبة في الصفحة القانونية"],
              ["تحويل بنفس الطريقة", "الفلوس ترجع على نفس وسيلة الدفع"],
            ].map(([t, d]) => (
              <div key={t} className=" border border-border bg-secondary px-5 py-5">
                <p className="text-[14px] font-semibold text-foreground">{t}</p>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================ نقطة البداية: موبايل بس / بدون رأس مال ============================ */

type StartCase = {
  n: string;
  kicker: string;
  title: string;
  lead: string;
  tools: string[];
  first: string;
  money: string;
};

const startCases: StartCase[] = [
  {
    n: "01",
    kicker: "معاك موبايل بس",
    title: "مفيش لابتوب؟ نبدأ من الشاشة اللي في إيدك",
    lead:
      "مسارات كاملة بتتنفّذ من الموبايل: تدريب نماذج AI باللهجة المصرية، UGC وفيديوهات قصيرة، إدارة محتوى، وبيع مباشر في الدايركت. الكاميرا والميكروفون اللي معاك هما رأس المال.",
    tools: ["كاميرا الموبايل + CapCut", "ChatGPT / Gemini", "Canva موبايل", "واتساب بيزنس"],
    first: "٧ أيام: بروفايل + ٣ عيّنات شغل + ٢٠ رسالة لعملاء.",
    money: "أول دخل واقعي: ٥٠$ – ٤٠٠$ في الشهر الأول.",
  },
  {
    n: "02",
    kicker: "مش معاك رأس مال",
    title: "صفر إعلانات، صفر مخزون، صفر اشتراكات",
    lead:
      "كل مسار ليه «نسخة الصفر»: بديل مجاني لكل أداة مدفوعة، وطريقة توصل بيها لأول عميل من غير مليم إعلانات. أول ما يدخل دخل، تعيد استثماره في أدوات أسرع.",
    tools: ["بدائل مجانية لكل أداة", "منصات فريلانس مجانية", "دروبشيبينج بدون مخزون", "تواصل مباشر"],
    first: "١٤ يوم: مسار واحد + عرض واضح + ١٠٠ رسالة مدروسة.",
    money: "التكلفة الوحيدة: الإنترنت ووقتك.",
  },
  {
    n: "03",
    kicker: "وقتك ضيق",
    title: "شغل أو دراسة؟ ساعتين منظّمين بيكفّوا",
    lead:
      "مش محتاج تسيب شغلك. الخطة بلوكات ٩٠ دقيقة بمخرج واحد مطلوب في كل بلوك — مفيش مشاهدة بدون تنفيذ.",
    tools: ["خطة يوم بيوم بمخرجات", "قوالب توفّر ساعات", "أتمتة للمهام المتكررة"],
    first: "٣٠ يوم: بلوك يومي ثابت + مراجعة أسبوعية للأرقام.",
    money: "الهدف: أول عميل قبل ما تزوّد ساعاتك.",
  },
  {
    n: "04",
    kicker: "لغتك الإنجليزية ضعيفة",
    title: "اشتغل بالعربي… واترقّى بالأدوات",
    lead:
      "سوق كامل بيدفع بالدولار على المحتوى العربي واللهجة المصرية: تدريب AI، أصوات، محتوى، وخدمة عملاء الخليج — مع أدوات بتكتبلك عروضك بالإنجليزي باحتراف.",
    tools: ["سكربتات تواصل جاهزة", "DeepL / ChatGPT", "سوق المحتوى العربي"],
    first: "١٠ أيام: خدمة بالعربي تبيعها لعميل بيدفع بالدولار.",
    money: "اللغة عائق مؤقت — مش سبب تأجيل.",
  },
];

export function StartingPointSection() {
  return (
    <section id="start-here" className="border-t border-border bg-background py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1240px] px-6 md:px-14">
        <Head
          title="مش معاك لابتوب ولا فلوس؟ الجزء ده ليك"
          accent="نقطة البداية"
          sub="«مش معايا غير موبايل» و«مش معايا رأس مال» مش شروط دخول — دول بس بيحدّدوا تبدأ بأنهي مسار."
        />


        <div className="grid border-y border-border md:grid-cols-2">
          {startCases.map((c, i) => (
            <article
              key={c.n}
              className={`flex flex-col gap-5 border-border p-7 md:p-9 ${
                i % 2 === 0 ? "md:border-l" : ""
              } ${i < 2 ? "border-b" : "border-b md:border-b-0"}`}
            >
              <div className="flex items-baseline gap-4">
                <span className="folio">{c.n}</span>
                <span className="text-[11px] font-semibold tracking-[0.28em] text-accent">
                  {c.kicker}
                </span>
              </div>

              <h3 className="font-display text-[clamp(22px,2.6vw,30px)] font-bold leading-[1.25] text-foreground">
                {c.title}
              </h3>

              <p className="border-t border-border pt-5 text-[15px] leading-[2] text-muted-foreground">
                {c.lead}
              </p>

              <ul className="flex flex-wrap gap-2">
                {c.tools.map((t) => (
                  <li
                    key={t}
                    className="border border-border px-3 py-1.5 text-[12.5px] text-secondary-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              <dl className="mt-auto grid gap-3 border-t border-border pt-5 text-[13.5px]">
                <div className="flex gap-3">
                  <dt className="shrink-0 font-semibold text-foreground">الخطوة الأولى</dt>
                  <dd className="leading-relaxed text-muted-foreground">{c.first}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="shrink-0 font-semibold text-foreground">الواقع المالي</dt>
                  <dd className="leading-relaxed text-muted-foreground">{c.money}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-5 border border-border bg-secondary px-7 py-6 sm:flex-row sm:items-center">
          <p className="max-w-2xl text-[14.5px] leading-[1.9] text-secondary-foreground">
            مفيش مسار في الـ 12 محتاج رأس مال إجباري عشان تبدأ. اللي محتاج فلوس، مكتوب جنبه بالظبط
            كام ومتى — عشان تقرر بعينك مش بحماس.
          </p>
          <PrimaryButton to="/tracks">شوف الـ 12 مسار</PrimaryButton>
        </div>
      </div>
    </section>
  );
}

/* ============================ حسبة الفلوس ============================ */

const moneyMath = [
  {
    n: "01",
    t: "خدمات ومهارات بالدولار",
    d: "أسرع باب: تبيع مهارة لعميل بيدفع بعملة قوية. 300 دولار من عميل واحد رقم عادي في السوق العالمي — وده الدخول مش السقف.",
    tag: "$300 – $3,000 / شهر",
  },
  {
    n: "02",
    t: "تجارة إلكترونية ودروبشيبنج",
    d: "دخل مش مربوط بساعاتك. منتج واحد بهامش 15 دولار × 50 أوردر يوميًا = رقم مبيتقالش في وظيفة، وبدون مخزون في الدروبشيبنج.",
    tag: "من $1,000 لـ 6 خانات سنويًا",
  },
  {
    n: "03",
    t: "الذكاء الاصطناعي والأتمتة",
    d: "أكبر سوق بيتفتح دلوقتي: أنظمة أتمتة ووكلاء AI وخدمات للشركات. بيدفعوا آلاف شهريًا عشان يوفّروا موظفين.",
    tag: "$500 – $10,000+ / شهر",
  },
  {
    n: "04",
    t: "أصول رقمية بتبيع وإنت نايم",
    d: "منتج رقمي أو اشتراك أو أفلييت. تبنيه مرة ويفضل يبيع — وده أصل ليه قيمة تقدر تبيعه بعد كده.",
    tag: "بيتراكم · قابل للبيع",
  },
  {
    n: "05",
    t: "محتوى وبراند شخصي وعمولات",
    d: "جمهور صغير مستهدف = دخل من رعاية وعمولات (أفلييت) ومنتجاتك إنت. الجمهور نفسه أصل بيكبر مع الوقت ومبيتسرقش منك.",
    tag: "بيكبر مع الوقت",
  },
  {
    n: "06",
    t: "بيع عالي القيمة (High-Ticket)",
    d: "تقفل صفقات لشركات وتاخد نسبة. مفيش منتج ولا رأس مال — مهارة بيع ومكالمة كويسة، وده أعلى سقف دخل بمجهود مباشر.",
    tag: "عمولة من كل صفقة",
  },
];

const ladder = [
  ["المرحلة 1", "أول دولار", "مهارة واحدة + عرض واضح + تواصل يومي. الهدف إثبات إن السوق بيدفعلك."],
  ["المرحلة 2", "دخل ثابت", "عملاء متكررين أو عقود شهرية بدل الشغل المتقطّع."],
  ["المرحلة 3", "أصل بيشتغل من غيرك", "متجر أو منتج رقمي أو نظام مؤتمت — الدخل بينفصل عن ساعاتك."],
  ["المرحلة 4", "كيان قابل للبيع", "فريق وعمليات وأرقام موثّقة. الشركات الرقمية بتتباع بمضاعفات أرباحها — والسقف هنا مفتوح."],
];

export function MoneyMathSection() {
  return (
    <section id="money" className="border-t border-border bg-secondary/25 py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1240px] px-6 md:px-14">

        <Head
          title="خلينا نتكلم في الفلوس بصراحة —"
          accent="محرّكات الدخل الستة"
          sub="إحنا مش موقع فريلانسرز. دي كل الأبواب اللي بتدخل منها الدولارات: خدمات ومهارات، تجارة إلكترونية، ذكاء اصطناعي وأتمتة، أصول رقمية واشتراكات، محتوى وعمولات، وبيع عالي القيمة. أسعار سوق حقيقية بطرق قانونية 100% — مش وعود."
        />



        <div className="grid border-y border-border md:grid-cols-2">
          {moneyMath.map((m, i, arr) => (
            <article
              key={m.n}
              className={`flex flex-col gap-4 border-border p-7 md:p-9 ${
                i % 2 === 0 ? "md:border-l" : ""
              } ${i < arr.length - 2 ? "border-b" : "border-b md:border-b-0"}`}
            >
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-[13px] tracking-[0.14em] text-muted-foreground" dir="ltr">
                  {m.n}
                </span>
                <span dir="ltr" className="text-[14px] font-semibold text-accent">
                  {m.tag}
                </span>
              </div>
              <h3 className="font-display text-[clamp(21px,2.4vw,28px)] font-bold leading-[1.3] text-foreground">
                {m.t}
              </h3>
              <p className="border-t border-border pt-4 text-[15px] leading-[2] text-muted-foreground">
                {m.d}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14">
          <p className="text-[11px] font-semibold tracking-[0.28em] text-accent">سلّم الأصول</p>
          <h3 className="mt-4 max-w-[720px] font-display text-[clamp(22px,3vw,34px)] font-bold leading-[1.2] text-foreground">
            الوظيفة سقفها راتب. اللي هنا سقفه إنك تبني حاجة تتباع.
          </h3>
          <div className="mt-8 grid border-y border-border md:grid-cols-4">
            {ladder.map(([stage, t, d], i) => (
              <article
                key={t}
                className={`flex flex-col gap-3 border-border p-6 ${
                  i < ladder.length - 1 ? "border-b md:border-b-0 md:border-l" : ""
                }`}
              >
                <span className="text-[12px] tracking-[0.16em] text-muted-foreground">{stage}</span>
                <h4 className="text-[17px] font-semibold text-foreground">{t}</h4>
                <p className="text-[14px] leading-[1.9] text-muted-foreground">{d}</p>
              </article>
            ))}
          </div>
          <p className="mt-4 text-[12.5px] text-muted-foreground">
            محدش يقدر يوعدك بمرحلة معيّنة ولا بتوقيت. اللي بنقدّمه إنك تعرف السلّم وتمشي عليه بترتيب
            بدل ما تلف في دايرة.
          </p>
        </div>


        <div className="mt-10 flex flex-col items-start justify-between gap-5 border border-border bg-secondary px-7 py-6 sm:flex-row sm:items-center">
          <p className="max-w-2xl text-[14.5px] leading-[1.9] text-secondary-foreground">
            <span className="font-semibold text-foreground">إخلاء مسؤولية صريح:</span> دي أمثلة
            لأسعار سوق حقيقية، مش ضمان دخل. النتيجة بتتوقف على مجهودك ووقتك والسوق. اللي بنضمنه حاجة
            واحدة: الترتيب والمحتوى والتحديثات مدى الحياة.
          </p>
          <PrimaryButton to="/auth">ابدأ الحسبة من النهارده</PrimaryButton>
        </div>
      </div>
    </section>
  );
}

/* ============================ المزايا الحصرية مع الاشتراك ============================ */

const bonuses = [
  {
    tag: "ذكاء اصطناعي",
    t: "اشتراك مجاني في Megsy AI",
    d: "حساب على megsyai.com بكريدت جاهز — تستخدمه في الكتابة والبيع والمحتوى وتنفيذ شغل عملائك من أول يوم.",
  },
  {
    tag: "أقوى النماذج",
    t: "كريدت على أشهر نماذج العالم",
    d: "Claude وNano Banana Pro ونماذج توليد فيديو سينمائي — نفس الأدوات اللي الوكالات بتشتغل بيها، من غير ما تدفع اشتراك شهري بالدولار.",
  },
  {
    tag: "بناء المنتجات",
    t: "كريدت Unlimited على Lovable",
    d: "تبني مواقع ومتاجر وتطبيقات كاملة بالذكاء الاصطناعي — ده وحده باب دخل تقدر تبيع بيه مشاريع بالدولار.",
  },
  {
    tag: "أدوات مساندة",
    t: "اشتراكات مجانية في مواقع تانية",
    d: "باقة أدوات إضافية للتصميم والأتمتة والتسويق بتتحدّث باستمرار وبتتضاف لحسابك من غير رسوم.",
  },
];

export function BonusSection() {
  return (
    <section id="bonus" className="border-t border-border bg-secondary/30 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-14">
        <Head
          title="مش كورس بس… معاك عدّة الشغل كاملة"
          accent="مزايا حصرية مع الاشتراك"
          sub="أكبر حاجة بتوقف الناس هي تكلفة الأدوات بالدولار. عشان كده الاشتراك جايلك ومعاه اشتراكات وكريدت جاهز — تبدأ البيزنس بـ 0$ فعليًا."
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {bonuses.map((b) => (
            <Card key={b.t}>
              <span className="text-[11px] font-semibold tracking-[0.24em] text-accent">
                {b.tag}
              </span>
              <h3 className="mb-3 mt-3 text-lg font-semibold text-foreground">{b.t}</h3>
              <p className="text-[15px] leading-relaxed text-muted-foreground">{b.d}</p>
            </Card>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-5 border border-border bg-secondary px-7 py-6 sm:flex-row sm:items-center">
          <p className="max-w-2xl text-[14.5px] leading-[1.9] text-secondary-foreground">
            <span className="font-semibold text-foreground">ابدأ بـ 0$:</span> الأدوات المدفوعة
            بتيجي معاك جاهزة، والمسارات مترتّبة عشان أول عميل أو أول بيعة تغطّي أي مصاريف بعد كده.
          </p>
          <PrimaryButton to="/checkout">خُد الباقة كاملة</PrimaryButton>
        </div>
      </div>
    </section>
  );
}

/* ============================ ليه تشترك معانا ============================ */

const usps = [
  ["متابعة لايف لكل مشترك", "جلسات مباشرة على شغلك بالاسم: عرضك، سعرك، متجرك، أول عميل — مش فيديو مسجّل."],
  ["تنفيذ مش تنظير", "كل وحدة بتنتهي بخطوة تعملها النهارده — مش محاضرات بتتفرج عليها وتنساها."],
  ["مدرّبين بيشتغلوا فعلاً", "الناس اللي بتشرح بتنفّذ نفس الشغل بالدولار — أرقام وأسعار سوق حقيقية."],
  ["مجتمع ودعم 24 ساعة", "جروب الطلاب، ورد على أسئلتك خلال 24 ساعة، ومراجعة على شغلك."],
  ["محتوى بيتحدّث باستمرار", "كل جديد في السوق والأدوات بيتضاف لحسابك بدون فلوس زيادة."],
  ["اتعلم من الموبايل", "المنصة شغالة على أي شاشة، وفيه مسارات كاملة تتنفّذ من الموبايل."],
  ["ابدأ بـ 0$", "اشتراكات الأدوات والكريدت جايين معاك — مفيش مصاريف دولار عليك في البداية."],
  ["مفصّل للمصريين", "استلام الفلوس، الضرايب، التوثيق، وطرق الدفع المحلية — كلها متشرحة بخطوات."],
];

export function UspSection() {
  return (
    <section id="why" className="mx-auto max-w-6xl px-6 py-16 md:py-20 md:px-14">
      <Head title="ليه تشترك معانا بالذات" accent="الفرق" />
      <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
        {usps.map(([t, d]) => (
          <div key={t} className="border-t border-border pt-5">
            <div className="flex items-start gap-3">
              <Check size={16} className="mt-1 shrink-0 text-accent" />
              <div>
                <h3 className="text-[16.5px] font-semibold text-foreground">{t}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-muted-foreground">{d}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================ الأكثر طلبًا ============================ */

export function PopularTracksSection() {
  const popular = tracks.slice(0, 6);

  return (
    <section id="popular" className="border-t border-border bg-secondary/30 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-14">
        <Head
          title="أكتر المسارات اللي الناس بتبدأ بيها"
          accent="الأكثر طلبًا"
          sub="كل كارت بيوضّح مدى الدخل المتوقع في السوق، وقت أول فلوس، مستوى الصعوبة، ورأس المال المطلوب — تختار على أساس وقتك وفلوسك مش على أساس الحماس."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {popular.map((t) => (
            <Link
              key={t.slug}
              to="/tracks/$slug"
              params={{ slug: t.slug }}
              className="glass-card hover-lift flex h-full flex-col p-7"
            >
              <span className="text-sm font-semibold tracking-[0.08em] text-accent">{t.n}</span>
              <h3 className="mb-3 mt-3.5 text-lg font-semibold text-foreground">{t.title}</h3>
              <p className="flex-1 text-[15px] leading-relaxed text-muted-foreground">{t.short}</p>
              <dl className="mt-6 grid grid-cols-2 gap-3 border-t border-border pt-4 text-[12.5px]">
                <div>
                  <dt className="text-muted-foreground">أول فلوس</dt>
                  <dd className="mt-0.5 font-semibold text-foreground">{t.timeToFirstMoney}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">المستوى</dt>
                  <dd className="mt-0.5 font-semibold text-foreground">{t.difficulty}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">رأس المال</dt>
                  <dd className="mt-0.5 font-semibold text-foreground">{t.capital}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">مدى الدخل</dt>
                  <dd dir="ltr" className="mt-0.5 text-left font-semibold text-accent">
                    {t.income}
                  </dd>
                </div>
              </dl>
            </Link>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-6">
          <PrimaryButton to="/tracks">شوف كل المسارات</PrimaryButton>
          <Link
            to="/auth"
            className="text-sm text-secondary-foreground underline decoration-border underline-offset-4 hover:opacity-60"
          >
            أو ابدأ بحساب مجاني
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ============================ خطط الاشتراك ============================ */

const plans = [
  {
    name: "البداية — مجانًا",
    price: "0",
    unit: "جنيه",
    note: "تفتح حساب وتشوف المنصة من جوه قبل أي دفع.",
    cta: "ابدأ مجانًا",
    to: "/auth",
    highlight: false,
    features: [
      ["حساب على المنصة ولوحة تحكم", true],
      ["مقدمة كل مسار من الـ 12 + خطة أول 3 أيام", true],
      ["الوصول الكامل للـ 12 مسار", false],
      ["قوالب وسكربتات البيع", false],
      ["اشتراكات وكريدت الأدوات (Megsy AI وغيرها)", false],
      ["جروب الطلاب والدعم المباشر", false],
    ] as [string, boolean][],
  },
  {
    name: "الباقة الكاملة",
    price: "999",
    unit: "جنيه — دفعة واحدة",
    note: "كل المسارات والأدوات والدعم، ووصول مدى الحياة بدون اشتراك شهري.",
    cta: "خُد الباقة الكاملة",
    to: "/checkout",
    highlight: true,
    features: [
      ["حساب على المنصة ولوحة تحكم", true],
      ["الوصول الكامل للـ 12 مسار + 8 وحدات", true],
      ["خطة 60 يوم مكتوبة يوم بيوم", true],
      ["قوالب وسكربتات البيع جاهزة", true],
      ["اشتراك Megsy AI + كريدت Claude ونماذج الفيديو", true],
      ["كريدت Unlimited على Lovable + اشتراكات تانية", true],
      ["جروب الطلاب والدعم خلال 24 ساعة", true],
      ["تحديثات مدى الحياة", true],
    ] as [string, boolean][],
  },
  {
    name: "متابعة شخصية",
    price: "بالطلب",
    unit: "أماكن محدودة",
    note: "الباقة الكاملة + مراجعة شغلك ومتابعة أسبوعية لحد أول عميل.",
    cta: "اطلب مكانك",
    to: "/contact",
    highlight: false,
    features: [
      ["كل اللي في الباقة الكاملة", true],
      ["مراجعة عرضك وتسعيرك شخصيًا", true],
      ["متابعة أسبوعية على تنفيذك", true],
      ["أولوية في الرد على أسئلتك", true],
    ] as [string, boolean][],
  },
];

export function PlansSection() {
  return (
    <section id="plans" className="border-t border-border py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-14">
        <Head
          title="اختار طريقة البداية اللي تناسبك"
          accent="الخطط والأسعار"
          sub="تقدر تبدأ بـ 0 جنيه وتشوف المنصة بنفسك. ولو جاهز تنفّذ، الباقة الكاملة دفعة واحدة ومعاها اشتراكات الأدوات — يعني تبدأ البيزنس فعليًا بـ 0$ مصاريف أدوات."
          center
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`glass-card flex h-full flex-col p-7 ${
                p.highlight ? "border-accent ring-1 ring-accent/40" : ""
              }`}
            >
              {p.highlight && (
                <span className="mb-4 inline-flex w-fit border border-accent px-3 py-1 text-[11px] font-semibold tracking-[0.2em] text-accent">
                  الأكثر اختيارًا
                </span>
              )}
              <h3 className="text-lg font-semibold text-foreground">{p.name}</h3>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-4xl font-semibold text-accent">{p.price}</span>
                <span className="pb-1.5 text-[13px] text-muted-foreground">{p.unit}</span>
              </div>
              <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">{p.note}</p>
              <ul className="my-7 grid flex-1 gap-3.5">
                {p.features.map(([f, ok]) => (
                  <li
                    key={f}
                    className={`flex items-start gap-3 text-[14.5px] ${
                      ok ? "text-secondary-foreground" : "text-muted-foreground/70"
                    }`}
                  >
                    {ok ? (
                      <Check size={16} className="mt-1 shrink-0 text-accent" />
                    ) : (
                      <X size={16} className="mt-1 shrink-0 text-muted-foreground/60" />
                    )}
                    <span className={ok ? "" : "line-through decoration-border"}>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to={p.to}
                className={
                  p.highlight
                    ? "block bg-primary py-4 text-center text-[15px] font-medium text-primary-foreground transition-colors hover:bg-foreground"
                    : "block border border-border py-4 text-center text-[15px] font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
                }
              >
                {p.cta}
              </Link>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-[13px] leading-relaxed text-muted-foreground">
          الدفع مؤمّن بالكامل عبر Kashier بـ 3D Secure · فيزا وماستركارد وميزة والمحافظ الإلكترونية
          والتقسيط · مراجعة سياسة الاسترداد قبل الشرا.
        </p>
      </div>
    </section>
  );
}
