FROM adoptopenjdk/openjdk11:latest
WORKDIR usr/src
VOLUME /tmp
ADD target/leaderboard-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]