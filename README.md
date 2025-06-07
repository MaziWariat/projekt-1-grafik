# Projekt 1 – Grafik Treningowy

![Docker Build Status](https://img.shields.io/badge/docker-build-green)  
![License](https://img.shields.io/badge/license-MIT-blue)

Lekka aplikacja SPA do zarządzania grafikiem treningów, zbudowana w oparciu o FullCalendar.  
– Zakres czasowy: 15:00–23:00  
– Bez weekendów  
– Dodawanie / usuwanie rezerwacji  
– Dane przechowywane w `localStorage`  
– Tabela rezerwacji poniżej kalendarza

---

## 📦 Struktura projektu

```
projekt-1-grafik/
├── index.html          # punkt wejścia SPA
├── apps.js             # logika kalendarza i localStorage
├── style.css           # stylizacja (czytelna i lekka)
├── nginx.conf          # konfiguracja Nginx
├── docker-compose.yml  # definicja usługi Docker
├── Dockerfile          # budowa obrazu Docker
└── README.md           # ta instrukcja
```

---

## 🔧 Wymagania

- Docker Desktop  
- (opcjonalnie) Docker Compose  

---

## 🚀 Uruchamianie lokalnie

1. **Klon repozytorium**  
   ```bash
   git clone https://github.com/MaziWariat/projekt-1-grafik.git
   cd projekt-1-grafik
   ```

2. **Budowa i start**  
   ```bash
   docker compose up --build -d
   ```

3. **Sprawdzenie**  
   Otwórz w przeglądarce:  
   ```
   http://localhost:8080
   ```

---

## 🛠️ Rozwój

- Edytuj `index.html`, `apps.js`, `style.css` lokalnie, a następnie:
  ```bash
  docker compose restart
  ```
- Zmiana portu: modyfikuj `ports` w `docker-compose.yml`.

---

## 📖 Plany na przyszłość

- **CI/CD**: dodanie GitHub Actions po zakończeniu kursu.  
- **Publikacja obrazu**:  
  ```bash
  docker tag projekt1-grafik MaziWariat/projekt1-grafik:latest
  docker push MaziWariat/projekt1-grafik:latest
  ```
- **Wdrożenie**: AWS, Azure, DigitalOcean.

---

## 📄 Licencja

MIT © [Mazi](https://github.com/MaziWariat)
