import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Rates() {
  return (
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
  );
}
