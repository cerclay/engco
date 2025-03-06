'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { 
  CheckCircle, 
  ArrowRight, 
  Brain, 
  Users, 
  Clock, 
  BarChart, 
  Mail,
  MessageSquare,
  Calendar,
  Sparkles,
  GraduationCap,
  Briefcase,
  ChevronRight
} from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export default function Home() {
  const { toast } = useToast();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast({
        description: '유효한 이메일을 입력해주세요.',
        variant: 'destructive',
      });
      return;
    }
    
    toast({
      description: '테스트 결과를 이메일로 보내드리겠습니다.',
    });
    setEmail('');
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="w-6 h-6 text-blue-600" />
            <span className="text-xl font-bold">잉코칭</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-sm font-medium hover:text-blue-600 transition-colors">서비스 소개</a>
            <a href="#features" className="text-sm font-medium hover:text-blue-600 transition-colors">주요 기능</a>
            <a href="#testimonials" className="text-sm font-medium hover:text-blue-600 transition-colors">사용자 후기</a>
            <a href="#pricing" className="text-sm font-medium hover:text-blue-600 transition-colors">프로모션</a>
            <a href="https://cafe.naver.com/engcoaching" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">카페 바로가기</a>
          </nav>
          
          <div>
            <Button asChild className="rounded-full bg-blue-600 hover:bg-blue-700">
              <a href="#contact">테스트 시작하기</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-blue-100 via-blue-50 to-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-60 -left-20 w-60 h-60 bg-blue-300 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 right-60 w-40 h-40 bg-blue-400 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
          <div className="space-y-6 animate-fadeIn" style={{ animationDuration: '1s' }}>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              당신만을 위한 맞춤형 영어 코칭, <span className="text-blue-600 relative inline-block">
                AI
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-blue-600 rounded animate-pulse"></span>
              </span>로 더욱 스마트하게!
            </h1>
            <p className="text-xl text-muted-foreground">
              AI 분석 + 1:1 코칭으로 학습 효과 극대화! 지금 무료로 체험해보세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <a href="#contact">무료 테스트 시작하기</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-blue-300 hover:border-blue-600 transition-all duration-300 transform hover:-translate-y-1">
                <a href="#services">서비스 알아보기 <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" /></a>
              </Button>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <CheckCircle className="mr-1 w-4 h-4 text-green-500" />
                <span>맞춤형 학습</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="mr-1 w-4 h-4 text-green-500" />
                <span>AI 분석</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="mr-1 w-4 h-4 text-green-500" />
                <span>1:1 코칭</span>
              </div>
            </div>
          </div>
          <div className="relative animate-fadeIn" style={{ animationDuration: '1s', animationDelay: '0.5s' }}>
            <div className="relative rounded-lg overflow-hidden shadow-xl transform transition-transform hover:scale-105 duration-500">
              <img 
                src="/1.jpg" 
                alt="AI 학습 분석 화면" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg transform transition-transform hover:scale-110 duration-300">
              <div className="flex items-center gap-2">
                <BarChart className="w-5 h-5 text-blue-600" />
                <div className="text-sm font-medium">학습 성과 +42%</div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg transform transition-transform hover:scale-110 duration-300">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600" />
                <div className="text-sm font-medium">1,000+ 사용자</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50 opacity-70"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-40 -right-20 w-60 h-60 bg-blue-200 rounded-full opacity-20"></div>
          <div className="absolute bottom-20 -left-20 w-80 h-80 bg-blue-100 rounded-full opacity-20"></div>
        </div>
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">서비스 소개</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">AI 기반 맞춤형 영어 코칭 프로그램</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              AI가 여러분의 학습 성향을 분석하여 맞춤형 코칭을 제공합니다. 실시간 피드백과 개인별 학습 플랜을 통해 효율적인 영어 학습이 가능합니다.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              icon={<Brain className="w-10 h-10 text-blue-600" />}
              title="AI 학습 성향 분석"
              description="AI가 개인별 학습 스타일을 분석하고 최적의 코칭을 제공합니다."
              imageUrl="/2.jpg"
            />
            <ServiceCard 
              icon={<BarChart className="w-10 h-10 text-blue-600" />}
              title="실시간 피드백"
              description="실시간 피드백과 학습 성과 리포트를 통해 동기 부여를 제공합니다."
              imageUrl="/3.jpg"
            />
            <ServiceCard 
              icon={<Clock className="w-10 h-10 text-blue-600" />}
              title="시공간 제약 없는 학습"
              description="온라인 기반으로 언제 어디서나 학습이 가능합니다."
              imageUrl="/4.jpg"
            />
            <ServiceCard 
              icon={<Users className="w-10 h-10 text-blue-600" />}
              title="1:1 맞춤 코칭"
              description="AI와 베테랑 강사가 함께 최적의 학습을 도와줍니다."
              imageUrl="/5.jpg"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 right-1/3 w-72 h-72 bg-blue-200 rounded-full opacity-20"></div>
          <div className="absolute bottom-40 right-20 w-60 h-60 bg-blue-100 rounded-full opacity-20"></div>
        </div>
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">주요 기능</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">왜 잉코칭 프로그램이 필요한가요?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              기존 영어 학습의 한계를 뛰어넘는 혁신적인 솔루션을 제공합니다.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <FeatureItem 
                title="학습 공백 해결"
                description="기존 강의식 학습으로 인한 학습 공백을 AI 분석을 통해 개인화된 학습 경로로 보완합니다."
              />
              <FeatureItem 
                title="교육 접근성 확대"
                description="원거리 학습자도 웹과 모바일 앱을 통해 쉽게 학습할 수 있습니다."
              />
              <FeatureItem 
                title="쉬운 사용법"
                description="AI 자동 평가 및 실시간 피드백으로 누구나 쉽게 학습을 지속할 수 있습니다."
              />
              <FeatureItem 
                title="베테랑 강사의 재참여 기회 제공"
                description="AI 코칭을 통해 영시니어 강사들이 교육 시장에서 활약할 수 있도록 지원합니다."
              />
            </div>
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-xl transform transition-transform hover:scale-105 duration-500">
                <img 
                  src="/6.jpg" 
                  alt="온라인 학습 성향 검사지 샘플" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
              </div>
              <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-blue-600" />
                  <div className="text-sm font-medium">맞춤형 학습 경로</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50 opacity-70"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-60 h-60 bg-blue-200 rounded-full opacity-20"></div>
          <div className="absolute bottom-40 right-20 w-80 h-80 bg-blue-100 rounded-full opacity-20"></div>
        </div>
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">사용자 후기</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">사용자 후기</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              잉코칭 프로그램을 통해 영어 실력이 향상된 사용자들의 생생한 후기를 확인하세요.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              name="김지민"
              role="직장인"
              content="AI 분석을 통해 제 학습 스타일에 맞는 코칭을 받을 수 있어서 좋았어요. 특히 실시간 피드백이 학습 동기 부여에 큰 도움이 되었습니다."
            />
            <TestimonialCard 
              name="이승우"
              role="대학생"
              content="시간과 장소에 구애받지 않고 학습할 수 있어서 편리했어요. 베테랑 강사님의 1:1 코칭도 정말 유익했습니다."
            />
            <TestimonialCard 
              name="박소연"
              role="영어 강사"
              content="AI 코칭 시스템을 통해 더 많은 학생들에게 효과적인 교육을 제공할 수 있게 되었어요. 정말 혁신적인 플랫폼입니다."
            />
          </div>
        </div>
      </section>

      {/* Pricing/Promotion Section */}
      <section id="pricing" className="py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-200 rounded-full opacity-20"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-blue-100 rounded-full opacity-20"></div>
        </div>
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">특별 프로모션</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">오픈 베타 특별 프로모션!</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              지금 신청하면 다양한 혜택을 받을 수 있습니다.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Card className="border-2 border-blue-600 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                  <div className="space-y-4">
                    <div className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      한정 프로모션
                    </div>
                    <h3 className="text-2xl font-bold">지금 신청하고 특별 혜택 받기</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 w-5 h-5 text-green-500" />
                        <span>첫 달 무료 체험 제공</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 w-5 h-5 text-green-500" />
                        <span>AI 진단 테스트 무료 제공</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 w-5 h-5 text-green-500" />
                        <span>선착순 100명 대상 1:1 무료 코칭 세션 진행</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-lg transform transition-transform hover:rotate-12 duration-300">
                      <Sparkles className="w-10 h-10" />
                    </div>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <Button asChild size="lg" className="rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <a href="#contact">지금 바로 테스트하기</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section - Replace with Test Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 animate-pulse" style={{ animationDuration: '8s' }}></div>
          <div className="absolute top-60 -left-20 w-60 h-60 bg-blue-300 rounded-full opacity-20 animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 right-60 w-40 h-40 bg-blue-400 rounded-full opacity-20 animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }}></div>
        </div>
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">무료 테스트</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">나에게 맞는 영어 학습법 테스트</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              AI 기반 맞춤형 테스트를 통해 나에게 가장 적합한 영어 학습법을 찾아보세요.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <TestCard 
              icon={<GraduationCap className="w-12 h-12 text-blue-600" />}
              title="학생용 테스트"
              description="중고등학생을 위한 맞춤형 학습 성향 분석 테스트입니다. 학교 영어 성적 향상에 도움이 됩니다."
              buttonText="학생용 테스트 하러가기"
            />
            <TestCard 
              icon={<Briefcase className="w-12 h-12 text-blue-600" />}
              title="성인용 테스트"
              description="직장인, 대학생을 위한 맞춤형 학습 성향 분석 테스트입니다. 실용 영어 능력 향상에 도움이 됩니다."
              buttonText="성인용 테스트 하러가기"
            />
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">테스트 결과를 이메일로 받아보세요</p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="이메일을 입력하세요" 
                className="rounded-full shadow-sm focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button type="submit" className="rounded-full bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg transition-all duration-300">
                결과 받기
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-blue-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Brain className="w-8 h-8 text-blue-400" />
                <span className="text-2xl font-bold">잉코칭</span>
              </div>
              <p className="text-gray-400 mb-6">
                AI 기반 맞춤형 영어 코칭 플랫폼
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="https://cafe.naver.com/engcoaching" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">회사 정보</h3>
              <ul className="space-y-3 text-gray-400">
                <li>회사명: 잉코칭</li>
                <li>대표: 박재신</li>
                <li>사업자등록번호: 123-45-67890</li>
                <li>주소: 서울특별시 강남구</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">연락처</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span>info@incoaching.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-blue-400" />
                  <span>고객센터: 02-123-4567</span>
                </li>
                <li className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-400" />
                  <span>평일 09:00 - 18:00</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">바로가기</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#services" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                    <ChevronRight className="w-4 h-4" />
                    <span>서비스 소개</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                    <ChevronRight className="w-4 h-4" />
                    <span>이용약관</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                    <ChevronRight className="w-4 h-4" />
                    <span>개인정보처리방침</span>
                  </a>
                </li>
                <li>
                  <a href="https://cafe.naver.com/engcoaching" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                    <ChevronRight className="w-4 h-4" />
                    <span>카페 바로가기</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-700" />
          
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <div>&copy; {new Date().getFullYear()} 잉코칭. All rights reserved.</div>
            <div className="mt-4 md:mt-0">
              <Button asChild variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <a href="#" className="flex items-center gap-1">
                  <ArrowRight className="w-4 h-4" />
                  <span>맨 위로</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, description, imageUrl }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  imageUrl: string;
}) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-xl hover:translate-y-[-5px] duration-300 border-2 hover:border-blue-200 group">
      <div className="relative h-48 overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
        <div className="absolute top-4 left-4 bg-white p-2 rounded-full shadow-md">
          {icon}
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

function FeatureItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="space-y-2 p-4 rounded-lg hover:bg-blue-50 transition-colors duration-300">
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 shadow-sm">
          <CheckCircle className="w-5 h-5 text-blue-600" />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-muted-foreground pl-12">{description}</p>
    </div>
  );
}

function TestimonialCard({ name, role, content }: { name: string; role: string; content: string }) {
  return (
    <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200 group">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="mb-4 text-4xl text-blue-600 opacity-60 group-hover:opacity-100 transition-opacity">"</div>
        <p className="flex-1 text-muted-foreground mb-4 italic">{content}</p>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center shadow-sm group-hover:shadow-md transition-all">
            <span className="text-blue-600 font-semibold">{name.charAt(0)}</span>
          </div>
          <div>
            <div className="font-semibold group-hover:text-blue-600 transition-colors">{name}</div>
            <div className="text-sm text-muted-foreground">{role}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function TestCard({ icon, title, description, buttonText }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  buttonText: string;
}) {
  const getTestLink = () => {
    if (title === "학생용 테스트") {
      return "https://docs.google.com/forms/d/e/1FAIpQLSfM26c4wMqziJMuCZ-WgT2skFTuqnIf5eWMABRFhC5NgdbKzQ/viewform?usp=sf_link";
    } else if (title === "성인용 테스트") {
      return "https://docs.google.com/forms/d/e/1FAIpQLSdKYDkOsV4tAD-x31oMr0b5Qb4UTMuwT9GVpCVN64ZzROmUwA/viewform?usp=sf_link";
    }
    return "#";
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg border-2 hover:border-blue-400 group relative">
      <div className="absolute top-4 right-4 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
        무료
      </div>
      <CardContent className="p-8">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 p-4 bg-blue-50 rounded-full transition-transform group-hover:scale-110 duration-300">
            {icon}
          </div>
          <h3 className="text-2xl font-bold mb-3">{title}</h3>
          <p className="text-muted-foreground mb-6">{description}</p>
          <Button asChild className="rounded-full bg-blue-600 hover:bg-blue-700 w-full transition-transform group-hover:translate-y-1 duration-300">
            <a href={getTestLink()} target="_blank" rel="noopener noreferrer">
              {buttonText} <ChevronRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 duration-300" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
