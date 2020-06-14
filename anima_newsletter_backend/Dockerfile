FROM openjdk:14
VOLUME /tmp
ARG JAR_FILE=target/*.jar
COPY ./ /app
WORKDIR /app
RUN ./mvnw package -Dmaven.test.skip=true
RUN mv ${JAR_FILE} ./app.jar
ENTRYPOINT ["sh", "-c", "java -jar ./app.jar"]