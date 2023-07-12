main();
  async function main() {
      // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты API
      await ymaps3.ready;

      // Создание карты
      map = new ymaps3.YMap(document.getElementById('map'), {
          location: {
              // Координаты центра карты
              // Порядок по умолчанию: «долгота, широта»
              center: [76.948451, 43.242841],

              // Уровень масштабирования
              // Допустимые значения: от 0 (весь мир) до 21.
              zoom: 18
          }
      });

      // Добавляем слой для отображения схематической карты
      map.addChild(new ymaps3.YMapDefaultSchemeLayer());
  }