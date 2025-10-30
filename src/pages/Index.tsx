import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const cityDistances: { [key: string]: { [key: string]: number } } = {
  'Ростов-на-Дону': {
    'Москва': 1090,
    'Санкт-Петербург': 1820,
    'Краснодар': 270,
    'Волгоград': 470,
    'Воронеж': 560,
  },
  'Москва': {
    'Ростов-на-Дону': 1090,
    'Санкт-Петербург': 710,
    'Краснодар': 1360,
    'Волгоград': 970,
    'Воронеж': 520,
  },
};

function Index() {
  const [fromCity, setFromCity] = useState('Ростов-на-Дону');
  const [toCity, setToCity] = useState('Москва');
  const [distance, setDistance] = useState('1090');
  const [calculatedCost, setCalculatedCost] = useState<number | null>(null);

  const handleCityChange = (from: string, to: string) => {
    if (cityDistances[from] && cityDistances[from][to]) {
      const dist = cityDistances[from][to];
      setDistance(dist.toString());
    }
  };

  const calculateCost = () => {
    const dist = parseFloat(distance);
    if (!isNaN(dist) && dist > 0) {
      setCalculatedCost(dist * 90);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Truck" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-foreground">ГрузоТранс</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="#calculator" className="text-foreground hover:text-primary transition-colors">Калькулятор</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#rates" className="text-foreground hover:text-primary transition-colors">Тарифы</a>
            <a href="#geography" className="text-foreground hover:text-primary transition-colors">География</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
        </div>
      </header>

      <section id="home" className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/projects/3c6c0c2e-cc6a-4958-a51c-4efa57c28cd8/files/299f7d7a-4272-417a-8ea5-b317579ae7ee.jpg"
            alt="Грузовик на трассе"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Грузоперевозки до 2 тонн
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Надежная доставка грузов по всей России. Профессиональный подход и выгодные тарифы.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                <a href="https://wa.me/79282264638" target="_blank" rel="noopener noreferrer">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="calculator" className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-foreground mb-4">
              Калькулятор стоимости
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              Рассчитайте стоимость доставки вашего груза
            </p>
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Расчет стоимости доставки</CardTitle>
                <CardDescription>Стоимость: 90 рублей за километр</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fromCity" className="text-foreground">Откуда</Label>
                      <select
                        id="fromCity"
                        value={fromCity}
                        onChange={(e) => {
                          setFromCity(e.target.value);
                          handleCityChange(e.target.value, toCity);
                        }}
                        className="w-full p-2 bg-input border border-border text-foreground rounded-md"
                      >
                        <option value="Ростов-на-Дону">Ростов-на-Дону</option>
                        <option value="Москва">Москва</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="toCity" className="text-foreground">Куда</Label>
                      <select
                        id="toCity"
                        value={toCity}
                        onChange={(e) => {
                          setToCity(e.target.value);
                          handleCityChange(fromCity, e.target.value);
                        }}
                        className="w-full p-2 bg-input border border-border text-foreground rounded-md"
                      >
                        <option value="Москва">Москва</option>
                        <option value="Санкт-Петербург">Санкт-Петербург</option>
                        <option value="Краснодар">Краснодар</option>
                        <option value="Волгоград">Волгоград</option>
                        <option value="Воронеж">Воронеж</option>
                        <option value="Ростов-на-Дону">Ростов-на-Дону</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="distance" className="text-foreground">Расстояние (км)</Label>
                    <Input
                      id="distance"
                      type="number"
                      placeholder="Введите расстояние"
                      value={distance}
                      onChange={(e) => setDistance(e.target.value)}
                      className="bg-input border-border text-foreground"
                    />
                  </div>
                  <Button onClick={calculateCost} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    <Icon name="Calculator" size={20} className="mr-2" />
                    Рассчитать стоимость
                  </Button>
                  {calculatedCost !== null && (
                    <div className="p-6 bg-secondary rounded-lg border border-border">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Маршрут:</p>
                          <p className="font-semibold text-foreground">{fromCity} → {toCity}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">Расстояние:</p>
                          <p className="font-semibold text-foreground">{distance} км</p>
                        </div>
                      </div>
                      <div className="pt-4 border-t border-border">
                        <p className="text-sm text-muted-foreground mb-2">Стоимость доставки:</p>
                        <p className="text-3xl font-bold text-primary">{calculatedCost.toLocaleString('ru-RU')} ₽</p>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">
            Наши услуги
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Комплексные решения для ваших грузоперевозок
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-border hover:border-primary transition-colors">
              <CardHeader>
                <Icon name="Package" size={48} className="text-primary mb-4" />
                <CardTitle className="text-foreground">Перевозка грузов</CardTitle>
                <CardDescription>Грузоподъемность до 2 тонн</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Безопасная транспортировка различных типов грузов с соблюдением всех норм и требований.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary transition-colors">
              <CardHeader>
                <Icon name="MapPin" size={48} className="text-primary mb-4" />
                <CardTitle className="text-foreground">По всей России</CardTitle>
                <CardDescription>Межгородские перевозки</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Доставляем грузы в любую точку России. Контроль груза на всех этапах маршрута.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary transition-colors">
              <CardHeader>
                <Icon name="Clock" size={48} className="text-primary mb-4" />
                <CardTitle className="text-foreground">Срочная доставка</CardTitle>
                <CardDescription>Доставка точно в срок</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Гарантируем доставку в оговоренные сроки. Отслеживание груза в реальном времени.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="rates" className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">
            Тарифы
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Прозрачное ценообразование без скрытых платежей
          </p>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                    <div className="flex items-center gap-4">
                      <Icon name="Gauge" size={32} className="text-primary" />
                      <div>
                        <p className="font-semibold text-foreground">Базовая ставка</p>
                        <p className="text-sm text-muted-foreground">За каждый километр пути</p>
                      </div>
                    </div>
                    <p className="text-2xl font-bold text-primary">90 ₽/км</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-secondary rounded-lg">
                      <Icon name="Truck" size={24} className="text-primary mb-2" />
                      <p className="font-semibold text-foreground mb-1">Грузоподъемность</p>
                      <p className="text-muted-foreground">До 2 тонн</p>
                    </div>
                    <div className="p-4 bg-secondary rounded-lg">
                      <Icon name="Shield" size={24} className="text-primary mb-2" />
                      <p className="font-semibold text-foreground mb-1">Страхование</p>
                      <p className="text-muted-foreground">Груз застрахован</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="geography" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">
            География работы
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Осуществляем перевозки по всей территории России
          </p>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Icon name="MapPin" className="text-primary" size={24} />
                      Основные регионы
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Icon name="ChevronRight" className="text-primary" size={16} />
                        Москва и Московская область
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="ChevronRight" className="text-primary" size={16} />
                        Санкт-Петербург и Ленинградская область
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="ChevronRight" className="text-primary" size={16} />
                        Центральный федеральный округ
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="ChevronRight" className="text-primary" size={16} />
                        Приволжский федеральный округ
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Icon name="Truck" className="text-primary" size={24} />
                      Возможности
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Icon name="ChevronRight" className="text-primary" size={16} />
                        Межгородские перевозки
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="ChevronRight" className="text-primary" size={16} />
                        Доставка в отдаленные регионы
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="ChevronRight" className="text-primary" size={16} />
                        Любые расстояния
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="ChevronRight" className="text-primary" size={16} />
                        Контроль на всех этапах
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">
            Контакты
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Свяжитесь с нами любым удобным способом
          </p>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Свяжитесь с нами</CardTitle>
                <CardDescription>Ответим на все ваши вопросы</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon name="Phone" className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Телефон</p>
                    <a href="tel:+79282264638" className="text-lg font-semibold text-foreground hover:text-primary">
                      +7 (928) 226-46-38
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon name="MessageCircle" className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">WhatsApp</p>
                    <a href="https://wa.me/79282264638" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-foreground hover:text-primary">
                      +7 (928) 226-46-38
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Преимущества</CardTitle>
                <CardDescription>Почему выбирают нас</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-foreground">Опыт работы</p>
                    <p className="text-sm text-muted-foreground">Более 10 лет на рынке</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-foreground">Надежность</p>
                    <p className="text-sm text-muted-foreground">Страхование груза</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-foreground">Прозрачность</p>
                    <p className="text-sm text-muted-foreground">Честные цены без наценок</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Truck" className="text-primary" size={24} />
              <span className="font-bold text-foreground">ГрузоТранс</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 ГрузоТранс. Грузоперевозки по всей России.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Index;