import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Services() {
  return (
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
  );
}
