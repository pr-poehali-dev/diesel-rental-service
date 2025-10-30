import Icon from '@/components/ui/icon';

export default function Header() {
  return (
    <header className="border-b border-border bg-card sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon name="Truck" className="text-primary" size={32} />
          <span className="text-2xl font-bold text-foreground">ГрузоТранс</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
          <a href="#calculator" className="text-foreground hover:text-primary transition-colors">Калькулятор</a>
          <a href="#order" className="text-foreground hover:text-primary transition-colors">Заказать</a>
          <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
          <a href="#rates" className="text-foreground hover:text-primary transition-colors">Тарифы</a>
          <a href="#geography" className="text-foreground hover:text-primary transition-colors">География</a>
          <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
        </nav>
      </div>
    </header>
  );
}
