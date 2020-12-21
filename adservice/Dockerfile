FROM adoptopenjdk/openjdk11 as builder

WORKDIR /usr/app
COPY ./build/libs/hipstershop-0.1.0-SNAPSHOT-fat.jar /usr/app/
COPY ./tracinglib/opentelemetry-javaagent-all.jar /usr/app/
WORKDIR /usr/app
EXPOSE 9555
ENTRYPOINT ["java","-javaagent:opentelemetry-javaagent-all.jar","-Dotel.exporter=jaeger","-Dotel.exporter.jaeger.service.name=AdService","-Dotel.exporter.jaeger.endpoint=jaeger:14250","-jar", "hipstershop-0.1.0-SNAPSHOT-fat.jar"]






