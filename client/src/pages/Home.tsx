import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Star, Sparkles, Palette, Video, BarChart3, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

/**
 * صفحة الهبوط الرئيسية - الأفق ميديا
 * Design Philosophy: Professional & Premium
 * - Navy Blue (#001f3f) + Gold (#FFD700) color scheme
 * - Modern, clean layout with strategic whitespace
 * - Arabic-first design with RTL support
 * - Smooth animations and transitions
 */

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("يرجى ملء جميع الحقول المطلوبة");
      return;
    }
    toast.success("تم استقبال رسالتك بنجاح! سنتواصل معك قريباً");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#001f3f] to-[#003d66] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">أ</span>
            </div>
            <h1 className="text-xl font-bold text-[#001f3f]">الأفق ميديا</h1>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#services" className="text-gray-700 hover:text-[#001f3f] transition">الخدمات</a>
            <a href="#testimonials" className="text-gray-700 hover:text-[#001f3f] transition">آراء العملاء</a>
            <a href="#contact" className="text-gray-700 hover:text-[#001f3f] transition">تواصل معنا</a>
          </nav>
          <Button className="bg-[#FFD700] text-[#001f3f] hover:bg-[#FFC700] font-bold">
            اطلب خدمة
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#001f3f] to-[#003d66] text-white py-20 md:py-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFD700] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00d4ff] rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-[#FFD700]/20 rounded-full border border-[#FFD700]/50">
              <span className="text-[#FFD700] font-semibold text-sm">🚀 وكالة دعاية وإعلان احترافية</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              إعلانك يلمع 💡
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              نصمم، نخطط، ونضربها ضربة تسويقية تحقق فرق فعلي. خدمات تسويق رقمي متكاملة تحول أحلام عملك إلى واقع ملموس.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#FFD700] text-[#001f3f] hover:bg-[#FFC700] font-bold text-lg px-8">
                ابدأ الآن
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold text-lg px-8">
                تعرف على خدماتنا
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#001f3f] mb-4">عن الأفق ميديا</h2>
            <p className="text-gray-600 text-lg">
              نحن فريق من المتخصصين في التسويق الرقمي والدعاية الإعلانية، نعمل على تحويل رؤيتك إلى حملات تسويقية فعّالة تصل إلى جمهورك المستهدف وتحقق نتائج ملموسة.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition">
              <CardHeader>
                <div className="w-12 h-12 bg-[#FFD700] rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-[#001f3f]" />
                </div>
                <CardTitle className="text-[#001f3f]">53+ متابع</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">مجتمع متنامي من العملاء الراضين والمتابعين الأوفياء</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition">
              <CardHeader>
                <div className="w-12 h-12 bg-[#FFD700] rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-[#001f3f]" />
                </div>
                <CardTitle className="text-[#001f3f]">نتائج مثبتة</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">حملات تسويقية فعّالة تحقق أهدافك وتزيد من عائد الاستثمار</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition">
              <CardHeader>
                <div className="w-12 h-12 bg-[#FFD700] rounded-lg flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6 text-[#001f3f]" />
                </div>
                <CardTitle className="text-[#001f3f]">تصاميم احترافية</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">هويات بصرية قوية وتصاميم جرافيكية تعكس قيم علامتك التجارية</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#001f3f] mb-4">خدماتنا</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              مجموعة شاملة من الخدمات التسويقية المتكاملة لرفع مستوى عملك
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition hover:-translate-y-1 duration-300">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-[#001f3f] to-[#003d66] rounded-lg flex items-center justify-center mb-4">
                  <Palette className="w-7 h-7 text-[#FFD700]" />
                </div>
                <CardTitle className="text-[#001f3f]">تصميم الهوية البصرية</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  نصمم هويات بصرية متكاملة تشمل الشعارات والألوان والخطوط التي تعكس قيم علامتك التجارية بقوة واحترافية.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ تصميم شعارات احترافية</li>
                  <li>✓ اختيار الألوان والخطوط</li>
                  <li>✓ دليل الهوية البصرية</li>
                </ul>
              </CardContent>
            </Card>

            {/* Service 2 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition hover:-translate-y-1 duration-300">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-[#001f3f] to-[#003d66] rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-7 h-7 text-[#FFD700]" />
                </div>
                <CardTitle className="text-[#001f3f]">إدارة وسائل التواصل</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  إدارة احترافية لحساباتك على وسائل التواصل الاجتماعي مع محتوى جذاب وحملات موجهة تزيد من التفاعل.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ إنشاء محتوى جذاب</li>
                  <li>✓ جدولة المنشورات</li>
                  <li>✓ تحليل الأداء</li>
                </ul>
              </CardContent>
            </Card>

            {/* Service 3 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition hover:-translate-y-1 duration-300">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-[#001f3f] to-[#003d66] rounded-lg flex items-center justify-center mb-4">
                  <Video className="w-7 h-7 text-[#FFD700]" />
                </div>
                <CardTitle className="text-[#001f3f]">إنتاج الفيديو</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  فيديوهات احترافية وريلز جذابة تروي قصة علامتك التجارية وتزيد من الوعي بمنتجاتك أو خدماتك.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ إنتاج فيديوهات عالية الجودة</li>
                  <li>✓ تصميم ريلز جذابة</li>
                  <li>✓ تحرير احترافي</li>
                </ul>
              </CardContent>
            </Card>

            {/* Service 4 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition hover:-translate-y-1 duration-300">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-[#001f3f] to-[#003d66] rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="w-7 h-7 text-[#FFD700]" />
                </div>
                <CardTitle className="text-[#001f3f]">تصميم الجرافيك</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  تصاميم جرافيكية احترافية وجذابة لجميع احتياجاتك التسويقية من المنشورات إلى الإعلانات.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ تصاميم المنشورات</li>
                  <li>✓ الإعلانات المرئية</li>
                  <li>✓ المواد التسويقية</li>
                </ul>
              </CardContent>
            </Card>

            {/* Service 5 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition hover:-translate-y-1 duration-300">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-[#001f3f] to-[#003d66] rounded-lg flex items-center justify-center mb-4">
                  <Mail className="w-7 h-7 text-[#FFD700]" />
                </div>
                <CardTitle className="text-[#001f3f]">التسويق عبر البريد</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  حملات بريدية فعّالة تصل إلى جمهورك المستهدف مع رسائل مخصصة وجذابة.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ تصميم الرسائل البريدية</li>
                  <li>✓ إدارة القوائم البريدية</li>
                  <li>✓ تحليل الأداء</li>
                </ul>
              </CardContent>
            </Card>

            {/* Service 6 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition hover:-translate-y-1 duration-300">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-[#001f3f] to-[#003d66] rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-7 h-7 text-[#FFD700]" />
                </div>
                <CardTitle className="text-[#001f3f]">الحملات الممولة</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  إدارة احترافية للحملات الإعلانية الممولة على مختلف المنصات لتحقيق أقصى عائد استثمار.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ إدارة الميزانية</li>
                  <li>✓ استهداف دقيق</li>
                  <li>✓ تحسين الأداء</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#001f3f] mb-4">آراء عملائنا</h2>
            <p className="text-gray-600 text-lg">
              ماذا يقول عملاؤنا عن خدماتنا
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Testimonial 1 */}
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#FFD700] text-[#FFD700]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "انصحك تسوي لك فيديو ريلز وتموله افضل من المنشور يضرب ويجيب عملاء كثير. فريق الأفق ميديا قدم لنا حلولاً فعّالة جداً."
                </p>
                <div>
                  <p className="font-bold text-[#001f3f]">عرفات الحذاري</p>
                  <p className="text-sm text-gray-600">عميل</p>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#FFD700] text-[#FFD700]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "تجربة رائعة مع فريق الأفق ميديا. احترافيتهم وسرعتهم في تنفيذ الحملات جعلت من عملنا أسهل وأكثر فعالية."
                </p>
                <div>
                  <p className="font-bold text-[#001f3f]">عميل راضٍ</p>
                  <p className="text-sm text-gray-600">صاحب مشروع</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#001f3f] mb-4">تواصل معنا</h2>
              <p className="text-gray-600 text-lg">
                هل لديك مشروع في ذهنك؟ دعنا نساعدك في تحويله إلى واقع
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#FFD700] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#001f3f]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#001f3f] mb-1">الهاتف</h3>
                    <p className="text-gray-600">+967 771 745 824</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#FFD700] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#001f3f]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#001f3f] mb-1">البريد الإلكتروني</h3>
                    <p className="text-gray-600">ofoqmedia2@gmail.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#FFD700] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#001f3f]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#001f3f] mb-1">الموقع</h3>
                    <p className="text-gray-600">صنعاء، اليمن</p>
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="font-bold text-[#001f3f] mb-3">تابعنا على</h3>
                  <div className="flex gap-3">
                    <a href="https://www.facebook.com/profile.php?id=61573258015096" target="_blank" rel="noopener noreferrer" 
                       className="w-10 h-10 bg-[#001f3f] rounded-lg flex items-center justify-center text-white hover:bg-[#003d66] transition">
                      f
                    </a>
                    <a href="https://www.instagram.com/4ho_zn" target="_blank" rel="noopener noreferrer"
                       className="w-10 h-10 bg-[#001f3f] rounded-lg flex items-center justify-center text-white hover:bg-[#003d66] transition">
                      📷
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-[#001f3f] font-semibold">الاسم</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="أدخل اسمك"
                    className="mt-2 border-gray-300 focus:border-[#001f3f] focus:ring-[#001f3f]"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-[#001f3f] font-semibold">البريد الإلكتروني</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="أدخل بريدك الإلكتروني"
                    className="mt-2 border-gray-300 focus:border-[#001f3f] focus:ring-[#001f3f]"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-[#001f3f] font-semibold">الهاتف (اختياري)</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="أدخل رقم هاتفك"
                    className="mt-2 border-gray-300 focus:border-[#001f3f] focus:ring-[#001f3f]"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-[#001f3f] font-semibold">الرسالة</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="أخبرنا عن مشروعك..."
                    rows={4}
                    className="mt-2 border-gray-300 focus:border-[#001f3f] focus:ring-[#001f3f]"
                  />
                </div>

                <Button type="submit" className="w-full bg-[#001f3f] hover:bg-[#003d66] text-white font-bold py-2 flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  إرسال الرسالة
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#001f3f] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">الأفق ميديا</h3>
              <p className="text-gray-300 text-sm">
                وكالة دعاية وإعلان احترافية متخصصة في التسويق الرقمي والحملات الإعلانية الفعّالة.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">الخدمات</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#services" className="hover:text-[#FFD700] transition">تصميم الهوية</a></li>
                <li><a href="#services" className="hover:text-[#FFD700] transition">إدارة وسائل التواصل</a></li>
                <li><a href="#services" className="hover:text-[#FFD700] transition">إنتاج الفيديو</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">روابط سريعة</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#services" className="hover:text-[#FFD700] transition">الخدمات</a></li>
                <li><a href="#testimonials" className="hover:text-[#FFD700] transition">آراء العملاء</a></li>
                <li><a href="#contact" className="hover:text-[#FFD700] transition">تواصل معنا</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">معلومات التواصل</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>📞 +967 771 745 824</li>
                <li>📧 ofoqmedia2@gmail.com</li>
                <li>📍 صنعاء، اليمن</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2026 الأفق ميديا. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
