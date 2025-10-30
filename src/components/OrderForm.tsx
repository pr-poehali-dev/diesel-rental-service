import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

export default function OrderForm() {
  return (
    <section id="order" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">
            Заказать грузовик
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            Заполните форму и мы свяжемся с вами в ближайшее время
          </p>
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="orderDate" className="text-foreground">Дата подачи</Label>
                    <Input
                      id="orderDate"
                      type="date"
                      className="bg-input border-border text-foreground"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="orderTime" className="text-foreground">Время подачи</Label>
                    <Input
                      id="orderTime"
                      type="time"
                      className="bg-input border-border text-foreground"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="length" className="text-foreground">Длина (м)</Label>
                    <Input
                      id="length"
                      type="number"
                      placeholder="0"
                      step="0.1"
                      className="bg-input border-border text-foreground"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="width" className="text-foreground">Ширина (м)</Label>
                    <Input
                      id="width"
                      type="number"
                      placeholder="0"
                      step="0.1"
                      className="bg-input border-border text-foreground"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="height" className="text-foreground">Высота (м)</Label>
                    <Input
                      id="height"
                      type="number"
                      placeholder="0"
                      step="0.1"
                      className="bg-input border-border text-foreground"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="weight" className="text-foreground">Вес груза (кг)</Label>
                  <Input
                    id="weight"
                    type="number"
                    placeholder="Введите вес"
                    className="bg-input border-border text-foreground"
                  />
                  <p className="text-xs text-muted-foreground">
                    Максимальная грузоподъемность: 2000 кг
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cargoType" className="text-foreground">Что везем</Label>
                  <textarea
                    id="cargoType"
                    rows={4}
                    placeholder="Опишите груз (мебель, стройматериалы, оборудование и т.д.)"
                    className="w-full p-3 bg-input border border-border text-foreground rounded-md resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">Телефон для связи</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    className="bg-input border-border text-foreground"
                  />
                </div>

                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>

                <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg">
                  <Icon name="Info" className="text-primary" size={20} />
                  <p className="text-sm text-muted-foreground">
                    После отправки заявки наш менеджер свяжется с вами в течение 15 минут для уточнения деталей
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
