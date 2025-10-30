import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Geography() {
  return (
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
  );
}
