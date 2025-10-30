import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
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
  );
}
