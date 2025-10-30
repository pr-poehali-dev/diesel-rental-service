import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { russianCities, getDistance } from '@/lib/cityData';

export default function Calculator() {
  const [deliveryType, setDeliveryType] = useState<'intercity' | 'hourly'>('intercity');
  const [fromCity, setFromCity] = useState('Ростов-на-Дону');
  const [toCity, setToCity] = useState('Москва');
  const [distance, setDistance] = useState('1090');
  const [hours, setHours] = useState('1');
  const [calculatedCost, setCalculatedCost] = useState<number | null>(null);

  const handleCityChange = (from: string, to: string) => {
    const dist = getDistance(from, to);
    if (dist !== null) {
      setDistance(dist.toString());
    } else {
      setDistance('');
    }
  };

  const calculateCost = () => {
    if (deliveryType === 'intercity') {
      const dist = parseFloat(distance);
      if (!isNaN(dist) && dist > 0) {
        setCalculatedCost(dist * 90);
      }
    } else {
      const hrs = parseFloat(hours);
      if (!isNaN(hrs) && hrs > 0) {
        setCalculatedCost(hrs * 1500);
      }
    }
  };

  return (
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
              <CardDescription>Выберите тип доставки</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setDeliveryType('intercity')}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      deliveryType === 'intercity'
                        ? 'border-primary bg-primary/10'
                        : 'border-border bg-card hover:border-primary/50'
                    }`}
                  >
                    <Icon name="MapPin" size={32} className={deliveryType === 'intercity' ? 'text-primary' : 'text-muted-foreground'} />
                    <p className={`font-semibold mt-2 ${deliveryType === 'intercity' ? 'text-primary' : 'text-foreground'}`}>
                      Межгород
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">90 ₽/км</p>
                  </button>
                  <button
                    onClick={() => setDeliveryType('hourly')}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      deliveryType === 'hourly'
                        ? 'border-primary bg-primary/10'
                        : 'border-border bg-card hover:border-primary/50'
                    }`}
                  >
                    <Icon name="Clock" size={32} className={deliveryType === 'hourly' ? 'text-primary' : 'text-muted-foreground'} />
                    <p className={`font-semibold mt-2 ${deliveryType === 'hourly' ? 'text-primary' : 'text-foreground'}`}>
                      По городу
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">1500 ₽/час</p>
                  </button>
                </div>

                {deliveryType === 'intercity' ? (
                <>
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
                      {russianCities.map((city) => (
                        <option key={city} value={city}>{city}</option>
                      ))}
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
                      {russianCities.map((city) => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="distance" className="text-foreground">Расстояние (км)</Label>
                  <div className="relative">
                    <Input
                      id="distance"
                      type="number"
                      placeholder="Введите расстояние вручную"
                      value={distance}
                      onChange={(e) => setDistance(e.target.value)}
                      className="bg-input border-border text-foreground"
                    />
                    {!distance && (
                      <p className="text-xs text-muted-foreground mt-1">
                        Выберите города или введите расстояние вручную
                      </p>
                    )}
                  </div>
                </div>
                </>
                ) : (
                <div className="space-y-2">
                  <Label htmlFor="hours" className="text-foreground">Количество часов</Label>
                  <Input
                    id="hours"
                    type="number"
                    placeholder="Введите количество часов"
                    value={hours}
                    onChange={(e) => setHours(e.target.value)}
                    className="bg-input border-border text-foreground"
                    min="1"
                    step="0.5"
                  />
                  <p className="text-xs text-muted-foreground">
                    Минимальный заказ: 1 час
                  </p>
                </div>
                )}

                <Button onClick={calculateCost} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
                {calculatedCost !== null && (
                  <div className="p-6 bg-secondary rounded-lg border border-border">
                    {deliveryType === 'intercity' ? (
                      <>
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
                      </>
                    ) : (
                      <div className="mb-4">
                        <p className="text-sm text-muted-foreground">Время работы:</p>
                        <p className="font-semibold text-foreground">{hours} {parseFloat(hours) === 1 ? 'час' : parseFloat(hours) < 5 ? 'часа' : 'часов'}</p>
                      </div>
                    )}
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
  );
}
