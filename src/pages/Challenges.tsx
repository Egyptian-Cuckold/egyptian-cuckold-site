import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Challenge {
  num: number;
  title: string;
  desc: string;
}

interface LevelData {
  level: string;
  description: string;
  challenges: Challenge[];
  color: string;
  icon: string;
}

const CHALLENGES_DATA: LevelData[] = [
  {
    level: "المستوى الأول - التحديات الخفيفة",
    description: "تحديات استكشافية آمنة للمبتدئين",
    color: "from-[#27AE60] to-[#229954]",
    icon: "🌱",
    challenges: [
      { num: 1, title: "الحوار المفتوح", desc: "ناقش رغباتك وحدودك مع شريكك" },
      { num: 2, title: "الثقة الأساسية", desc: "مارس بناء الثقة من خلال الحوار" },
      { num: 3, title: "الاستكشاف الخفيف", desc: "ابدأ بخطوات صغيرة وآمنة" },
      { num: 4, title: "التواصل المستمر", desc: "حافظ على التواصل المفتوح" },
      { num: 5, title: "الراحة النفسية", desc: "تأكد من راحتك النفسية دائماً" },
      { num: 6, title: "الحدود الواضحة", desc: "ضع حدوداً واضحة ومحترمة" },
      { num: 7, title: "الرعاية اللاحقة", desc: "اعتني ببعضكما بعد كل تجربة" },
      { num: 8, title: "التقييم والتحسين", desc: "قيم التجربة وتحسن باستمرار" },
      { num: 9, title: "الاحترام المتبادل", desc: "احترم رغبات وحدود بعضكما" },
      { num: 10, title: "الاستمتاع الآمن", desc: "استمتع بالتجربة بأمان وثقة" },
      { num: 11, title: "الدعم العاطفي", desc: "قدم الدعم العاطفي المستمر" },
      { num: 12, title: "الثقة المتزايدة", desc: "بناء الثقة تدريجياً مع الوقت" },
      { num: 13, title: "الاستكشاف الآمن", desc: "استكشف بطريقة آمنة ومسؤولة" },
      { num: 14, title: "التوازن الصحي", desc: "حافظ على التوازن الصحي في العلاقة" },
    ],
  },
  {
    level: "المستوى الثاني - التصعيد التدريجي",
    description: "تحديات متوسطة مع زيادة تدريجية",
    color: "from-[#F39C12] to-[#E67E22]",
    icon: "📈",
    challenges: [
      { num: 15, title: "التصعيد المدروس", desc: "صعد التحديات بشكل مدروس وآمن" },
      { num: 16, title: "الثقة المتقدمة", desc: "بناء ثقة أعمق وأقوى" },
      { num: 17, title: "الاستكشاف الموسع", desc: "استكشف مجالات جديدة بحذر" },
      { num: 18, title: "الرموز والإشارات", desc: "تعلم الرموز والإشارات المختلفة" },
      { num: 19, title: "الديناميكيات الجديدة", desc: "اكتشف ديناميكيات جديدة" },
      { num: 20, title: "الاتفاقيات الواضحة", desc: "ضع اتفاقيات واضحة ومفصلة" },
      { num: 21, title: "الاختيار الحكيم", desc: "اختر الشركاء بحكمة وحذر" },
      { num: 22, title: "الأمان الأول", desc: "الأمان الجسدي والعاطفي أولاً" },
      { num: 23, title: "الحماية الكاملة", desc: "تأكد من الحماية الكاملة" },
      { num: 24, title: "الرعاية المتقدمة", desc: "رعاية متقدمة بعد التجارب" },
      { num: 25, title: "التقييم المتعمق", desc: "تقييم متعمق للتجارب" },
      { num: 26, title: "التحسين المستمر", desc: "تحسن مستمر في التجارب" },
      { num: 27, title: "الاتصال العميق", desc: "بناء اتصال عاطفي عميق" },
      { num: 28, title: "الاستقرار العاطفي", desc: "حافظ على الاستقرار العاطفي" },
    ],
  },
  {
    level: "المستوى الثالث - التحديات المتقدمة",
    description: "تحديات جريئة للأزواج المستعدين",
    color: "from-[#E74C3C] to-[#C0392B]",
    icon: "⭐",
    challenges: [
      { num: 29, title: "التحديات الجريئة", desc: "تحديات جريئة وجرئية" },
      { num: 30, title: "الثقة القصوى", desc: "ثقة قصوى وكاملة بين الأطراف" },
      { num: 31, title: "الاستكشاف الكامل", desc: "استكشاف كامل ومفصل" },
      { num: 32, title: "الديناميكيات المعقدة", desc: "ديناميكيات معقدة وعميقة" },
      { num: 33, title: "الحدود المتقدمة", desc: "حدود متقدمة ومعقدة" },
      { num: 34, title: "الاختيار المتقدم", desc: "اختيار متقدم للشركاء" },
      { num: 35, title: "الأمان المتقدم", desc: "أمان متقدم وشامل" },
      { num: 36, title: "الرعاية الكاملة", desc: "رعاية كاملة وشاملة" },
      { num: 37, title: "التقييم الشامل", desc: "تقييم شامل وعميق" },
      { num: 38, title: "التطور المستمر", desc: "تطور مستمر في العلاقة" },
      { num: 39, title: "الاتصال الكامل", desc: "اتصال كامل وعميق جداً" },
      { num: 40, title: "الاستقرار الدائم", desc: "استقرار دائم وعميق" },
    ],
  },
];

