import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Contacts() {
  return (
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
  );
}
