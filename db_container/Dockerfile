FROM postgres
ENV POSTGRES_USER postgres
ENV POSTGRES_PASSWORD 123
ENV POSTGRES_DB mydatabase
COPY init.sql /docker-entrypoint-initdb.d/
EXPOSE 5432
