# Требования к добавляемому облачному сервису

- Модуль должен иметь клиент-серверную архитектуру.
- Модуль должен быть открыт по http протоколу на порут в дипаазоне 6000-7000 на адресе 0.0.0.0. Пример адреса `http://0.0.0.0:7000`.
- Модуль должен разворачиваться в среде Ubuntu server 20.04 или в docker контейнере.

# Настройка сервера

Для настройки сервера небходимо сделать следующее:

- Добавте код нового сервера в папку `~/geoviewer/cloud_system/deploy/` на сервере (смотрите инструкцию по администрированию сервера);
- запустите сервис на одном из свободных портов от 6000 до 7000 (пример `http://0.0.0.0:7000`);
- проверте работу сервиса (сервис должен быть доступен на 7000 порту сервера).

# Добавление сервиса в docker-compose.yaml файл

Отребактируйте файл `~/geoviewer.cloud_system/docker-compose-standalone.yaml` c параметрами сервиса. Пример:

```yaml
newservice:
  container_name: 'postgres-gv'
  image: postgres:13.3
  ports:
    - '5432:5432'
  volumes:
    - ./volumes/pg_database:/var/lib/postgresql/data
    - ./deploy/postgres:/docker-entrypoint-initdb.d
  env_file:
    - .env
  networks:
    - geoviewer
  restart: unless-stopped
```

# Настройки reverse proxy Nginx

Для добавления сервиса к интерфейсу сисстемы необходимо в файле `deploy/nginx/gv.nginx` прописать следующие параметры:

```nginx
    location /newservice {
        proxy_buffer_size   128k;
        proxy_buffers   4 256k;
        proxy_busy_buffers_size   256k;
        proxy_set_header X-Forwarded-For $proxy_protocol_addr; # To forward the original client's IP address
        proxy_set_header X-Forwarded-Proto $scheme; # to forward the  original protocol (HTTP or HTTPS)
        proxy_set_header Host $host; # to forward the original host requested by the client
        proxy_pass http://172.133.0.1;
    }
```

`location /newservice` замените на имя сервиса. При добавлении сервиса в файд `docker-compose-standalone.yaml` замените в ключе proxy_pass адрес на http://newservice:7000.

# Добавление сервиса к интерфейсу

Отредактируйте `~/geoviewer/cloud_system/deploy/page/src/App.jsx` добавте компоненту для запуска сервиса.

# Запуск сервера для применения обновлений

Зайдите на сервер в `~/geoviewer/cloud_system` и выполните команду

```bash
make ups
```