export default function Challenges() {
  const [expandedChallenge, setExpandedChallenge] = useState<number | null>(null);
  const [completedChallenges, setCompletedChallenges] = useState<Set<number>>(new Set());

  const toggleChallenge = (num: number) => {
    const newCompleted = new Set(completedChallenges);
    if (newCompleted.has(num)) {
      newCompleted.delete(num);
    } else {
      newCompleted.add(num);
    }
    setCompletedChallenges(newCompleted);
  };

  const totalChallenges = CHALLENGES_DATA.reduce((sum, level) => sum + level.challenges.length, 0);
  const completionPercentage = Math.round((completedChallenges.size / totalChallenges) * 100);

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0A] text-[#E0E0E0]">
      <Header />
      
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-8 md:py-16">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#9B59B6] mb-4 drop-shadow-lg">
            🎯 التحديات الـ40
          </h1>
          <p className="text-[#B8B8B8] text-lg max-w-2xl mx-auto">
            40 تحدياً مدروساً موزعة على ثلاثة مستويات متدرجة. كل تحدٍ مصمم لمساعدتك على استكشاف نمط حياة الزوجة الحرة بأمان وثقة.
          </p>
        </div>

        {/* Progress Section */}
        <div className="bg-gradient-to-b from-[#1a0a1f] to-[#2d1b3d] border border-[rgba(155,89,182,0.3)] rounded-2xl p-6 md:p-8 mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-[#D4AF37] mb-2">
                📊 تقدمك في التحديات
              </h3>
              <p className="text-[#B8B8B8]">
                أكملت {completedChallenges.size} من {totalChallenges} تحدٍ
              </p>
            </div>
            
            {/* Progress Bar */}
            <div className="flex-1 md:flex-initial">
              <div className="w-full md:w-64 h-3 bg-[rgba(155,89,182,0.2)] rounded-full overflow-hidden border border-[rgba(155,89,182,0.3)]">
                <div
                  className="h-full bg-gradient-to-r from-[#9B59B6] to-[#D4AF37] transition-all duration-500"
                  style={{ width: `${completionPercentage}%` }}
                />
              </div>
              <p className="text-right text-[#D4AF37] font-bold mt-2">
                {completionPercentage}%
              </p>
            </div>
          </div>
        </div>

        {/* Levels */}
        {CHALLENGES_DATA.map((level, levelIndex) => (
          <div key={levelIndex} className="mb-12">
            {/* Level Header */}
            <div className={`bg-gradient-to-r ${level.color} rounded-xl p-6 md:p-8 mb-6 shadow-lg`}>
              <div className="flex items-start gap-4">
                <span className="text-4xl">{level.icon}</span>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {level.level}
                  </h2>
                  <p className="text-[rgba(255,255,255,0.9)]">
                    {level.description}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-white text-sm font-semibold">
                    {level.challenges.length} تحدٍ
                  </p>
                </div>
              </div>
            </div>

            {/* Challenges Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {level.challenges.map((challenge) => (
                <div
                  key={challenge.num}
                  onClick={() => toggleChallenge(challenge.num)}
                  className={`relative rounded-lg p-6 transition-all duration-300 cursor-pointer group ${
                    completedChallenges.has(challenge.num)
                      ? "bg-gradient-to-r from-[#27AE60] to-[#229954] border border-[#27AE60] shadow-lg"
                      : "bg-gradient-to-r from-[#1a0a1f] to-[#2d1b3d] border border-[rgba(155,89,182,0.3)] hover:border-[#D4AF37] hover:shadow-xl"
                  }`}
                >
                  {/* Right Border Accent */}
                  <div className={`absolute top-0 right-0 w-1 h-full rounded-r-lg ${
                    completedChallenges.has(challenge.num)
                      ? "bg-white"
                      : "bg-gradient-to-b from-[#D4AF37] to-[#9B59B6]"
                  }`} />

                  <div className="pl-4 flex items-start justify-between">
                    <div className="flex-1">
                      <div className={`inline-block px-3 py-1 rounded-full text-sm font-bold mb-2 ${
                        completedChallenges.has(challenge.num)
                          ? "bg-white text-[#27AE60]"
                          : "bg-[#8E44AD] text-[#D4AF37]"
                      }`}>
                        التحدي {challenge.num}
                      </div>
                      <h3 className={`text-lg font-bold mb-1 ${
                        completedChallenges.has(challenge.num)
                          ? "text-white"
                          : "text-[#D4AF37]"
                      }`}>
                        {challenge.title}
                      </h3>
                      <p className={`text-sm ${
                        completedChallenges.has(challenge.num)
                          ? "text-white"
                          : "text-[#B8B8B8]"
                      }`}>
                        {challenge.desc}
                      </p>
                    </div>

                    {/* Checkbox */}
                    <div className={`w-6 h-6 rounded border-2 flex items-center justify-center flex-shrink-0 ml-4 ${
                      completedChallenges.has(challenge.num)
                        ? "bg-white border-white"
                        : "border-[#D4AF37] group-hover:border-white"
                    }`}>
                      {completedChallenges.has(challenge.num) && (
                        <span className="text-[#27AE60] font-bold">✓</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Summary */}
        <div className="bg-gradient-to-r from-[#9B59B6] to-[#8E44AD] rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            🎉 رحلتك نحو الاستكشاف الآمن
          </h3>
          <p className="text-[rgba(255,255,255,0.9)] max-w-2xl mx-auto">
            كل تحدٍ هو خطوة نحو فهم أعمق وثقة أقوى. تذكر أن الأمان والراحة النفسية هما الأساس دائماً.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

