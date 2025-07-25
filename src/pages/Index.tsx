import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const newsCategories = [
    { name: "Городские новости", color: "bg-burgundy text-white", count: 15 },
    { name: "Культура", color: "bg-burgundy-light text-white", count: 8 },
    { name: "Спорт", color: "bg-burgundy-dark text-white", count: 12 },
    { name: "Экономика", color: "bg-gray-600 text-white", count: 6 },
    { name: "Социальная сфера", color: "bg-gray-700 text-white", count: 9 }
  ];

  const featuredNews = [
    {
      title: "Открытие нового культурного центра в районе",
      excerpt: "В субботу состоялось торжественное открытие долгожданного культурного центра, который станет центром притяжения для всех жителей района.",
      category: "Культура",
      date: "25 июля 2025",
      image: "/img/22e47b1d-04ed-4f8c-bb64-a8248e4e3e0f.jpg"
    },
    {
      title: "Благоустройство парковой зоны завершено",
      excerpt: "Работы по реконструкции центрального парка завершены досрочно. Новые аллеи, детская площадка и зона отдыха уже доступны жителям.",
      category: "Городские новости",
      date: "24 июля 2025"
    },
    {
      title: "Районная футбольная команда вышла в финал",
      excerpt: "Команда 'Победа' одержала уверенную победу в полуфинале областного чемпионата и готовится к решающему матчу.",
      category: "Спорт", 
      date: "23 июля 2025"
    }
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-burgundy text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Районная Газета</h1>
              <p className="text-burgundy-light text-sm">Новости нашего района • Основана в 1985 году</p>
            </div>
            <div className="text-right">
              <p className="text-sm">{new Date().toLocaleDateString('ru-RU', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
              <p className="text-xs text-burgundy-light mt-1">№29 (2024)</p>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex space-x-8">
              <a href="#" className="text-burgundy hover:text-burgundy-light font-medium transition-colors">Главная</a>
              <a href="#" className="text-gray-600 hover:text-burgundy transition-colors">Новости</a>
              <a href="#" className="text-gray-600 hover:text-burgundy transition-colors">О редакции</a>
              <a href="#" className="text-gray-600 hover:text-burgundy transition-colors">Контакты</a>
              <a href="#" className="text-gray-600 hover:text-burgundy transition-colors">Архив номеров</a>
              <a href="#" className="text-gray-600 hover:text-burgundy transition-colors">Подписка</a>
              <a href="#" className="text-gray-600 hover:text-burgundy transition-colors">События</a>
            </div>
            <Button className="bg-burgundy hover:bg-burgundy-dark">
              <Icon name="Bell" size={16} className="mr-2" />
              Подписаться
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured News */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-burgundy mb-6">Главные новости</h2>
              <div className="grid gap-6">
                {featuredNews.map((news, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="grid md:grid-cols-3 gap-4">
                      {news.image && (
                        <div className="md:col-span-1">
                          <img 
                            src={news.image} 
                            alt={news.title}
                            className="w-full h-48 md:h-full object-cover"
                          />
                        </div>
                      )}
                      <div className={news.image ? "md:col-span-2" : "md:col-span-3"}>
                        <CardHeader className="pb-3">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className="bg-burgundy text-white">{news.category}</Badge>
                            <span className="text-sm text-gray-500">{news.date}</span>
                          </div>
                          <CardTitle className="text-xl hover:text-burgundy transition-colors cursor-pointer">
                            {news.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-gray-600 leading-relaxed">
                            {news.excerpt}
                          </CardDescription>
                          <Button variant="outline" className="mt-4 border-burgundy text-burgundy hover:bg-burgundy hover:text-white">
                            Читать далее
                            <Icon name="ArrowRight" size={16} className="ml-2" />
                          </Button>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* News by Categories */}
            <section>
              <h2 className="text-2xl font-bold text-burgundy mb-6">Новости по рубрикам</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {newsCategories.map((category, index) => (
                  <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow">
                    <CardHeader className="flex flex-row items-center justify-between pb-3">
                      <div>
                        <CardTitle className="text-lg">{category.name}</CardTitle>
                        <CardDescription>{category.count} новостей</CardDescription>
                      </div>
                      <Badge className={category.color}>{category.count}</Badge>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">Последнее обновление: вчера</span>
                        <Icon name="ArrowRight" size={16} className="text-burgundy" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Archive */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-burgundy">
                  <Icon name="Archive" size={20} />
                  Архив номеров
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm">№29 Июль 2025</span>
                  <Button variant="ghost" size="sm">PDF</Button>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm">№28 Июль 2025</span>
                  <Button variant="ghost" size="sm">PDF</Button>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm">№27 Июнь 2025</span>
                  <Button variant="ghost" size="sm">PDF</Button>
                </div>
                <Button className="w-full bg-burgundy hover:bg-burgundy-dark mt-4">
                  Весь архив
                </Button>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-burgundy">
                  <Icon name="MapPin" size={20} />
                  Редакция
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm">
                  <p className="font-medium">Адрес:</p>
                  <p className="text-gray-600">ул. Центральная, д. 15</p>
                </div>
                <Separator />
                <div className="text-sm">
                  <p className="font-medium">Телефон:</p>
                  <p className="text-gray-600">+7 (123) 456-78-90</p>
                </div>
                <Separator />
                <div className="text-sm">
                  <p className="font-medium">Email:</p>
                  <p className="text-gray-600">redakciya@rayon-gazeta.ru</p>
                </div>
                <Separator />
                <div className="text-sm">
                  <p className="font-medium">Время работы:</p>
                  <p className="text-gray-600">Пн-Пт: 9:00-18:00</p>
                </div>
              </CardContent>
            </Card>

            {/* Subscription */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-burgundy">
                  <Icon name="Mail" size={20} />
                  Подписка
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Получайте свежие номера газеты прямо на дом или по email
                </p>
                <div className="space-y-2">
                  <Button className="w-full bg-burgundy hover:bg-burgundy-dark">
                    Оформить подписку
                  </Button>
                  <Button variant="outline" className="w-full border-burgundy text-burgundy">
                    Email-рассылка
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-burgundy-dark text-white mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-4">Районная Газета</h3>
              <p className="text-sm text-gray-300">
                Независимое издание, освещающее жизнь нашего района с 1985 года
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Разделы</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Городские новости</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Культура</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Спорт</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Экономика</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>ул. Центральная, д. 15</p>
                <p>+7 (123) 456-78-90</p>
                <p>redakciya@rayon-gazeta.ru</p>
              </div>
            </div>
          </div>
          <Separator className="my-6 bg-burgundy" />
          <div className="flex justify-between items-center text-sm text-gray-300">
            <p>© 2025 Районная Газета. Все права защищены.</p>
            <p>Учредитель: Администрация района</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;