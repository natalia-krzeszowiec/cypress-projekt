const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      },
      baseUrl:"http://www.automationpractice.pl/", // Dodajemy url strony, którą będziemy testować
      redirectionLimit:3, // Ustawiamy jaka będzie maksymalna liczba przekierowań ze strony. Np w przypadku wirusa jest ich duzo wiec Cypress będzie wiedział, ze akceptujemy tylko tyle, ile zadeklarowaliśmy
      retries: {           // Wprowadamy tu liczbę ile razy będzie cypress będzie ponawiał test jeśli wyskoczy jakiś błąd. Czasem błędy są tymczasowe więc warto określić 
        "runMode": 1,     // tryb RunMode jest to tryb niewidoczny dla oka, w tle
        "openMode":1,     // Open Mode to takie testy w ekranie, widzimy jakie są i logi do nich 
      },         
      watchForFileChanges: true, // Jeśli mamy w tle uruchomiony test, a on skończył się wykonywać, a my wykryliśmy w teście błąd i dopiero po tym go poprawiliśmu to Cypress jeszcze raz automatycznie uruchomi ten test po dokonaniu zmiany 
      chromeWebSecurity:false , // Niektóre strony nie mają zabezpieczeń https, a my czasem pracujemy na testowej wersji, niezabezpieczonej i aby Cypress nam nie wyrzucał błędów to ustalamy ten parametr na false
      viewportWidth:1920, // Ustawiamy wysokość i szerokość przeglądarki, na której będziemy testować
      viewportHeight:1080,
      waitForAnimations:true, // Jeśli na stronie są Animacje, to Cypress poczeka az strona się załaduje z tymi animacjami i wykona testy dopeiro po zakończeniu animacji na stronie
      testIsolation:false, // paramter ten pozwala osiągnąć to, ze w kazdym nowo uruchamianym teście tworzymy nowy wątek - na nowo otwieramy stronę więc np. cookiesy pojawiają się na nowo, to jest przydatne normalnie 
      theme: "dark", // Dodanie linii zmieniającej motyw Cypressa na czarny
      video: true
  },
});
