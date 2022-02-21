plugins {
  scala
  application
}

java {
  toolchain {
    languageVersion.set(JavaLanguageVersion.of(17))
  }
}

repositories {
  mavenCentral()
}

dependencies {
  implementation("org.scala-lang:scala3-library_3:3.1.0")
  implementation("com.google.guava:guava:30.1.1-jre")

  testImplementation("org.scalatest:scalatest_3:3.2.10")
  testRuntimeOnly("org.junit.platform:junit-platform-engine:1.6.0")
  testRuntimeOnly("org.junit.platform:junit-platform-launcher:1.6.0")
  testRuntimeOnly("co.helmethair:scalatest-junit-runner:0.1.10")
}

tasks {
  test{
    useJUnitPlatform {
      includeEngines("scalatest")
      testLogging {
        events("passed", "skipped", "failed")
      }
    }
  }
}

application {
  mainClass.set("dev.gabrieljones.App")
}
