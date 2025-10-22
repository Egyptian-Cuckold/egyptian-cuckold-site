import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Comment {
  id: number;
  author: string;
  avatar: string;
  date: string;
  content: string;
  likes: number;
  replies: number;
}

const SAMPLE_COMMENTS: Comment[] = [
  {
    id: 1,
    author: "الفارس الأزرق",
    avatar: "👨",
    date: "منذ يومين",
    content: "محتوى رائع وشامل جداً. ساعدني الكثير في فهم المزيد عن الموضوع. شكراً على الجهد المبذول!",
    likes: 24,
    replies: 3,
  },
  {
    id: 2,
    author: "ملكة الليل",
    avatar: "👩",
    date: "منذ يوم",
    content: "التحديات مرتبة بشكل منطقي جداً. أعجبني كيف تم التركيز على الأمان والثقة في كل خطوة.",
    likes: 18,
    replies: 2,
  },
  {
    id: 3,
    author: "الحكيم الصامت",
    avatar: "👨",
    date: "منذ 5 ساعات",
    content: "هل هناك نسخة مطبوعة من هذا المحتوى؟ أود أن أشاركها مع صديقاتي.",
    likes: 12,
    replies: 5,
  },
];

export default function Comments() {
  const [comments, setComments] = useState<Comment[]>(SAMPLE_COMMENTS);
  const [newComment, setNewComment] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [likedComments, setLikedComments] = useState<Set<number>>(new Set());
  const [expandedReplies, setExpandedReplies] = useState<Set<number>>(new Set());

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim() && authorName.trim()) {
      const comment: Comment = {
        id: comments.length + 1,
        author: authorName,
        avatar: "👤",
        date: "الآن",
        content: newComment,
        likes: 0,
        replies: 0,
      };
      setComments([comment, ...comments]);
      setNewComment("");
      setAuthorName("");
    }
  };

  const toggleLike = (id: number) => {
    const newLiked = new Set(likedComments);
    if (newLiked.has(id)) {
      newLiked.delete(id);
    } else {
      newLiked.add(id);
    }
    setLikedComments(newLiked);
  };

  const toggleReplies = (id: number) => {
    const newExpanded = new Set(expandedReplies);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedReplies(newExpanded);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0A] text-[#E0E0E0]">
      <Header />
      
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-8 md:py-16">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#9B59B6] mb-4 drop-shadow-lg">
            💬 الآراء والتعليقات
          </h1>
          <p className="text-[#B8B8B8] text-lg max-w-2xl mx-auto text-right">
            شاركنا تجربتك، أسئلتك، أو آرائك حول المحتوى. نحن نرحب بجميع التعليقات البناءة والمناقشات الهادفة التي تساعد المجتمع على التعلم والنمو معاً.
          </p>
        </div>

        {/* Guidelines */}
        <div className="bg-[rgba(155,89,182,0.1)] border-r-4 border-[#D4AF37] rounded-xl p-6 md:p-8 mb-12">
          <h3 className="text-2xl font-bold text-[#D4AF37] mb-6 text-right">📌 إرشادات المشاركة</h3>
          <ul className="space-y-3">
            {[
              "شارك تجاربك الشخصية بصدق واحترام",
              "اطرح أسئلتك واستفسر عن أي موضوع يهمك",
              "احترم آراء الآخرين حتى لو اختلفت معهم",
              "تجنب المحتوى المسيء أو غير اللائق",
              "استخدم لغة واضحة ومهذبة في التعليقات",
            ].map((guideline, i) => (
              <li key={i} className="flex items-start gap-3 text-[#E0E0E0] flex-row-reverse">
                <span className="text-[#D4AF37] font-bold text-lg flex-shrink-0">✓</span>
                <span>{guideline}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* New Comment Form */}
        <div className="bg-gradient-to-b from-[#1a0a1f] to-[#2d1b3d] border border-[rgba(155,89,182,0.3)] rounded-2xl p-6 md:p-8 mb-12">
          <h2 className="text-2xl font-bold text-[#D4AF37] mb-6 text-right">
            ✍️ شارك تعليقك
          </h2>
          
          <form onSubmit={handleSubmitComment} className="space-y-4">
            {/* Name Input */}
            <div>
              <label className="block text-[#D4AF37] font-semibold mb-2 text-right">
                اسمك
              </label>
              <input
                type="text"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                placeholder="أدخل اسمك"
                className="w-full bg-[rgba(155,89,182,0.1)] border border-[rgba(155,89,182,0.3)] rounded-lg px-4 py-3 text-[#E0E0E0] placeholder-[#B8B8B8] focus:border-[#D4AF37] focus:outline-none transition-all"
              />
            </div>

            {/* Comment Textarea */}
            <div>
              <label className="block text-[#D4AF37] font-semibold mb-2 text-right">
                تعليقك
              </label>
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="شارك آرائك وتجاربك..."
                rows={4}
                className="w-full bg-[rgba(155,89,182,0.1)] border border-[rgba(155,89,182,0.3)] rounded-lg px-4 py-3 text-[#E0E0E0] placeholder-[#B8B8B8] focus:border-[#D4AF37] focus:outline-none transition-all resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!newComment.trim() || !authorName.trim()}
              className="w-full bg-gradient-to-r from-[#9B59B6] to-[#8E44AD] text-white font-bold py-3 rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              📤 نشر التعليق
            </button>
          </form>
        </div>

        {/* Comments List */}
        <div className="space-y-6 mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-[#D4AF37] text-right">
              💭 التعليقات ({comments.length})
            </h2>
          </div>

          {comments.length > 0 ? (
            comments.map((comment) => (
              <div
                key={comment.id}
                className="bg-gradient-to-r from-[#1a0a1f] to-[#2d1b3d] border border-[rgba(155,89,182,0.3)] rounded-xl p-6 hover:border-[#D4AF37] transition-all duration-300"
              >
                {/* Comment Header */}
                <div className="flex items-start justify-end mb-4">
                  <div className="flex items-center gap-3 flex-row-reverse">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#9B59B6] to-[#D4AF37] rounded-full flex items-center justify-center text-2xl">
                      {comment.avatar}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#D4AF37]">
                        {comment.author}
                      </h3>
                      <p className="text-[#B8B8B8] text-sm">
                        {comment.date}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Comment Content */}
                <p className="text-[#E0E0E0] leading-relaxed mb-4 text-right">
                  {comment.content}
                </p>

                {/* Comment Actions */}
                <div className="flex flex-wrap gap-4 pt-4 border-t border-[rgba(155,89,182,0.3)]">
                  {/* Like Button */}
                  <button
                    onClick={() => toggleLike(comment.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                      likedComments.has(comment.id)
                        ? "bg-[rgba(212,175,55,0.2)] text-[#D4AF37]"
                        : "text-[#B8B8B8] hover:bg-[rgba(155,89,182,0.2)]"
                    }`}
                  >
                    <span>👍</span>
                    <span className="text-sm font-semibold">
                      {comment.likes + (likedComments.has(comment.id) ? 1 : 0)}
                    </span>
                  </button>

                  {/* Reply Button */}
                  <button
                    onClick={() => toggleReplies(comment.id)}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-[#B8B8B8] hover:bg-[rgba(155,89,182,0.2)] transition-all"
                  >
                    <span>💬</span>
                    <span className="text-sm font-semibold">
                      {comment.replies} ردود
                    </span>
                  </button>

                  {/* Share Button */}
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-[#B8B8B8] hover:bg-[rgba(155,89,182,0.2)] transition-all">
                    <span>🔗</span>
                    <span className="text-sm font-semibold">مشاركة</span>
                  </button>
                </div>

                {/* Replies Section */}
                {expandedReplies.has(comment.id) && (
                  <div className="mt-6 pt-6 border-t border-[rgba(155,89,182,0.3)]">
                    <p className="text-[#B8B8B8] text-sm mb-4 text-right">
                      الردود على هذا التعليق قيد التطوير
                    </p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-12 bg-[rgba(155,89,182,0.1)] rounded-xl">
              <p className="text-[#B8B8B8] text-lg">
                لا توجد تعليقات حتى الآن. كن أول من يشارك رأيه!
              </p>
            </div>
          )}
        </div>

        {/* Setup Guide */}
        <div className="bg-[rgba(155,89,182,0.1)] border border-[rgba(155,89,182,0.3)] rounded-xl p-8">
          <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 text-right">
            📝 كيفية إعداد نظام التعليقات المتقدم
          </h3>
          <p className="text-[#E0E0E0] text-lg mb-6 text-right">
            لتفعيل نظام التعليقات المتقدم مع GitHub Discussions، قم بزيارة{" "}
            <a
              href="https://giscus.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4AF37] font-bold hover:underline"
            >
              giscus.app
            </a>{" "}
            واتبع الخطوات التالية:
          </p>
          <ol className="text-right text-[#E0E0E0] max-w-2xl mx-auto space-y-3 list-decimal list-inside">
            {[
              "أنشئ مستودع عام على GitHub",
              "فعّل GitHub Discussions في إعدادات المستودع",
              "قم بتثبيت تطبيق Giscus من GitHub Marketplace",
              "احصل على معرفات المستودع والفئة من موقع giscus.app",
              "استبدل القيم في الكود (data-repo, data-repo-id, data-category-id)",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3 flex-row-reverse">
                <span className="text-[#D4AF37] font-bold flex-shrink-0">
                  {i + 1}.
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </main>

      <Footer />
    </div>
  );
}

